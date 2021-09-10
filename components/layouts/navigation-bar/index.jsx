import Link from "next/link";
import styled from "styled-components";
import { Popover } from "@headlessui/react";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import SearchBar from "./components/search-bar";
import useUser from "../../../custom-hooks/use-user";

import Logo from "../logo";
import User from "./components/svgs/user.svg";
import Message from "./components/svgs/message.svg";
import Bell from "./components/svgs/bell.svg";
import { crushToken } from "../../../utils/token-manager";

function NavigationBar() {
  const { user, loading, loggedOut, mutate } = useUser();
  const router = useRouter();
  const [isLoggedIn] = useState(true);

  return (
    <NavBar className="fixed w-full bg-white z-20">
      <div className="w-11/12 mx-auto flex items-center justify-between h-full">
        <div className="flex items-center">
          <Link href="/">
            <a>
              <Logo className="md:h-7 h-5" />
            </a>
          </Link>

          {router.pathname.includes("search") && <SearchBar />}
        </div>

        {!user && (
          <div className="hidden md:flex items-center">
            <Link href="/login">
              <a className="mr-8 text-sm font-medium">Login As Chef</a>
            </Link>

            <Link href="/signup">
              <a className="mr-8 text-sm font-medium">Signup As Chef</a>
            </Link>

            <button>
              <a className="border-2 px-4 py-2 rounded border-black text-sm font-medium">
                Login / Signup
              </a>
            </button>
          </div>
        )}

        {user && (
          <div className="flex items-center">
            <Bell className="mr-5" />
            <Message className="mr-5" />

            <Popover className="relative">
              <Popover.Button>
                <div className="relative bg-gray-200 h-11 w-11 rounded-full">
                  {/* <Image
                src={`${IMAGE_URL}${formatProfileData(data).profilePic}`}
                alt="chef"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              /> */}
                </div>
              </Popover.Button>

              <Popover.Panel className="absolute z-10 border right-1 bg-white rounded-lg">
                <div className="flex flex-col w-44 py-2">
                  <button
                    onClick={() => {
                      crushToken("token");
                      mutate(null);
                      router.replace("/");
                    }}
                  >
                    Logout
                  </button>
                </div>
              </Popover.Panel>
            </Popover>
          </div>
        )}

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
