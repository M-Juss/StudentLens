import React from 'react'

import ModalForm from './ModalForm';

const NavBar = () => {

  return (
    <div className="navbar bg-base-100 shadow-sm">

        <div className="navbar-start">
            <a className="btn btn-ghost text-xl">StudentLens</a>
        </div>

        <div className="navbar-center ">
            <input type="text" placeholder="Search" className="input input-bordered w-auto md:w-100" />
        </div>

        <div className="navbar-end">
        <button className="btn btn-primary" onClick={()=>document.getElementById('add_modal').showModal()}>Add Student</button>
        <ModalForm
            id={"add_modal"}
            header={"Complete Student Details"}
            actionLabel={"Submit Student"}
        />

        </div>
    </div>
  )
}

export default NavBar