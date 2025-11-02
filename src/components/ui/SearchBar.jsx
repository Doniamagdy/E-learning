import React from "react";
import { IoSearchOutline } from "react-icons/io5";


function SearchBar({type, placeholder , style}) {
  return (
    <div className="mt-10 relative w-full max-w-xs"> 
    <input
      type={type}
      placeholder={placeholder}
      className={style}
    />
    <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
    </div>
  );
}

export default SearchBar;
//