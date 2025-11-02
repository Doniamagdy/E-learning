import React from 'react'
import { Link } from "react-router-dom";

import { MdOutlineDashboard } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { SiSimpleanalytics } from "react-icons/si";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

function SideNavbar() {
  return (
    <div className="w-64 shadow-xl/30 h-dvh fixed left-0">
        <h2 className="ps-[50px] mt-[50px] text-2xl">LearnHub</h2>
        <ul className="ps-[50px]">
          <li className="flex items-center gap-2 my-4 text-2xl">
            {" "}
            <MdOutlineDashboard /> <Link to={"/dashboard"}> Dashboard </Link>
          </li>
          <li className="flex items-center gap-2 my-4 text-2xl">
            {" "}
            <FaBookOpen /> <Link to={""}> Courses </Link>
          </li>
          <li className="flex items-center gap-2 my-4 text-2xl">
            {" "}
            <FaGraduationCap /> <Link to={""}> Students </Link>
          </li>
          <li className="flex items-center gap-2 my-4 text-2xl">
            <FaChalkboardTeacher /> <Link to={""}> Instructors </Link>
          </li>
          <li className="flex items-center gap-2 my-4 text-2xl">
            {" "}
            <SiSimpleanalytics /> <Link to={""}> Analytics </Link>
          </li>
          <li className="flex items-center gap-2 my-4 text-2xl">
            <IoSettingsOutline /> <Link to={""}> Settings </Link>
          </li>
        </ul>
      </div>
  )
}

export default SideNavbar
