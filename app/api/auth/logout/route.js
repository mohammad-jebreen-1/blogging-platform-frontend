import { setAuthCookies } from "../../../lib/server-helpers";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    setAuthCookies();

    return NextResponse.json({ success: true, msg: "User logged out" });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
