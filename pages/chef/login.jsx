import Link from "next/link";
import styled from "styled-components";

import NavigationBar from "../../components/layout/navigation-bar";
import AuthChef from "../../components/svg/auth-chef.svg";

function Login() {
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex flex-col md:flex-row justify-between pt-32">
        <section className="md:w-7/12 flex justify-center">
          <StyledAuthChef />
        </section>

        <section className="md:w-4/12">
          <Form className="md:p-7 py-5 flex flex-col">
            <h1 className="text-3xl font-bold md:text-left text-center mb-2">
              Welcome Back
            </h1>

            <p className="text-gray-500 md:text-left text-center mb-4">
              Login to Continue
            </p>

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
                type="text"
                className="border mt-1"
                style={{ borderRadius: 8, height: 42 }}
              />
            </label>

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
    border-radius: 8;
  }
`;

Login.getLayout = (page) => (
  <>
    <NavigationBar />
    {page}
  </>
);

export default Login;
