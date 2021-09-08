import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Formik } from "formik";

import { loginChef } from "../../store/actions/auth-actions";
import ChTextField from "../../components/base/ch-text-field";
import { loginSchema } from "../../utils/validate-schema";

import LayoutTwo from "../../components/layouts/layout-two";
import AuthChef from "../../components/svg/auth-chef.svg";

function Login() {
  const dispatch = useDispatch();
  const router = useRouter();

  const hasError = (formik, field) => {
    const { touched, errors } = formik;
    return touched[field] && errors[field] ? true : false;
  };

  const initialValues = { email: "", password: "" };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("--===-->>", user);
  //   dispatch(loginChef(user));
  // };

  const handleSubmit = async (values, { setSubmitting }) => {
    await dispatch(loginChef(values));
    router.push("/chef/profile");
    setSubmitting(false);
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
                  Welcome Back
                </h1>

                <p className="text-gray-500 md:text-left text-center mb-4">
                  Login to Continue
                </p>

                <ChTextField
                  label="Email"
                  className="px-3 focus:outline-none"
                  {...formik.getFieldProps("email")}
                  hasError={hasError(formik, "email")}
                />

                {hasError(formik, "email") && (
                  <div className="text-sm text-red-500 mt-1">
                    {formik.errors.email}
                  </div>
                )}

                <div className="mt-4">
                  <ChTextField
                    label="Password"
                    className="px-3 focus:outline-none"
                    {...formik.getFieldProps("password")}
                    hasError={hasError(formik, "password")}
                  />

                  {hasError(formik, "password") && (
                    <div className="text-sm text-red-500 mt-1">
                      {formik.errors.password}
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between mt-5 mb-5 text-sm">
                  <div className="flex items-center ">
                    <input type="checkbox" className="mr-2" />
                    Keep me signed in
                  </div>

                  <div className="text-red-600">Forgot password?</div>
                </div>

                <button
                  className="bg-black text-white py-4 mb-5"
                  style={{ borderRadius: 8 }}
                  type="submit"
                >
                  Sign in
                </button>

                <span className="text-center text-sm">
                  Don&apos;t have an Account?{" "}
                  <Link href="/chef/signup">
                    <a className="text-red-600">Signup</a>
                  </Link>
                </span>
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

Login.getLayout = LayoutTwo;

export default Login;
