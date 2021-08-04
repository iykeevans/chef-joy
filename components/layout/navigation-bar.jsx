import React from "react";

function NavigationBar() {
  return (
    <nav className="flex items-center justify-between border h-16">
      <div>Logo</div>

      <div>
        <button>Login As Chef</button>
        <button>Signup As Chef</button>
        <button>Login / Signup</button>
      </div>
    </nav>
  );
}

export default NavigationBar;
