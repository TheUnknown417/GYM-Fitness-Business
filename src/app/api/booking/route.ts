import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, membershipType, preferredDate, preferredTime } =
      await request.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // TODO: Integrate with your booking system (e.g., Calendly, Acuity, etc.)
    // Example:
    // await createBooking({
    //   name,
    //   email,
    //   phone,
    //   membershipType,
    //   preferredDate,
    //   preferredTime
    // });

    console.log("Trial class booking:", {
      name,
      email,
      phone,
      membershipType,
      preferredDate,
      preferredTime,
    });

    return NextResponse.json(
      { message: "Booking request received. We'll contact you soon!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json(
      { error: "Failed to process booking" },
      { status: 500 }
    );
  }
}

