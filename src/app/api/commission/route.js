import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, projectIntent, location, description } = body;

    // Field validation
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

    // In production, an external email dispatcher (e.g. Resend, SendGrid, Postmark)
    // or Webhook URL would be triggered here using process.env secrets without exposing them.
    // e.g. await sendCommissionInquiryEmail({ name, email, projectIntent, location, description });

    console.log("Commission inquiry received:", {
      name: name.trim(),
      email: email.trim(),
      phone: phone ? phone.trim() : null,
      projectIntent,
      location: location ? location.trim() : null,
      descriptionLength: description.trim().length,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your commission inquiry has been received. Our partner team will review your project parameters.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing commission submission:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error processing commission inquiry. Please try again." },
      { status: 500 }
    );
  }
}
