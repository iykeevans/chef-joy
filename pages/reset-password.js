import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Formik } from "formik";
import { useSnackbar } from "nextjs-toast";

import { loginUser } from "../services/auth-api/user";
import ChTextField from "../components/base/ch-text-field";
import { loginSchema } from "../utils/validate-schema";
import { setToken } from "../utils/token-manager";

import LayoutTwo from "../components/layouts/layout-two";
import AuthChef from "../components/svg/auth-chef.svg";
import hasError from "../utils/has-error";

function ResetPassword() {
  const snackbar = useSnackbar();
  const initialValues = { password: "", confirmPassword: "" };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const { email, password } = values;
      const { data } = await loginUser({
        email: email.toLowerCase().trim(),
        password: password.trim(),
      });

      setToken("token", data.userlogin.token);
      snackbar.showMessage("User successfully logged in", "success", "filled");
      mutate(data);
    } catch (err) {
      if (err.message.includes(403)) {
        snackbar.showMessage(
          "User may not exist or is not verified",
          "error",
          "filled"
        );
        return;
      }
      snackbar.showMessage("An error occured", "error", "filled");
      console.log(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="flex flex-col md:flex-row justify-between pt-32">
        <section className="md:w-7/12 flex justify-center">
          <StyledAuthChef />
        </section>

        <section className="md:w-4/12">
          <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
          >
            {(formik) => (
              <Form
                className="md:p-7 py-5 flex flex-col"
                onSubmit={formik.handleSubmit}
              >
                <h1 className="text-3xl font-bold md:text-left text-center mb-2">
                  Reset Password
                </h1>

                <p className="text-gray-500 md:text-left text-center mb-4">
                  Enter your new password.
                </p>

                <ChTextField
                  label="New Password"
                  className="px-3 focus:outline-none"
                  {...formik.getFieldProps("password")}
                  hasError={hasError(formik, "password")}
                  errorMessage={
                    hasError(formik, "password") && formik.errors.password
                  }
                />

                <div className="mt-5">
                  <ChTextField
                    label="Re-Type New Password"
                    className="px-3 focus:outline-none"
                    {...formik.getFieldProps("password")}
                    hasError={hasError(formik, "password")}
                    errorMessage={
                      hasError(formik, "password") && formik.errors.password
                    }
                  />
                </div>

                <div className="flex justify-between items-center mt-8">
                  <button
                    className={`${
                      formik.isSubmitting
                        ? "bg-gray-200 text-gray-400"
                        : "bg-black text-white"
                    } py-4 px-7 rounded-lg`}
                    type="submit"
                    disabled={formik.isSubmitting}
                  >
                    {formik.isSubmitting ? "Submitting" : "Reset Password"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </section>
      </div>
    </div>
  );
}

const StyledAuthChef = styled(AuthChef)`
  height: 250px;

  @media screen and (min-width: 768px) {
    height: 500px;
  }
`;

const Form = styled.form`
  @media screen and (min-width: 768px) {
    box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
`;

ResetPassword.getLayout = LayoutTwo;

export default ResetPassword;
