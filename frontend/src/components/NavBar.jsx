import React from 'react'

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">

        <div className="navbar-start">
            <a className="btn btn-ghost text-xl">StudentLens</a>
        </div>

        <div className="navbar-center ">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>

        <div className="navbar-end">
            <button className="btn btn-primary" onClick={()=>document.getElementById('my_modal_5').showModal()}>Add Student</button>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Complete Student Details</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Student Id:</legend>
                            <input type="text" className="input" placeholder="Type here" />
                            <p className="label">Required*</p>
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Student Name:</legend>
                            <input type="text" className="input" placeholder="Type here" />
                            <p className="label">Required*</p>
                        </fieldset>

                    <div className="modal-action">

                    </div>
                    
                </div>
                </dialog>
        </div>
    </div>
  )
}

export default NavBar