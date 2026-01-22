import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, interest, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // TODO: Integrate with your email service (e.g., SendGrid, Resend, etc.)
    // Example:
    // await sendEmail({
    //   to: "info@studio.com",
    //   subject: `Contact Form: ${interest || "General Inquiry"}`,
    //   body: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nInterest: ${interest || "N/A"}\n\nMessage:\n${message}`
    // });

    console.log("Contact form submission:", {
      name,
      email,
      phone,
      interest,
      message,
    });

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}

