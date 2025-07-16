import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Read = () => {

  const navigate = useNavigate()

  const {id} = useParams()
  const [student, setStudent] = useState([])

  useEffect(() => {
    const fetchSpecificStudent = async() => {
      try{
        const response = await axios.get(`http://localhost:3000/api/students/${id}`)
        setStudent(response.data)
      } catch (err){
        console.err(`Invalid Internal Server Error`)
      }
    }
    fetchSpecificStudent()
  })

  return (
    
    <div className='flex flex-col justify-center items-center h-screen w-full'>
      <div className='absolute top-0 left-0 pl-5 pt-5'><MdKeyboardArrowLeft size={50} onClick={()=> navigate(`/`)}/></div>
      <h1 className='text-3xl font-medium py-5'>Student Lens</h1>
      <div className='flex flex-col h-fit w-100 bg-cyan-95 rounded-2xl shadow-2xl px-5 py-5'>
        <h1 className='text-2xl font-medium pb-5'>2000362266</h1>

        <div className='flex pb-3 '>
          <span className='w-35'>Student Name:</span>
          <span>{student.name}</span>
        </div>

        <div className='flex pb-3 '>
          <span className='w-35'>Student Course:</span>
          <span>{student.course}</span>
        </div>

        <div className='flex pb-3 '>
          <span className='w-35'>Student Year:</span>
          <span>{student.year}</span>
        </div>

        <div className='flex pb-3 '>
          <span className='w-35'>Student Semester:</span>
          <span>{student.semester}</span>
        </div>

        <div className='flex pb-3 '>
          <span className='w-35'>Student Status:</span>
          <span>{student.status}</span>
        </div>

      </div>
    </div>
  )
}

export default Read
