import Link from "next/link";
import styled from "styled-components";
import { Popover } from "@headlessui/react";

import Logo from "./logo";

import User from "./user.svg";

function NavigationBar() {
  return (
    <NavBar className="fixed w-full bg-white z-20">
      <div className="w-11/12 mx-auto flex items-center justify-between h-full">
        <Link href="/">
          <a>
            <Logo className="md:h-7 h-5" />
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

        <div className="md:hidden">
          <Popover className="relative">
            <Popover.Button>
              <div className="bg-red-100 h-9 w-9 rounded-lg flex items-center justify-center">
                <User className="text-red-500 h-5" />
              </div>
            </Popover.Button>

            <Popover.Panel className="absolute z-10 border right-1 bg-white rounded-lg">
              <div className="flex flex-col w-44 py-2">
                <Link href="/chef/login">
                  <a className="px-4 py-2">Login As Chef</a>
                </Link>

                <Link href="/chef/signup">
                  <a className="px-4 py-2">Signup As Chef</a>
                </Link>

                <Link href="/">
                  <a className="px-4 py-2">Login /Signup</a>
                </Link>
              </div>
            </Popover.Panel>
          </Popover>
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
