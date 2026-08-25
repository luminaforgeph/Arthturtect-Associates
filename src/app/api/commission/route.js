import { NextResponse } from "next/server";

// Helper function to escape HTML special characters to prevent HTML injection in emails
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, projectIntent, location, description } = body;

    // 1. Server-side Input Validation
    if (!name || !name.trim()) {
      return NextResponse.json(
        { success: false, error: "Full Name is required." },
        { status: 400 }
      );
    }

    if (!email || !email.trim() || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "A valid Email Address is required." },
        { status: 400 }
      );
    }

    if (!projectIntent) {
      return NextResponse.json(
        { success: false, error: "Please select a Project Intent category." },
        { status: 400 }
      );
    }

    if (!description || !description.trim() || description.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: "Please provide a brief project description (at least 10 characters)." },
        { status: 400 }
      );
    }

    // 2. Check for Required Environment Variables
    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.COMMISSION_RECIPIENT_EMAIL;
    const senderEmail = process.env.COMMISSION_SENDER_EMAIL || "onboarding@resend.dev";

    if (!apiKey || !recipientEmail) {
      console.warn(
        "Commission submission error: RESEND_API_KEY or COMMISSION_RECIPIENT_EMAIL environment variable is missing."
      );
      return NextResponse.json(
        {
          success: false,
          error: "Commission email service is not configured. Please contact Arthurtect Associates directly via phone or atelier address.",
        },
        { status: 503 }
      );
    }

    // 3. Construct Sanitized Email Payload
    const cleanName = escapeHtml(name.trim());
    const cleanEmail = escapeHtml(email.trim());
    const cleanPhone = escapeHtml(phone ? phone.trim() : "Not provided");
    const cleanLocation = escapeHtml(location ? location.trim() : "Not provided");
    const cleanIntent = escapeHtml(projectIntent);
    const cleanDescription = escapeHtml(description.trim()).replace(/\n/g, "<br/>");
    const timestamp = new Date().toUTCString();

    const htmlBody = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: monospace, -apple-system, sans-serif; background-color: #0a0a0a; color: #f5f5f2; padding: 24px; line-height: 1.6; }
            .card { background-color: #141414; border: 1px solid #262624; padding: 24px; max-width: 600px; margin: 0 auto; }
            .header { border-bottom: 1px solid #262624; padding-bottom: 16px; margin-bottom: 20px; font-size: 12px; color: #8e8e8a; text-transform: uppercase; letter-spacing: 0.15em; }
            .title { font-size: 20px; color: #f5f5f2; margin-bottom: 16px; font-weight: 300; }
            .field { margin-bottom: 16px; }
            .label { font-size: 10px; text-transform: uppercase; color: #8e8e8a; letter-spacing: 0.1em; display: block; margin-bottom: 4px; }
            .value { font-size: 14px; color: #f5f5f2; font-weight: 400; }
            .description { background-color: #0a0a0a; border: 1px solid #262624; padding: 16px; margin-top: 8px; font-size: 13px; color: #d0d0cc; }
            .footer { border-top: 1px solid #262624; margin-top: 24px; padding-top: 16px; font-size: 10px; color: #8e8e8a; text-transform: uppercase; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">ARTHURTECT ASSOCIATES • COMMISSION INQUIRY</div>
            <div class="title">New Spatial Monograph Inquiry</div>

            <div class="field">
              <span class="label">CLIENT NAME</span>
              <div class="value">${cleanName}</div>
            </div>

            <div class="field">
              <span class="label">EMAIL ADDRESS</span>
              <div class="value">${cleanEmail}</div>
            </div>

            <div class="field">
              <span class="label">TELEPHONE</span>
              <div class="value">${cleanPhone}</div>
            </div>

            <div class="field">
              <span class="label">SITE GEOGRAPHY / LOCATION</span>
              <div class="value">${cleanLocation}</div>
            </div>

            <div class="field">
              <span class="label">PROJECT INTENT CATEGORY</span>
              <div class="value">${cleanIntent}</div>
            </div>

            <div class="field">
              <span class="label">PROJECT DESCRIPTION &amp; SCOPE</span>
              <div class="description">${cleanDescription}</div>
            </div>

            <div class="footer">
              TRANSMITTED VIA ARTHURTECT DIRECT PORTAL • ${timestamp}
            </div>
          </div>
        </body>
      </html>
    `;

    // 4. Server-Side Native Fetch to Resend API
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Arthurtect Inquiries <${senderEmail}>`,
        to: [recipientEmail],
        reply_to: email.trim(),
        subject: `New Commission Inquiry: [${cleanIntent}] — ${cleanName}`,
        html: htmlBody,
      }),
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error("Resend API delivery error:", resendResponse.status, resendData?.message || resendData);
      return NextResponse.json(
        {
          success: false,
          error: "Failed to dispatch commission email via mail service. Please try again or contact studio directly.",
        },
        { status: 502 }
      );
    }

    console.log("Commission inquiry email dispatched successfully via Resend. ID:", resendData.id);

    return NextResponse.json(
      {
        success: true,
        message: "Your commission inquiry has been received. Our partner team will review your project parameters.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in commission handler execution:", error.message || error);
    return NextResponse.json(
      { success: false, error: "Internal server error processing commission inquiry. Please try again." },
      { status: 500 }
    );
  }
}
