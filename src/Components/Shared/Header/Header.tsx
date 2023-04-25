import Image from "next/image";
import React, { FC, useContext, useEffect } from "react";
import logo from "../../../Assets/Header/logo.png";
import Link from "next/link";
import { AuthContext } from "@/Context/userContext";

const Header: FC<any> = () => {
  const { user, logOut } = useContext(AuthContext);

  
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
    <header className="flex bg-white py-4 px-10 justify-between">
      <div className="flex font-semibold text-xl items-center gap-x-10">
        <p>Home</p>
        <p>Posts</p>
        <p>About</p>
      </div>
      <Image src={logo} alt="" />
      <div className="space-x-10 flex items-center gap-x-4">
        {user ? (
          <>
            <p className="font-semibold text-xl">{user.displayName}</p>
            <button onClick={()=>handleLogOut()} className="text-xl font-semibold">Log Out</button>
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
    </header>
  );
};

export default Header;