import Image from "next/image";
import React, { FC, useContext, useEffect, useState } from "react";
import logo from "../../../Assets/favicon/storyverse.png";
import Link from "next/link";
import { AuthContext } from "@/Context/userContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";

const Header: FC<any> = () => {
  const { user, logOut } = useContext(AuthContext);
  const [show, setShow] = useState<boolean>(false);

  const handleLogOut = () => {
    if (logOut) {
      logOut()
        .then(result => {})
        .then(err => {
          console.log(err);
        });
    }
  };

  return (
    <header className="flex sticky top-0 left-0 z-[100]  bg-white py-4 px-4 md:px-10 items-center justify-between">
      <div className=" md:flex  hidden text-black font-semibold text-xl items-center gap-x-10">
        <Link href={"/"}>Home</Link>
        <Link href={"/posts"}>Posts</Link>
        <Link href={"/about"}>About</Link>
      </div>
      <Image className="w-32 md:w-60" src={logo} alt="" />
      <div className="space-x-5 md:flex  hidden items-center gap-x-4">
        {user ? (
          <>
            <p className="font-semibold text-xl">{user.displayName}</p>
            <Link  className="font-semibold text-xl" href={'/dashboard'}>DashBoard</Link>
            <button
              onClick={() => handleLogOut()}
              className="text-xl font-semibold"
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link href="/auth">
              <button className="bg-[#EF3F48] text-white px-4 py-2 rounded-full font-semibold">
                SIGN IN
              </button>
            </Link>
            <Link href="/auth">
              <button className="bg-white border border-[#EF3F48] text-[#EF3F48] px-4 py-2 rounded-full font-semibold">
                SIGN UP
              </button>
            </Link>
          </>
        )}
      </div>

      <div onClick={()=>setShow(!show)} className="text-xl  md:hidden block text-zinc-800">
        <GiHamburgerMenu />
      </div>

      <motion.div
        animate={{ x: show ? 0 : -400 }}
        transition={{duration:0.1}}
        className="absolute md:hidden   left-0 flex flex-col text-black font-semibold text-xl  gap-x-10 bg-gray-200 top-16 w-full py-4 px-4 z-50"
      >
        <Link href={"/"}>Home</Link>
        <Link href={"/posts"}>Posts</Link>
        <Link href={"/about"}>About</Link>
      </motion.div>
    </header>
  );
};

export default Header;
