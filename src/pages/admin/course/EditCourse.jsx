import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Input from '../../../components/ui/Input'
import { useForm } from 'react-hook-form'



function EditCourse() {
  const [singleCourse, setSingleCourse] = useState({})

  const {id}= useParams()

  const {register , handleSubmit , formState:{errors} } = useForm()

  const getSingleCourse = async ()=>{

    try{ const response = await axios.get(`https://e-commerce-api-kmhw.vercel.app/api/products/${id}`,
      {
        headers:{
          Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhpbWEyQGdtYWlsLmNvbSIsImlkIjoiNjkwNzYwM2E4YmFiY2VhYTZkMjJmMDFjIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzYyMzI0NTczLCJleHAiOjE3NjI0MTA5NzN9.3MH12k5tcFF5-S-dzmIy114UBfrKBFGr3C0Vuc2nFh0",
          "Content-Type":"application/json"
        }
      }
    )
    console.log(response?.data);
    setSingleCourse(response?.data)}catch(error){console.log(error);
    }

    
  }


 const updateCourse = async (data)=>{

try{

const response = await axios.patch(`https://e-commerce-api-kmhw.vercel.app/api/products/${id}`,
     
 {
        title: data.title || singleCourse.title,
        price: data.price || singleCourse.price,
        description: data.description || singleCourse.description,
        category: data.category ||  singleCourse.category,
      },

{headers:{
          Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhpbWEyQGdtYWlsLmNvbSIsImlkIjoiNjkwNzYwM2E4YmFiY2VhYTZkMjJmMDFjIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzYyMzI0NTczLCJleHAiOjE3NjI0MTA5NzN9.3MH12k5tcFF5-S-dzmIy114UBfrKBFGr3C0Vuc2nFh0",
          "Content-Type":"application/json"
        }}

        
      )

}catch(error){console.log(error);
}
 }





  useEffect(()=>{getSingleCourse()} ,[])


  return (
  <div className="min-h-screen bg-gray-50 flex justify-center items-center py-10 px-4">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          🛠️ Edit Course Details
        </h1>

        <form className="space-y-4" onSubmit={handleSubmit(updateCourse)}>
          <div>

           <label htmlFor={singleCourse.title}>Course title</label>
          <Input id={singleCourse.title}  type={"text"} placeholder={singleCourse.title} {...register("title")}/>
           
          </div>

          <div>
            <label htmlFor={singleCourse.price}>Course price</label>
          <Input id={singleCourse.price}  type={"text"} placeholder={singleCourse.price} {...register("price")}/>
          </div>

          <div>
            <label htmlFor={singleCourse.description}>Course description</label>
          <Input id={singleCourse.description}  type={"text"} placeholder={singleCourse.description} {...register("description")}/>
          </div>

          <div>
              <label htmlFor={singleCourse.category}>Course category</label>
          <Input id={singleCourse.category}  type={"text"} placeholder={singleCourse.category} {...register("category")} />
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg font-medium transition duration-200"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>


  )
}

export default EditCourse
