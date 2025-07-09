import React from 'react'
import { FaEye } from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";
import { FaTrashAlt } from "react-icons/fa";
import ModalForm from './ModalForm';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'

const TableList = ({searchTerm, students, onOpenModal, onStudentDeleted}) => {
    
    const headers = ["Student List", "Name", "Course", "Year Level", "Current Semester", "Status", "Actions"]


    const filteredData = students.filter(student => (
        student.id.toString().includes(searchTerm.toLowerCase()) ||
        student.name.toLowerCase().includes(searchTerm.toLowerCase())  ||
        student.course.toLowerCase().includes(searchTerm.toLowerCase())  ||
        student.year.toLowerCase().includes(searchTerm.toLowerCase())  ||
        student.semester.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.status.toLowerCase().includes(searchTerm.toLowerCase())
    ))

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(`Are you sure you want to delete student: ${id}?`)
        
        if (confirmDelete){
            console.log(`Debugging`)
            try{
                await axios.delete(`http://localhost:3000/api/students/${id}`)
                if(onStudentDeleted) onStudentDeleted()
            } catch(err) {
                console.log(`Failed to delete student ${err.message}`)
            }
        }
        else return;
    }


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
                        <RiPencilFill onClick={() => onOpenModal(student)}  size={20}/>
                        <FaTrashAlt size={20} onClick={() => handleDelete(student.id)}/>
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