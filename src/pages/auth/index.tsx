import React, { ChangeEvent, FC, useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AuthContext } from "@/Context/userContext";
import toast from "react-hot-toast";
interface Props {}

const Auth: FC<Props> = () => {
  const { user, signIn, signUp, setuserProfile } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState<string | null>("");
  const [loginPageShow, setLoginPageShow] = useState<boolean>(true);
  const [showPass, setShowPass] = useState<boolean>(false);
  const handleSignIn = (event: any) => {
    event.preventDefault();

    const form = event.target;
    const email: string = form.email.value;
    const password: string = form.password.value;

    if (signIn) {
      signIn(email, password)
        .then(result => {
          console.log(result);
          toast.success("User Logined");
        })
        .catch(err => {
          console.log(err);
          setErrorMessage(err);
          toast.error(err);
        });
    }
  };

  const handleSignUp = (event: any) => {
    event.preventDefault();
    const form = event.target;
    const name: string = form.name.value;
    const email: string = form.email.value;
    const password: string = form.password.value;
    const confrimPass: String = form.confirmPass.value;

    // console.log(name, email, password, confrimPass);


    if (password.length < 6) {
      setErrorMessage("Password Must Be 6 characters");
      return;
    }
    if (password !== confrimPass) {
      setErrorMessage("Password Did not matched ");
      return;
    }

    if (signUp) {
      signUp(email, password)
        .then(result => {
          form.reset();
          handleUserProfile(name);
          setErrorMessage("");
          toast.success("Register SuccessFully");
         console.log(result);
        })
        .catch(error => {
          console.log("error", error);
         
          setErrorMessage(error.message);
          return
        });
    }
  };

  const handleUserProfile = (name: string) => {
    const profile = {
      displayName: name,
    };
    console.log(profile);
    if (setuserProfile) {
      setuserProfile(profile)
        .then(result => {
          console.log(result.user);
        })
        .catch(error => console.log(error));
    }
  };

  return (
    <div className="h-[700px] relative w-full flex justify-center items-center">
      {/* Sign In */}

      <div className="absolute shadow-2xl overflow-hidden w-[800px] left-0 mx-auto right-0  grid grid-cols-2">
        <motion.form
          onSubmit={handleSignIn}
          animate={{
            opacity: loginPageShow ? 1 : 0,
            x: loginPageShow ? 0 : 800,
          }}
          transition={{ duration: 0.4 }}
          className=" shadow-2xl z-50 rounded-l-lg h-[520px] py-10 flex flex-col px-10 bg-white"
        >
          <h1 className="text-4xl my-2 text-center font-semibold">Sign In</h1>
          <div>
            <p className="my-2">Email Address</p>
            <input
              type="text"
              name="email"
              className="rounded-lg w-full bg-[#D9D9D9]/50 p-3"
            />
          </div>
          <div>
            <p className="my-2">Password</p>
            <input
              type="password"
              name="password"
              className="rounded-lg w-full bg-[#D9D9D9]/50 p-3"
            />
          </div>
          <button className="bg-gradient-to-r  from-[#EF3F48] to-[#EE0772] text-white my-4 rounded-lg py-2">
            SIGN IN
          </button>
          <p className="text-center font-semibold">OR</p>
          <p className="flex items-center gap-3 justify-center my-2 border rounded-lg py-2 cursor-pointer">
            {" "}
            <FcGoogle /> Continue with Google
          </p>
        </motion.form>

        <motion.div
          animate={{
            opacity: loginPageShow ? 1 : 0,
            x: loginPageShow ? 0 : -800,
          }}
          transition={{ duration: 0.4 }}
          className=" z-50 shadow-2xl h-[520px] space-y-10 py-10 px-10 rounded-r-lg bg-gradient-to-r text-center  text-white  from-[#EF3F48] to-[#EE0772]"
        >
          <h1 className="text-4xl my-2 font-semibold ">Welcome Back !</h1>
          <p className="text-lg">
            Welcome to Ultra News! By signing in, youll have access to all of
            our latest posts, be able to create your own content, and engage
            with our community through comments and discussion. Thank you for
            being a part of our community!
          </p>
          <p className="">
            Dont have an account ?
            <span
              onClick={() => setLoginPageShow(!loginPageShow)}
              className="underline cursor-pointer"
            >
              {""} Create an Account
            </span>
          </p>
        </motion.div>
      </div>

      {/* Create Account */}
      <div className="absolute shadow-2xl overflow-hidden w-[800px] left-0 mx-auto right-0  grid grid-cols-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: loginPageShow ? 0 : 1,
            x: loginPageShow ? 800 : 0,
          }}
          transition={{ duration: 0.4 }}
          className="  shadow-2xl h-[520px] space-y-10 py-20 px-10 rounded-l-lg bg-gradient-to-r text-center  text-white  from-[#EF3F48] to-[#EE0772]"
        >
          <h1 className="text-4xl font-semibold ">Hello Friend!</h1>
          <p className="">
            Join Ultra News today and become a part of our community! By signing
            up, youll have access to all of our latest posts, be able to create
            your own content, and engage with other members of our community
            through comments and discussion.
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
        </motion.div>

        {/* Form */}
        
        <motion.form
          onSubmit={handleSignUp}
          initial={{ opacity: 0 }}
          animate={{
            opacity: loginPageShow ? 0 : 1,
            x: loginPageShow ? -800 : 0,
          }}
          transition={{ duration: 0.4 }}
          className=" shadow-2xl rounded-r-lg h-[520px] py-5 flex flex-col px-10 bg-white"
        >
          <h1 className="text-4xl my-2 text-center font-semibold">
            Create Account
          </h1>
          <div>
            <p className="my-2 select-none text-sm">Name</p>
            <input
              type="text"
              required
              name="name"
              className="rounded-lg w-full bg-[#D9D9D9]/50 p-3"
            />
          </div>
          <div>
            <p className="my-2 select-none text-sm">Email Address</p>
            <input
              name="email"
              required
              type="email"
              className="rounded-lg w-full bg-[#D9D9D9]/50 p-3"
            />
          </div>
          <div>
            <div className="my-2 flex select-none  justify-between items-center"><p className="my-2 text-sm">Password</p>
            <AiOutlineEyeInvisible onClick={()=>setShowPass(!showPass) } className="cursor-pointer"/></div>
            <input
              type={showPass ? 'text':'password'}
              required
              name="password"
              className="rounded-lg w-full bg-[#D9D9D9]/50 p-3"
            />
          </div>
          <div>
            <p className="my-2 select-none text-sm">Confirm Password</p>
            <input
              type={showPass ? 'text':'password'}
              required
              name="confirmPass"
              className="rounded-lg w-full bg-[#D9D9D9]/50 p-3"
            />
          </div>
          <p className="text-red-500 text-sm">{errorMessage}</p>
          <button className="bg-gradient-to-r  from-[#EF3F48] to-[#EE0772] text-white my-4 rounded-lg py-2">
            Create Account
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Auth;