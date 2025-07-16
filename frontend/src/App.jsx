
import React, { useEffect, useState } from "react"
import NavBar from "./components/NavBar"
import TableList from "./components/TableList"
import axios from "axios"
import ModalForm from "./components/ModalForm"
import Read from "./Pages/Read"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const [searchTerm, setSearchTerm] = useState('')
  const [tableData, setTableData] = useState([])
  const [modalConfig, setModalConfig] = useState({ id: 'edit_modal', header: '', actionLabel: ''})
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [succesUpdateMessage, setSuccessUpdateMessage] = useState('')
  const [successAddMessage, setSuccessAddMessage] = useState('')
  const [errorAddMessage, setErrorAddMessage] = useState('')

  useEffect(() => {
    const fetchData = async() => {
      try{
        const response = await axios.get('http://localhost:3000/api/students')
        setTableData(response.data)
      } catch(err) {
        console.log(`Error occured: ${err.message}`)
      }
    }

    fetchData()

  }, [])

  const handleStudentAdded = (newStudent) => {
    setTableData(prev => [...prev, newStudent])
  }
  
  const triggerRefresh = () => {
        const fetchData = async() => {
      try{
        const response = await axios.get('http://localhost:3000/api/students')
        setTableData(response.data)
      } catch(err) {
        console.log(`Error occured: ${err.message}`)
      }
    }

    fetchData()
  }

  const openModal= () => {
    if(modalConfig.id === 'edit_modal') return document.getElementById('edit_modal').showModal()

    return document.getElementById('add_modal').showModal()
  }

  

  return (
    <>
    <div className="h-screen w-full">
      <Router>
      <Routes>
        {/* Main Page Route */}
        <Route path="/" element={
          <>
            <NavBar
              onSearch={setSearchTerm}
              onOpenModal={() => {
                setModalConfig({
                  id: 'add_modal',
                  header: 'Complete Student Details',
                  actionLabel: 'Submit Student'
                })
                openModal()
              }}
            />

            <TableList
            
              searchTerm={searchTerm}
              students={tableData}
              onStudentDeleted={triggerRefresh}
              onOpenModal={(student) => {
                setSelectedStudent(student)
                setModalConfig({
                  id: 'edit_modal',
                  header: 'Edit Student Details',
                  actionLabel: 'Save Changes'
                })
                openModal()
              }}
            />

            <ModalForm
              id={modalConfig.id}
              header={modalConfig.header}
              actionLabel={modalConfig.actionLabel}
              onStudentAdded={handleStudentAdded}
              selectedStudent={selectedStudent}
              onUpdateStudent={triggerRefresh}
              setSuccessUpdateMessage={setSuccessUpdateMessage}
              setErrorAddMessage = {setErrorAddMessage}
              setSuccessAddMessage = {setSuccessAddMessage}
            />
          </>
        } />

        {/* Read Student Page Route */}
        <Route path="/student/:id" element={<Read />} />
      </Routes>
    </Router>

    {succesUpdateMessage && (
    <div role="alert" className="alert alert-success absolute bottom-0 right-0 mb-5 mr-5">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>{succesUpdateMessage}</span>
    </div>
    )}

    {errorAddMessage && (
    <div role="alert" className="alert alert-error absolute bottom-0 right-0 mb-5 mr-5 ">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>{errorAddMessage}</span>
    </div>
    )}

    {successAddMessage && (
    <div role="alert" className="alert alert-success absolute bottom-0 right-0 mb-5 mr-5">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>{successAddMessage}</span>
    </div>
    )} 
    </div>

    </>
  )
}

export default App
