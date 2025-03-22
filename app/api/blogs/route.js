import { NextResponse } from "next/server";
import axiosInstance from "../lib/axios-instance";

export async function GET(req) {
  try {
    const token = req.cookies.get("token");

    if (!token) {
      return NextResponse.json(
        { error: "Authentication token is missing" },
        { status: 401 }
      );
    }

    const response = await axiosInstance.get("/blogs/", {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });

    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: error.status }
    );
  }
}

export async function POST(req) {
  try {
    const token = req.cookies.get("token");

    if (!token) {
      return NextResponse.json(
        { error: "Authentication token is missing" },
        { status: 401 }
      );
    }

    const newBlog = await req.formData();

    const response = await axiosInstance.post("/blogs", newBlog, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });

    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to add the blog" },
      { status: error.status }
    );
  }
}
