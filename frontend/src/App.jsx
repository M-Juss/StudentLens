
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
            />
          </>
        } />

        {/* Read Student Page Route */}
        <Route path="/student/:id" element={<Read />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
