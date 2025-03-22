import { NextResponse } from "next/server";
import axiosInstance from "../../../lib/axios-instance";

export async function GET(req, { params }) {
  try {
    const token = req.cookies.get("token");

    if (!token) {
      return NextResponse.json(
        { error: "Authentication token is missing" },
        { status: 401 }
      );
    }

    const { id } = params;

    const response = await axiosInstance.get(`/blogs/user/${id}`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });

    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch the blog" },
      { status: error.status }
    );
  }
}
