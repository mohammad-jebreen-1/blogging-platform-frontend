import { NextResponse } from "next/server";
import axiosInstance from "../../lib/axios-instance";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email)
      return NextResponse.json(
        { success: false, error: "Email is required" },
        { status: 400 }
      );

    if (!password)
      return NextResponse.json({
        success: false,
        error: "Password is required",
        status: 400,
      });

    const apiRes = await axiosInstance.post("/auth/register", {
      email,
      password,
    });

    if (apiRes?.data) {
      const { token } = apiRes.data;

      const decodedToken = jwt.decode(token);
      if (!decodedToken) {
        return NextResponse.json(
          { success: false, error: "Failed to decode token" },
          { status: 401 }
        );
      }

      const { id, email } = decodedToken;

      const response = NextResponse.json(
        {
          success: true,
          msg: "User registered successfully",
          user: {
            userId: id,
            email,
          },
        },
        { status: 201 }
      );

      response.cookies.set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      });

      return response;
    }

    return NextResponse.json(
      { success: false, error: apiRes?.data?.error || "Registration failed" },
      { status: 400 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message || "Internal server error" },
      { status: error.status }
    );
  }
}
