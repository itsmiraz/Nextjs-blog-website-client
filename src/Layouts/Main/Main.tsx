import Footer from "@/Components/Shared/Footer/Footer";
import Header from "@/Components/Shared/Header/Header";
import React, { FC } from "react";
import { Toaster } from "react-hot-toast";

interface Props {
  children: React.ReactNode;
}
const Main: FC<Props> = ({ children }) => {
  return (
    <div className="max-w-[1920px] mx-auto">
      <Header />
      {children}
      <Footer />
      <Toaster />
    </div>
  );
};

export default Main;
