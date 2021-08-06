import React from "react";

function Signup() {
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex flex-col md:flex-row pt-24">
        <section className="md:w-7/12"></section>

        <section className="md:w-4/12">
          <form
            className="p-7 flex flex-col"
            style={{
              boxShadow: "0px 7px 64px rgba(0, 0, 0, 0.10)",
              borderRadius: 8,
            }}
          >
            <h1 className="text-3xl font-bold mb-2">Get Started</h1>
            <p className="text-gray-500 mb-4">Let&apos;s create your account</p>

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
                type="text"
                className="border mt-1"
                style={{ borderRadius: 8, height: 42 }}
              />
            </label>

            <div className="flex items-center justify-between mt-5 mb-5">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Keep me signed in
              </div>

              <div>forgot password?</div>
            </div>

            <button
              className="bg-black text-white py-4 mb-5"
              style={{ borderRadius: 8 }}
            >
              Sign up
            </button>

            <span className="text-center">Already have an account? Login</span>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Signup;
