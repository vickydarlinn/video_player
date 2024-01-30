import React from "react";
import { LuMonitorPlay } from "react-icons/lu";
import { IoCloudDoneOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-20 w-full flex bg-black text-white justify-between p-4 items-center">
      <div>Logo</div>
      <div className=" flex items-center gap-2">
        <span> Untitled Design</span>
        <span>
          <IoCloudDoneOutline />
        </span>
      </div>
      <div className=" flex items-center gap-5">
        <span className="cursor-pointer">Import</span>
        <span className="cursor-pointer">Export</span>
        <span className=" cursor-pointer">
          <LuMonitorPlay />
        </span>
      </div>
    </header>
  );
};

export default Header;
