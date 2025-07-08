import React from 'react'
import { FaEye } from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";
import { FaTrashAlt } from "react-icons/fa";
import ModalForm from './ModalForm';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'

const TableList = ({searchTerm, students, onOpenModal}) => {
    
    const headers = ["Student List", "Name", "Course", "Year Level", "Current Semester", "Status", "Actions"]

    // useEffect(() => {
    //     const fetchData = async() => {
    //         try{
    //             const response = await axios.get('http://localhost:3000/api/students')
    //             setTableData(response.data)
    //         } catch (err) {
    //             console.log(`Error occured: ${err.message}`)
    //         }
    //     }

    //     fetchData()

    // }, [])

    const filteredData = students.filter(student => (
        student.id.toString().includes(searchTerm.toLowerCase()) ||
        student.name.toLowerCase().includes(searchTerm.toLowerCase())  ||
        student.course.toLowerCase().includes(searchTerm.toLowerCase())  ||
        student.year.toLowerCase().includes(searchTerm.toLowerCase())  ||
        student.semester.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.status.toLowerCase().includes(searchTerm.toLowerCase())
    ))

    // const students = [
    //     {studID: "02000362266", name: "Mark Justin Sayon", course: "BSIT", year: "3", sem: "1", status: "Enrolled"},
    //     {studID: "02000240131", name: "Nathaniel Joy Alvarez", course: "BSBA", year: "2", sem: "1", status: "Enrolled"},
    //     {studID: "02000341021", name: "Joenel Sevellejo", course: "BSIT", year: "4", sem: "2", status: "Pending"},
    // ]

  return (
    <div className="overflow-x-auto mt-10 mx-10">
        <table className="table">
            {/* head */}
            <thead>
            <tr>
                {headers.map(header => (
                    <th key={header}>{header}</th>
                ))}
            </tr>
            </thead>
            <tbody className='hover'>

            {filteredData.map((student) => {
                return(
            <tr key={student.id}>
                <th>{student.id}</th>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>{student.year}</td>
                <td>{student.semester}</td>
                <td>{student.status}</td>
                <td>
                    <div className='flex justify-between'>
                        <FaEye size={20}/>
                        <RiPencilFill onClick={onOpenModal}  size={20}/>
                        <FaTrashAlt size={20}/>
                    </div>

                </td>
            </tr>
                )
            })}
            </tbody>
        </table>
    </div> 
  )
}

export default TableList