import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function useDelete() {

    
  const deleteFn = async (deletedId) => {

    try {
      const response = await axios.delete(
        `https://e-commerce-api-kmhw.vercel.app/api/products/${deletedId}`,
        {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhpbWEyQGdtYWlsLmNvbSIsImlkIjoiNjkwNzYwM2E4YmFiY2VhYTZkMjJmMDFjIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzYyMTQ5NDM0LCJleHAiOjE3NjIyMzU4MzR9.uHfESOtAmSEAqYndmznt4EupzgA7qQkj2IKnfjEMLnU",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
    } catch (error) 
    {console.log(error);
    }
  };


  return {deleteFn}
}

export default useDelete;
