
import React, { useState } from "react"
import NavBar from "./components/NavBar"
import TableList from "./components/TableList"

function App() {

  const [searchTerm, setSearchTerm] = useState('')
  
  return (
    <>
      <NavBar onSearch={setSearchTerm}/>
      <TableList searchTerm={searchTerm}/>
    </>
  )
}

export default App
