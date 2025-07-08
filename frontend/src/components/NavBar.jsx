import React from 'react'

import ModalForm from './ModalForm';

const NavBar = ({onSearch, onOpenModal}) => {

  const handleSearchChange = (e) => {
    onSearch(e.target.value)
  }

  return (
    <div className="navbar bg-base-100 shadow-sm">

        <div className="navbar-start">
            <a className="btn btn-ghost text-xl">StudentLens</a>
        </div>

        <div className="navbar-center ">
            <input type="text" placeholder="Search" onChange={handleSearchChange} className="input input-bordered w-auto md:w-100" />
        </div>

        <div className="navbar-end">
        <button className="btn btn-primary" onClick={onOpenModal}>Add Student</button>

        </div>
    </div>
  )
}

export default NavBar