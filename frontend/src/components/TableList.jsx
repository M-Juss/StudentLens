import React from 'react'

const TableList = () => {
    
    const students = [
        {studID: "02000362266", name: "Mark Justin Sayon", course: "BSIT", year: "3", sem: "1", status: "Enrolled"},
        {studID: "02000362266", name: "Mark Justin Sayon", course: "BSIT", year: "3", sem: "1", status: "Enrolled"},
        {studID: "02000362266", name: "Mark Justin Sayon", course: "BSIT", year: "3", sem: "1", status: "Enrolled"},
    ]

  return (
    <div className="overflow-x-auto mt-10">
        <table className="table">
            {/* head */}
            <thead>
            <tr>
                <th>Student List</th>
                <th>Name</th>
                <th>Course</th>
                <th>Year Level</th>
                <th>Current Semester</th>
                <th>Statusr</th>
            </tr>
            </thead>
            <tbody className='hover:bg-base-300'>

            {students.map((student) => {
                return(
            <tr>
                <th>{student.studID}</th>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>{student.year}</td>
                <td>{student.sem}</td>
                <td>{student.status}</td>
            </tr>
                )
            })}
            </tbody>
        </table>
    </div> 
  )
}

export default TableList