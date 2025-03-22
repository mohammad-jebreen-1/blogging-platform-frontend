import { NextResponse } from "next/server";
import axiosInstance from "../../lib/axios-instance";

export async function POST(req) {
  try {
    const token = req.cookies.get("token");

    if (!token) {
      return NextResponse.json(
        { error: "Authentication token is missing" },
        { status: 401 }
      );
    }

    const { content, blogId } = await req.json();

    const response = await axiosInstance.post(
      `/comments`,
      {
        content,
        blogId,
      },
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      }
    );

    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to add comment the blog" },
      { status: error.status }
    );
  }
}
