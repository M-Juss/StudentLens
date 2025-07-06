import React, { useState, useEffect } from 'react'
import Input from './Input';
import Select from './Select';
import axios from 'axios';
const ModalForm = ({id, header, actionLabel }) => {

    const courses = ["", "BSIT", "BSTM", "BSBA-FM", "BSAIS"];

    const years = ["", "1st Year", "2nd Year", "3rd Year", "4th Year"];

    const semesters = ["", "1st Semester", "2nd Semester"];

    const statuses = ["", "Enrolled", "Pending", "Approved", "Dropped", "Graduated"];

    const [studentId, setStudentId] = useState('')
    const [studentName, setStudentName] = useState('')
    const [studentCourse, setStudentCourse] = useState('')
    const [studentYear, setStudentYear] = useState('')
    const [studentSemester, setStudentSemester] = useState('')
    const [studentStatus, setStudentStatus] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log("Submitting...");

        const newStudent = {
            id: Number(studentId),
            name: studentName,
            course: studentCourse,
            year: studentYear,
            semester: studentSemester,
            status: studentStatus
        }
        
        console.log(newStudent)

        try{
            const response = await axios.post('http://localhost:3000/api/students', newStudent)
            console.log(`Client added: ${response.data}`)

        } catch(err) {
            console.log(`Error message: ${err}`)
        }
    }
    

  return (
    <dialog id={id} className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg pb-1">{header}</h3>
        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Input
              label={"Student ID:"}
              value={studentId}
              type={"text"}
              placeholder={"Type the given Student ID..."}
              required={true}
              onChange={(e) => setStudentId(e.target.value)}
              disabled={header !== 'Complete Student Details'}
            />
            <Input
              label={"Student Name:"}
              value={studentName}
              type={"text"}
              placeholder={"Type student's fullname"}
              required={true}
              onChange={(e) => setStudentName(e.target.value)}
            />
            <Select
              label={"Course:"}
              value={studentCourse}
              arrays={courses}
              required={true}
              onChange={(e) => setStudentCourse(e.target.value)}
            />
            <Select
              label={"Year"}
              value={studentYear}
              arrays={years}
              required={true}
              onChange={(e) => setStudentYear(e.target.value)}
            />
            <Select
              label={"Semester:"}
              value={studentSemester}
              arrays={semesters}
              required={true}
              onChange={(e) => setStudentSemester(e.target.value)}
            />
            <Select
              label={"Status:"}
              value={studentStatus}
              arrays={statuses}
              required={true}
              onChange={(e) => setStudentStatus(e.target.value)}
            />
          </div>

          <div className='modal-action mt-4'>
            <button type="submit" className="btn btn-primary mr-1">{actionLabel}</button>
            <button type="button" className="btn btn-neutral ml-1" onClick={() => document.getElementById(id).close()}>Cancel</button>
          </div>
        </form>
      </div>
    </dialog>
  )
}

export default ModalForm
