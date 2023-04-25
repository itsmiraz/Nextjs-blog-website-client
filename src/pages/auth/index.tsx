import React, { FC, useState } from "react";
import { FcGoogle } from "react-icons/fc";
export interface Props {}

const Auth: FC<Props> = () => {
  const [loginPageShow, setLoginPageShow] = useState<boolean>(false);

  return (
    <div className="h-[700px] relative w-full flex justify-center items-center">
      {/* Sign In */}
      {loginPageShow ? (
        <>
          <div className="absolute w-[800px] left-0 mx-auto right-0  grid grid-cols-2">
            <div className=" shadow-2xl rounded-l-lg h-[480px] py-10 flex flex-col px-10 bg-white">
              <h1 className="text-4xl my-2 text-center font-semibold">
                Sign In
              </h1>
              <div>
                <p className="my-2">Email Address</p>
                <input
                  type="text"
                  className="rounded-lg w-full bg-[#D9D9D9]/50 p-2"
                />
              </div>
              <div>
                <p className="my-2">Email Address</p>
                <input
                  type="text"
                  className="rounded-lg w-full bg-[#D9D9D9]/50 p-2"
                />
              </div>
              <button className="bg-gradient-to-r  from-[#EF3F48] to-[#EE0772] text-white my-4 rounded-lg py-2">
                SIGN IN
              </button>
              <p className="text-center font-semibold">OR</p>
              <p className="flex items-center gap-2 justify-center my-2 border rounded-lg py-2 cursor-pointer">
                {" "}
                <FcGoogle /> Continue with Google
              </p>
            </div>
            <div className="  shadow-2xl h-[480px] space-y-10 py-20 px-10 rounded-r-lg bg-gradient-to-r text-center  text-white  from-[#EF3F48] to-[#EE0772]">
              <h1 className="text-4xl font-semibold ">Welcome Back !</h1>
              <p className="text-xl">
                To keep connected with us please login with your personal info
              </p>
              <p>
                Dont have an account{" "}
                <span
                  onClick={() => setLoginPageShow(!loginPageShow)}
                  className="underline cursor-pointer"
                >
                  Create an Account
                </span>
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Create Account */}
          <div className="absolute w-[800px] left-0 mx-auto right-0  grid grid-cols-2">
            <div className="  shadow-2xl h-[480px] space-y-10 py-20 px-10 rounded-l-lg bg-gradient-to-r text-center  text-white  from-[#EF3F48] to-[#EE0772]">
              <h1 className="text-4xl font-semibold ">Hello Friend!</h1>
              <p className="text-xl">
                New to this site start with us by create an account
              </p>
              <p>
                {" "}
                Already have an account?
                <span
                  onClick={() => setLoginPageShow(!loginPageShow)}
                  className="underline cursor-pointer"
                >
                  Sign IN
                </span>
              </p>
            </div>
            <div className=" shadow-2xl rounded-r-lg h-[480px] py-5 flex flex-col px-10 bg-white">
              <h1 className="text-4xl my-2 text-center font-semibold">
                Create Account
              </h1>
              <div>
                <p className="my-2 text-sm">Name</p>
                <input
                  type="text"
                  className="rounded-lg w-full bg-[#D9D9D9]/50 p-2"
                />
              </div>
              <div>
                <p className="my-2 text-sm">Email Address</p>
                <input
                  type="text"
                  className="rounded-lg w-full bg-[#D9D9D9]/50 p-2"
                />
              </div>
              <div>
                <p className="my-2 text-sm">Password</p>
                <input
                  type="text"
                  className="rounded-lg w-full bg-[#D9D9D9]/50 p-2"
                />
              </div>
              <div>
                <p className="my-2 text-sm">Confirm Password</p>
                <input
                  type="text"
                  className="rounded-lg w-full bg-[#D9D9D9]/50 p-2"
                />
              </div>
              <button className="bg-gradient-to-r  from-[#EF3F48] to-[#EE0772] text-white my-4 rounded-lg py-2">
                Create Account
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Auth;
