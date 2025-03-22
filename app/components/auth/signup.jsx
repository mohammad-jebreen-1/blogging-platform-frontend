"use client";

import { isObjectEmpty } from "../../lib/client-helpers";
import { validateSignupData } from "../../lib/validators";
import axiosInstance from "../../lib/axios-instance";
import React, { useState } from "react";
import Button from "../common/button";
import Input from "../common/auth-input";
import { Container, Form, Title } from "./styles";
import InfoText from "./info-text";
import { redirect } from "next/navigation";
import ErrorText from "../common/error-text";
import { useAuthContext } from "../../context/auth-context";

const Signup = () => {
  const { user, setUser } = useAuthContext();

  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [validationError, setValidationError] = useState({});
  const [submitError, setSubmitError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSignup = async (event) => {
    event.preventDefault();

    const err = validateSignupData(data);
    setValidationError(err);

    const isValid = isObjectEmpty(err);

    if (isValid) {
      try {
        const apiRes = await axiosInstance.post("/api/auth/signup", data);

        if (apiRes?.data?.success) {
          setSubmitError("");

          const userData = apiRes.data.user;

          setUser({
            ...userData,
          });
        }
      } catch (error) {
        const errorMsg = error.response?.data?.error;
        setSubmitError(errorMsg);
      }
    }
  };

  if (user) return redirect("/dashboard");

  return (
    <Container>
      <Form onSubmit={handleSignup}>
        <Title> Sign up </Title>
        <Input
          label={"Email"}
          name={"email"}
          value={data.email}
          onChange={handleInputChange}
          error={validationError.email}
        />
        <Input
          label={"Password"}
          name={"password"}
          type={"password"}
          value={data.password}
          onChange={handleInputChange}
          error={validationError.password}
        />
        <Input
          label={"Confirm Password"}
          name={"confirmPassword"}
          type={"password"}
          value={data.confirmPassword}
          onChange={handleInputChange}
          error={validationError.confirmPassword}
        />
        <Button type={"submit"} title={"Sign up"} />
        {submitError && <ErrorText text={submitError} />}
        <InfoText
          text={"Already have an account ?"}
          linkHref={"/login"}
          linkTitle={"Login"}
        />
      </Form>
    </Container>
  );
};

export default Signup;
