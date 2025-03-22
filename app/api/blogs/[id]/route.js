import { NextResponse } from "next/server";
import axiosInstance from "../../lib/axios-instance";

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

    const response = await axiosInstance.get(`/blogs/${id}`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });

    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to received the blog" },
      { status: error.status }
    );
  }
}

export async function PATCH(req, { params }) {
  try {
    const token = req.cookies.get("token");

    if (!token) {
      return NextResponse.json(
        { error: "Authentication token is missing" },
        { status: 401 }
      );
    }

    const updateBlog = await req.formData();

    const { id } = params;

    const response = await axiosInstance.patch(`/blogs/${id}`, updateBlog, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });

    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update the blog" },
      { status: error.status }
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    const token = req.cookies.get("token");

    if (!token) {
      return NextResponse.json(
        { error: "Authentication token is missing" },
        { status: 401 }
      );
    }

    const { id } = params;

    await axiosInstance.delete(`/blogs/${id}`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });

    return NextResponse.json({ message: "Blog deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete the blog" },
      { status: error.status }
    );
  }
}
