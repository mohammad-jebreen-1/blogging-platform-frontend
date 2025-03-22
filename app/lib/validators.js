import { EMAIL_PATTERN } from "../constants";

export const validateSignupData = (data) => {
  let err = {};

  if (data.name?.length < 4) {
    err = { name: "Name must be at least 4 characters long" };
  } else if (data.name?.length > 30) {
    err = { name: "Name must be less than 30 characters" };
  } else if (data.email.trim() === "") {
    err = { email: "Email is required" };
  } else if (!EMAIL_PATTERN.test(data.email)) {
    err = { email: "Please provide a valid email" };
  } else if (data.password.trim() === "") {
    err = { password: "Password is required" };
  } else if (data.password?.length < 6) {
    err = { password: "Password should be at least 6 characters long" };
  } else if (data.password !== data.confirmPassword) {
    err = { confirmPassword: "Passwords don't match" };
  }

  return err;
};

export const validateLoginData = (data) => {
  let err = {};

  if (data.email.trim() === "") {
    err = { email: "Email is required" };
  } else if (!EMAIL_PATTERN.test(data.email)) {
    err = { email: "Please provide a valid email" };
  } else if (data.password.trim() === "") {
    err = { password: "Password is required" };
  }

  return err;
};
