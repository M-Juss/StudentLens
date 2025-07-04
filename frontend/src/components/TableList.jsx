import React from 'react'
import { FaEye } from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";
import { FaTrashAlt } from "react-icons/fa";
import ModalForm from './ModalForm';

const TableList = () => {
    
    const headers = ["Student List", "Name", "Course", "Year Level", "Current Semester", "Status", "Actions"]

    const students = [
        {studID: "02000362266", name: "Mark Justin Sayon", course: "BSIT", year: "3", sem: "1", status: "Enrolled"},
        {studID: "02000240131", name: "Nathaniel Joy Alvarez", course: "BSBA", year: "2", sem: "1", status: "Enrolled"},
        {studID: "02000341021", name: "Joenel Sevellejo", course: "BSIT", year: "4", sem: "2", status: "Pending"},
    ]

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

            {students.map((student) => {
                return(
            <tr>
                <th>{student.studID}</th>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>{student.year}</td>
                <td>{student.sem}</td>
                <td>{student.status}</td>
                <td>
                    <div className='flex justify-between'>
                        <FaEye size={20}/>
                        <RiPencilFill onClick={()=> document.getElementById('edit_modal').showModal()}  size={20}/>
                        <FaTrashAlt size={20}/>
                            <ModalForm
                            id={"edit_modal"}
                            header={"Edit Student Details"}
                            actionLabel={"Save Changes"}
                             />
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