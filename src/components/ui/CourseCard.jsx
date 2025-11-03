import React from "react";
import { FaUserGraduate, FaBookOpen } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";
import useDelete from "../../hooks/useDelete";




function CourseCard({
  id,
  cardImage,
  cardButton,
  cardTitle,
  cardDescription,
  price,
  category,
  studentNumber,
  lessons,
  percentageOfCompletion,
}) { 

const{deleteFn}=useDelete()



  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden border border-gray-100 max-w-sm my-5">
      <img src={cardImage} alt={cardTitle} className="w-full h-48 object-cover" />

      <button className="bg-stone-950 text-white text-xs font-semibold px-3 py-1 rounded mx-3 my-6">{cardButton}</button>
      <h2 className="text-lg font-semibold text-gray-900  mx-3 mb-3">{cardTitle}</h2>
      <p className="text-gray-600 text-sm  line-clamp-2 mx-3 mb-3">{cardDescription}</p>
      <p className="text-gray-600 text-sm  line-clamp-2 mx-3 mb-3">{price}</p>
      <p className="text-gray-600 text-sm  line-clamp-2 mx-3 mb-3">{category}</p>

      <div className="flex justify-between items-center text-gray-600 text-sm mx-3 mb-3">
          <span className="flex items-center gap-1 ms-3 ">
            <FaUserGraduate /> {studentNumber} Students
          </span>
          <span className="flex items-center gap-1 me-3">
            <FaBookOpen /> {lessons} Lessons
          </span>
        </div>
        
      <p className="ms-3 my-4">{percentageOfCompletion}</p>
      <div className="flex justify-end">
     <button type="button" onClick={() => deleteFn(id)}><RiDeleteBinFill className="text-red-500 me-6 mb-4"    /> </button> 
      <GrUpdate className="text-amber-500 me-6 mb-4" />

      </div>
    </div>
  );
}

export default CourseCard;



