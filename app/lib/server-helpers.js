import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const isProduction = process.env.NODE_ENV === "production";

export const setAuthCookies = (value) => {
  cookies().set({
    name: "token",
    value: value,
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "strict" : "lax",
    maxAge: value ? 7 * 24 * 60 * 60 : 0,
  });
};

export const isUserAuthorized = async () => {
  const token = cookies().get("token")?.value;

  let user = null;

  if (token) {
    const data = jwt.decode(token);

    return { userId: data.id, email: data.email };
  }

  return user;
};
