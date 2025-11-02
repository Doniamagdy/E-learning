import React, { useEffect, useState } from "react";
import axios from "axios";
import Input from "../../../components/ui/Input";
import Textarea from "../../../components/ui/Textarea";
import { useForm } from "react-hook-form";
import imageCourse from "../../../assets/1695820777-133237774265142be962c35!courses.jpg";

function AddCourse() {
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addCourse = async (
   { title,
    price,
    description,
    category,
    }
  ) => {
    try {
      const response = await axios.post(
        "https://e-commerce-api-kmhw.vercel.app/api/products",
        { 
          title: title,
          price: price,
          description: description,
          category: category,
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTVPxd_Lvz0h7X-r83t35ySydHW2inO6zFkg&s",
          color: [],
          
        },
        {
          headers: {
            Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhpbWEyQGdtYWlsLmNvbSIsImlkIjoiNjkwNzYwM2E4YmFiY2VhYTZkMjJmMDFjIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzYyMDkxMDgwLCJleHAiOjE3NjIxNzc0ODB9.QUyv0nlAjT309KkXcvik47ASwzwCZAyFmCdrWZPZZHg",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className="block text-white bg-stone-700 hover:bg-stone-800 focus:ring-4 focus:outline-none 
                   focus:ring-stone-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                   dark:bg-stone-600 dark:hover:bg-stone-700 dark:focus:ring-blue-800"
      >
        + Add Course
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center bg-black/40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative p-4 w-full max-w-md max-h-full"
          >
            <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
              {/* Header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200 dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Add new course
                </h3>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 
                             rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center 
                             dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1l6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              {/* Body */}
              <div className="p-4 md:p-5">
                <form
                  onSubmit={handleSubmit(addCourse)}
                  className="space-y-4"
                  action="#"
                >
                  <label htmlFor="title">Title</label>
                  <Input
                    id="title"
                    type={"text"}
                    placeholder={"Course Title"}
                    {...register("title", { required: "Title is required" })}
                  />

                  <label htmlFor="price">Price</label>
                  <Input
                    id="price"
                    type={"number"}
                    placeholder={"Course Price"}
                    {...register("price", { required: "Price is required" })}
                  />

                  <p>Description</p>
                  <Textarea
                    id={"description"}
                    placeholder={"Course description"}
                    {...register("description", {
                      required: "Description is required",
                    })}
                  />

                  <label htmlFor="category">Category</label>
                  <Input
                    id="category"
                    type={"text"}
                    placeholder={"Course Category"}
                    {...register("category", {
                      required: "Category is required",
                    })}
                  />
                  <button
                    type="submit"
                    className="w-full text-white bg-stone-700 hover:bg-stone-800 focus:ring-4 
             focus:outline-none focus:ring-stone-300 font-medium rounded-lg 
             text-sm px-5 py-2.5 text-center dark:bg-stone-600 dark:hover:bg-blue-700 
             dark:focus:ring-stone-800"
                  >
                    Add Course
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddCourse;
