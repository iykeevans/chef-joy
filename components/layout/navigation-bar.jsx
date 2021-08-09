import Link from "next/link";
import styled from "styled-components";

import Logo from "./logo";

function NavigationBar() {
  return (
    <NavBar className="fixed w-full bg-white z-10">
      <div className="w-11/12 mx-auto flex items-center justify-between h-full">
        <Link href="/">
          <a>
            <Logo className="md:h-7 h-6" />
          </a>
        </Link>

        <div className="hidden md:flex items-center">
          <Link href="/chef/login">
            <a className="mr-8 text-sm font-medium">Login As Chef</a>
          </Link>

          <Link href="/chef/signup">
            <a className="mr-8 text-sm font-medium">Signup As Chef</a>
          </Link>

          <button>
            <a className="border-2 px-4 py-2 rounded border-black text-sm font-medium">
              Login / Signup
            </a>
          </button>
        </div>
      </div>
    </NavBar>
  );
}

export default NavigationBar;

const NavBar = styled.nav`
  height: 80px;
  border-bottom: 1px solid #eee;
`;
