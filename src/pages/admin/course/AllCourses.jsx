import React, { useEffect, useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import SearchBar from "../../../components/ui/SearchBar";
import Button from "../../../components/ui/Button";
import SideNavbar from "../../../components/ui/SideNavbar";
import CourseCard from "../../../components/ui/CourseCard";
import frontendImage from "../../../assets/Frontend-Development-Courses.webp";
import axios from "axios";

function AllCourses() {
  const [courses, setCourses] = useState();

  const getAllCourses = async () => {
    try {
      const response = await axios.get(
        "https://e-commerce-api-kmhw.vercel.app/api/products",
        {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5hZGFtb2hzZW5AZ21haWwuY29tIiwiaWQiOiI2OTA1ZTk4ZmM3YmFhNjYzMmYwOWQxNTgiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NjE5OTUxNjUsImV4cCI6MTc2MjA4MTU2NX0.RbL9sCwUlVItHsrS4BDr7r9PL_81cy57fok68-R1IU8",
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response?.data?.data);
      setCourses(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCourses();
  }, []);

  return (
    <div className="flex justify-around ">
      {/* Left side  Navbar */}
      <SideNavbar />

      {/* Right side Content */}
      <div className=" flex-1 ml-64 p-6">
        <div className="flex justify-between">
          {/* Upper content */}
          {/* Left side */}
          <div>
            <SearchBar
              type={"text"}
              placeholder={"...Search"}
              style={
                "w-xl pl-10 pr-4 py-2  bg-stone-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-stone-400 transition duration-200"
              }
            />
          </div>

          {/* Right side */}
          <div className="mt-[50px] me-10 text-2xl">
            <span className="flex items-center">
              <IoIosNotificationsOutline className="me-4" />
              <p>Donia Magdy</p>
            </span>
          </div>
        </div>

        {/* Lower Content */}
        {/* Part 1 */}
        <div className="flex justify-between items-center">
          <div>
            {" "}
            <h2 className="my-[35px] text-3xl">Courses</h2>
            <p>Manage and organize your course catalog</p>{" "}
          </div>

          <Button
            type="submit"
            title="+ Create Course "
            style="bg-stone-950 text-white p-2 rounded me-10 mb-6"
          />
        </div>

        {/* Part 2 */}

        <div className="flex justify-between items-center">
          <SearchBar
            type={"text"}
            placeholder={"Search courses..."}
            style={
              "w-7xl pl-10 pr-4 py-2  bg-stone-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-stone-400 transition duration-200"
            }
          />
        </div>

        {/* Part 3 */}
        <div className="flex justify-around flex-wrap"> 
        {courses?.map((course) => (
          <CourseCard 
            key={course.id}
            cardImage={frontendImage}
            cardButton={"active"}
            cardTitle={course.title}
            cardDescription={course.description}
            price={course.price}
            category={course.category}
            studentNumber={100}
            lessons={8}
          />
        ))}
        </div>

      </div>
    </div>
  );
}

export default AllCourses;
