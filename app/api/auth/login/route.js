import { NextResponse } from "next/server";
import { config } from "@/config";

export async function POST(request) {
  try {
    const body = await request.json();
    console.log(body);

    const backendResponse = await fetch(`${config.apiBaseUrl}/api/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    console.log(backendResponse);

    const data = await backendResponse.json();

    if (!backendResponse.ok) {
      return NextResponse.json(data, {
        status: backendResponse.status,
      });
    }

    const response = NextResponse.json({
      success: true,
      message: data.message,
    });

    // response.cookies.set("token", data.token, {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === "production",
    //   sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    //   path: "/",
    //   maxAge: 7 * 24 * 60 * 60, // seconds
    // });

    response.cookies.set("token", data.token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
      maxAge: 7 * 24 * 60 * 60, // seconds
    });

    return response;
  } catch (error) {
    console.error("Login Route Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      {
        status: 500,
      },
    );
  }
}
