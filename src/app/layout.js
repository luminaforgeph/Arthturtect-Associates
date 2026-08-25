import "./globals.css";

export const metadata = {
  title: "Arthurtect Associates — Architecture & Design Practice",
  description: "Arthurtect Associates is an architectural and design practice creating exceptional, cinematic, and enduring spaces.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0d0d0d] text-[#f4f4f0] min-h-screen antialiased selection:bg-[#f4f4f0] selection:text-[#0d0d0d]">
        {children}
      </body>
    </html>
  );
}
