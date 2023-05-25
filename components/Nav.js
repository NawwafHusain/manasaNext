"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Nav() {
  //configure log in
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <nav className="nav-bar mb-10">
      <Link
        href="/"
        className="w-[13vw] sm:w-[5vw] ml-5 sm:ml-10 translate-y-5"
      >
        <Image
          src="/assets/imgs/ManasaLogo.png"
          alt="Manasa Logo"
          width={150}
          height={150}
          className="logo"
        />
      </Link>

      <div className="sm:hidden flex">Meeu</div>

      <div className="sm:flex hidden mr-5">
        <ul className="flex gap-10 flex-row list-none md:text-sm ">
          <Link href="/">
            <li className=" text-[0.72vw]">Home</li>
          </Link>
          <Link href="/courses">
            <li className=" text-[0.72vw]">Courses</li>
          </Link>

          <Link href="/about">
            <li className="w-max text-[0.72vw]">About Manasa</li>
          </Link>
        </ul>
      </div>

      <div className="sm:flex hidden">
        {loggedIn ? (
          <Link href="/profile">
            <div className="w-32 bg-green-300 rounded-3xl flex justify-center align-middle gap-1 p-1">
              <Image
                src="/assets/imgs/user.png"
                alt="profile"
                width={20}
                height={20}
                className="object-contain"
              />
              <p>Profile</p>
            </div>
          </Link>
        ) : (
          <Link href="/logIn">
            <div className="w-32 bg-green-300 rounded-3xl flex justify-center align-middle gap-1 p-1">
              <Image
                src="/assets/imgs/user.png"
                alt="profile"
                width={20}
                height={20}
                className="object-contain"
              />
              <p>LogIn</p>
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
}
