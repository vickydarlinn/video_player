"use client";
import { CgTemplate } from "react-icons/cg";
import { MdEditNote } from "react-icons/md";
import { PiShapes } from "react-icons/pi";
import { LiaImageSolid } from "react-icons/lia";
import { LiaVideoSolid } from "react-icons/lia";
import { IoCloudUploadOutline } from "react-icons/io5";
import { RiTextSpacing } from "react-icons/ri";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { SiPixabay } from "react-icons/si";
import { useState } from "react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const icons = [
  { Icon: CgTemplate, label: "Templates" },
  { Icon: MdEditNote, label: "Customize" },
  { Icon: PiShapes, label: "Elements" },
  { Icon: LiaImageSolid, label: "Images" },
  { Icon: LiaVideoSolid, label: "Videos" },
  { Icon: IoCloudUploadOutline, label: "Uploads" },
  { Icon: RiTextSpacing, label: "Text" },
  { Icon: AiOutlineThunderbolt, label: "Graphics" },
  { Icon: SiPixabay, label: "Pixabay" },
];

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState("Templates");
  const [isShowingPanel, setIsShowingPanel] = useState(false);

  const handleActiveMenu = (menu) => {
    setActiveMenu(menu);
    setIsShowingPanel(true); // Show the panel when a menu is clicked
  };

  const handleHidePanel = () => {
    setIsShowingPanel(false); // Hide the panel when the back arrow is clicked
  };

  return (
    <div className="flex fixed left-0 top-14">
      <div className="flex flex-col bg-gray-100 h-[calc(100vh-56px)] transition-all duration-300 ease-in-out z-40">
        {icons.map(({ Icon, label }, index) => (
          <div
            key={index}
            className={`cursor-pointer h-[calc(100%/9)] p-2 flex items-center justify-center flex-col ${
              activeMenu === label && "bg-red-100"
            } `}
            onClick={() => handleActiveMenu(label)}
          >
            <span>
              <Icon />
            </span>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <div
        className={` shadow-2xl  z-100 bg-white  border-r border-gray-100 w-80 transition-all duration-300 ease-in-out ${
          isShowingPanel ? "ml-0" : "ml-[-100%]"
        }`}
      >
        <div className="flex justify-between items-center p-3 font-bold ">
          <span>{activeMenu}</span>
          <span className="w-6 h-6 cursor-pointer" onClick={handleHidePanel}>
            <MdKeyboardDoubleArrowLeft />{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
