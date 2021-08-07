import React from "react";

function HowItWorks() {
  return (
    <section className="w-9/12 mx-auto pt-44">
      <h2 className="text-4xl font-semibold text-center mb-14">How It Works</h2>

      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:w-3/12 flex flex-col items-center">
          <div
            className="mb-8"
            style={{ height: 200, width: 200, background: "#eee" }}
          ></div>

          <div
            className="flex justify-center items-center rounded-full mb-4 font-medium"
            style={{ width: 36, height: 36, background: "#ccc" }}
          >
            1
          </div>

          <h3 className="text-xl font-semibold mb-3">Choose A Menu</h3>

          <div className="text-center text-gray-500">
            Feaugiat in ante metus dictum tempor. Dui faucibus in ornare quam
            viverra. Elementum facilsis leo vel fringil
          </div>
        </div>

        <div className="md:w-3/12 flex flex-col items-center">
          <div
            className="mb-8"
            style={{ height: 200, width: 200, background: "#eee" }}
          ></div>

          <div
            className="flex justify-center items-center rounded-full mb-4 font-medium"
            style={{ width: 36, height: 36, background: "#ccc" }}
          >
            2
          </div>

          <h3 className="text-xl font-semibold mb-3">Meet Your Chef</h3>

          <div className="text-center text-gray-500">
            Feaugiat in ante metus dictum tempor. Dui faucibus in ornare quam
            viverra. Elementum facilsis leo vel fringil
          </div>
        </div>

        <div className="md:w-3/12 flex flex-col items-center">
          <div
            className="mb-8"
            style={{ height: 200, width: 200, background: "#eee" }}
          ></div>

          <div
            className="flex justify-center items-center rounded-full mb-4 font-medium"
            style={{ width: 36, height: 36, background: "#ccc" }}
          >
            3
          </div>

          <h3 className="text-xl font-semibold mb-3">Relax And Eat</h3>

          <div className="text-center text-gray-500">
            Feaugiat in ante metus dictum tempor. Dui faucibus in ornare quam
            viverra. Elementum facilsis leo vel fringil
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
