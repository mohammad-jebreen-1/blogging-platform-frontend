"use client";

import React, { useState } from "react";
import { redirect } from "next/navigation";
import axiosInstance from "../../lib/axios-instance";
import { useAuthContext } from "../../context/auth-context";
import { Container, Form, Title } from "./styles";
import { isObjectEmpty } from "../../lib/client-helpers";
import { validateLoginData } from "../../lib/validators";
import InfoText from "./info-text";
import Button from "../common/button/index";
import Input from "../common/auth-input";
import ErrorText from "../common/error-text/index";

const Login = () => {
  const { user, setUser } = useAuthContext();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [validationError, setValidationError] = useState({});
  const [submitError, setSubmitError] = useState("");

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const err = validateLoginData(data);
    setValidationError(err);

    const isValid = isObjectEmpty(err);

    if (isValid) {
      try {
        const apiRes = await axiosInstance.post("/api/auth/login", data);

        if (apiRes?.data?.success) {
          setSubmitError("");

          const userData = apiRes.data.user;

          setUser({
            ...userData,
          });
        } else {
          setSubmitError("you need to signup first");
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
      <Form onSubmit={handleLogin}>
        <Title> Login </Title>
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
        <Button type={"submit"} title={"Login"} />
        {submitError && <ErrorText text={submitError} />}
        <InfoText
          text={"Don't have an account ?"}
          linkHref={"/signup"}
          linkTitle={"Sign up"}
        />
      </Form>
    </Container>
  );
};

export default Login;
