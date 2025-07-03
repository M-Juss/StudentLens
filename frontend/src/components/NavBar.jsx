import React from 'react'
import Input from './Input';
import Select from './Select';

const NavBar = () => {

    const courses = ["BSIT", "BSTM", "BSBA-FM", "BSAIS"];

    const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"];

    const semesters = ["1st Semester", "2nd Semester"];

    const statuses = ["Enrolled", "Pending", "Approved", "Dropped", "Graduated"];

  return (
    <div className="navbar bg-base-100 shadow-sm">

        <div className="navbar-start">
            <a className="btn btn-ghost text-xl">StudentLens</a>
        </div>

        <div className="navbar-center ">
            <input type="text" placeholder="Search" className="input input-bordered w-auto md:w-100" />
        </div>

        <div className="navbar-end">
            <button className="btn btn-primary" onClick={()=>document.getElementById('my_modal_5').showModal()}>Add Student</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
                <div className="modal-box">
                    <h3 className="font-bold text-lg pb-1">Complete Student Details</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

                        <Input
                            label={"Student ID:"}
                            name={"id"}
                            type={"text"}
                            placeholder={"Type the given Student ID..."}
                            required={true}
                        />
                        

                        <Input
                            label={"Student Name:"}
                            name={"name"}
                            type={"text"}
                            placeholder={"Type student's fullname"}
                            required={true}
                        />

                        <Select
                            label={"Course:"}
                            name={"course"}
                            arrays={courses}
                            required={true}
                        />

                        <Select
                            label={"Year"}
                            name={"year"}
                            arrays={years}
                            required={true}
                        />

                        <Select
                            label={"Semester:"}
                            name={"semester"}
                            arrays={semesters}
                            required={true}
                        />

                        <Select
                            label={"Status:"}
                            name={"status"}
                            arrays={statuses}
                            required={true}
                        />

                        <form method="dialog ">
                            <button className="btn btn-primary  mr-1">Submit</button>
                            <button className="btn btn-neutral ml-1">Cancel</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    </div>
  )
}

export default NavBar