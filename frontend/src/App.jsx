
import React, { useEffect, useState } from "react"
import NavBar from "./components/NavBar"
import TableList from "./components/TableList"
import axios from "axios"
import ModalForm from "./components/ModalForm"

function App() {

  const [searchTerm, setSearchTerm] = useState('')
  const [tableData, setTableData] = useState([])
  const [modalConfig, setModalConfig] = useState([])

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
  
  return (
    <>
      <NavBar onSearch={setSearchTerm} onOpenModal={() => {
        setModalConfig({
          id: 'add_modal',
          header: 'Complete Student Details',
          actionLabel: 'Submit Student'
        })
        document.getElementById('add_modal').showModal();
      }}/>

      <TableList searchTerm={searchTerm} students={tableData} onOpenModal={() => {
        setModalConfig({
          id: 'edit_modal',
          header: 'Edit Student Details',
          actionLabel: 'Save Changes'
        })
        document.getElementById('edit_modal').showModal();
      }} />

      <ModalForm
        id={modalConfig.id}
        header={modalConfig.header}
        actionLabel={modalConfig.actionLabel}
        onStudentAdded={handleStudentAdded}
      />
    </>
  )
}

export default App
