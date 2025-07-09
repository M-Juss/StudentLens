import React, { useEffect, useState } from 'react'
import Input from './Input';
import Select from './Select';
import axios from 'axios';

const ModalForm = ({ id, header, actionLabel, onStudentAdded, selectedStudent, onUpdateStudent }) => {
  const courses = ["BSIT", "BSTM", "BSBA-FM", "BSAIS"];
  const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"];
  const semesters = ["1st Semester", "2nd Semester"];
  const statuses = ["Enrolled", "Pending", "Approved", "Dropped", "Graduated"];

  const [studentId, setStudentId] = useState('')
  const [studentName, setStudentName] = useState('')
  const [studentCourse, setStudentCourse] = useState('')
  const [studentYear, setStudentYear] = useState('')
  const [studentSemester, setStudentSemester] = useState('')
  const [studentStatus, setStudentStatus] = useState('')


  useEffect(()=> {
    if(id === 'add_modal'){
      setStudentId('')
      setStudentName('')
      setStudentCourse('')
      setStudentYear('')
      setStudentSemester('')
      setStudentStatus('')
    }
  }, [id])

  useEffect(() => {
    if(selectedStudent && id === 'edit_modal'){
      setStudentId(selectedStudent.id)
      setStudentName(selectedStudent.name)
      setStudentCourse(selectedStudent.course)
      setStudentYear(selectedStudent.year)
      setStudentSemester(selectedStudent.semester)
      setStudentStatus(selectedStudent.status)
    }
  }, [selectedStudent, id])

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    if(studentId == ' ' || studentName === ' ' || studentCourse === ' ' || studentYear === ' ' || studentSemester === ' ', studentStatus === ' ') {
      window.alert('Kindly fill up all the required fields')
    } else{
      
      const newStudent = {
      id: Number(studentId),
      name: studentName,
      course: studentCourse,
      year: studentYear,
      semester: studentSemester,
      status: studentStatus
    }

    try {
      if(id === 'edit_modal'){
        const response = await axios.put(`http://localhost:3000/api/students/${studentId}`, newStudent)
        console.log(`Student upated successfully ${response.data}`)
        if (onUpdateStudent) onUpdateStudent();
        document.getElementById(id).close();
        
      } else {
        const response = await axios.post('http://localhost:3000/api/students', newStudent);
        if (onStudentAdded) onStudentAdded(response.data);
        document.getElementById(id).close();
        setStudentId('')
        setStudentName('')
        setStudentCourse('')
        setStudentYear('')
        setStudentSemester('')
        setStudentStatus('')
      }

    } catch (err) {
      console.log(`Error message: ${err}`)
    }
    }


  }

  return (
    <dialog id={id} className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg pb-1">{header}</h3>
        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          
            <Input
              label="Student ID:"
              value={studentId}
              type="text"
              placeholder="Type the given Student ID..."
              required
              onChange={(e) => setStudentId(e.target.value)}
              disable={header !== 'Complete Student Details'}
            />

            <Input
              label="Student Name:"
              value={studentName}
              type="text"
              placeholder="Type student's fullname"
              required
              onChange={(e) => setStudentName(e.target.value)}
            />
            <Select
              label="Course:"
              value={studentCourse}
              arrays={courses}
              required
              onChange={(e) => setStudentCourse(e.target.value)}
            />
            <Select
              label="Year"
              value={studentYear}
              arrays={years}
              required
              onChange={(e) => setStudentYear(e.target.value)}
            />
            <Select
              label="Semester:"
              value={studentSemester}
              arrays={semesters}
              required
              onChange={(e) => setStudentSemester(e.target.value)}
            />
            <Select
              label="Status:"
              value={studentStatus}
              arrays={statuses}
              required
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
