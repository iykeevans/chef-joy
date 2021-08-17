import styled from "styled-components";
import Link from "next/link";

import LayoutTwo from "../../components/layouts/layout-two";

import AuthChef from "../../components/svg/auth-chef.svg";

function Signup() {
  return (
    <div className="w-11/12 mx-auto md:pb-10">
      <div className="flex flex-col md:flex-row justify-between pt-32">
        <section className="md:w-7/12 flex justify-center">
          <StyledAuthChef />
        </section>

        <section className="md:w-4/12">
          <Form className="md:p-7 py-5 flex flex-col">
            <h1 className="text-3xl font-bold md:text-left text-center mb-2">
              Get Started
            </h1>
            <p className="text-gray-500 md:text-left text-center mb-4">
              Let&apos;s create your account
            </p>

            <label className="flex flex-col mb-4">
              Name
              <input
                type="text"
                className="border mt-1"
                style={{ borderRadius: 8, height: 42 }}
              />
            </label>

            <label className="flex flex-col mb-4">
              Email
              <input
                type="text"
                className="border mt-1"
                style={{ borderRadius: 8, height: 42 }}
              />
            </label>

            <label className="flex flex-col">
              Password
              <input
                type="password"
                className="border mt-1"
                style={{ borderRadius: 8, height: 42 }}
              />
            </label>

            <div className="flex items-center justify-between text-sm mt-5 mb-5">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Keep me signed in
              </div>

              <div className="text-red-600">forgot password?</div>
            </div>

            <button
              className="bg-black text-white py-4 mb-5"
              style={{ borderRadius: 8 }}
            >
              Sign up
            </button>

            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link href="/chef/login">
                <a className="text-red-600">Login</a>
              </Link>
            </div>
          </Form>
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

Signup.getLayout = LayoutTwo;

export default Signup;
