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

  const isSearchPath = () => router.pathname.includes("search");

  return (
    <NavBar
      className="fixed w-full bg-white z-20"
      isSearchPath={isSearchPath()}
    >
      <div className="w-11/12 mx-auto flex items-center justify-between h-full">
        <div className="flex items-center">
          <Link href="/">
            <a>
              <Logo className="md:h-7 h-5" />
            </a>
          </Link>

          {isSearchPath() && <SearchBar />}
        </div>

        {!user && (
          <div className="hidden md:flex items-center">
            <button>
              <a className="mr-8 text-sm font-medium">Login As Chef</a>
            </button>

            <button>
              <a className="mr-8 text-sm font-medium">Signup As Chef</a>
            </button>

            <Link href="/login">
              <a className="border-2 px-4 py-2 rounded border-black text-sm font-medium">
                Login / Signup
              </a>
            </Link>
          </div>
        )}

        {user && (
          <div className="hidden md:flex items-center">
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

        {/* Mobile Navigation Starts Here */}
        <div className="md:hidden">
          <div className="flex items-center">
            {/* search icon */}
            {isSearchPath() && (
              <button className="w-5 h-5 mr-5" onClick={() => router.push("/")}>
                <svg viewBox="0 0 21.115 21.115">
                  <g id="Group_11471" transform="translate(1 -4.32)">
                    <circle
                      id="Ellipse_40"
                      cx="7.48"
                      cy="7.48"
                      r="7.48"
                      transform="translate(0 5.32)"
                      fill="none"
                      stroke="#000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <line
                      id="Line_21"
                      x1="5.61"
                      y1="5.61"
                      transform="translate(13.091 18.41)"
                      fill="none"
                      stroke="#000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </button>
            )}

            {/* user pop over */}
            <Popover className="relative">
              <Popover.Button>
                <div className="bg-red-100 h-9 w-9 rounded-lg flex items-center justify-center">
                  <User className="text-red-500 h-5" />
                </div>
              </Popover.Button>

              {user ? (
                <Popover.Panel className="absolute z-10 border right-1 bg-white rounded-lg">
                  <div className="flex flex-col w-44 py-2">
                    <a className="px-4 py-2">Notification</a>

                    <a className="px-4 py-2">Messages</a>

                    <button
                      className="px-4 py-2 text-left"
                      onClick={() => {
                        crushToken("token");
                        mutate(null);
                        router.replace("/");
                      }}
                    >
                      Log out
                    </button>
                  </div>
                </Popover.Panel>
              ) : (
                <Popover.Panel className="absolute z-10 border right-1 bg-white rounded-lg">
                  <div className="flex flex-col w-44 py-2">
                    <a className="px-4 py-2">Login As Chef</a>

                    <a className="px-4 py-2">Signup As Chef</a>

                    <Link href="/login">
                      <a className="px-4 py-2">Login /Signup</a>
                    </Link>
                  </div>
                </Popover.Panel>
              )}
            </Popover>
          </div>
        </div>
      </div>
    </NavBar>
  );
}

export default NavigationBar;

const NavBar = styled.nav`
  height: 80px;
  ${(props) => !props.isSearchPath && "border-bottom: 1px solid #eee;"}
`;
