import Link from "next/link";
import styled from "styled-components";

import Logo from "./logo";

function NavigationBar() {
  return (
    <NavBar className="fixed w-full bg-white z-10">
      <div className="flex items-center justify-between h-full w-11/12 mx-auto">
        <Link href="/">
          <a>
            <Logo style={{ height: 30 }} />
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
