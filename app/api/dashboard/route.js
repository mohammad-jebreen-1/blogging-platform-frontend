import { isUserAuthorized } from "../../lib/server-helpers";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const user = await isUserAuthorized();

    if (!user) {
      return NextResponse.json(
        { success: false, msg: "Please log in to view dashboard" },
        { status: 403 }
      );
    }

    return NextResponse.json({ success: true, user });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
