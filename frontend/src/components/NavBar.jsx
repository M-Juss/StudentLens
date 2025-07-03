import React from 'react'

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
                    <h3 className="font-bold text-lg">Complete Student Details</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Student Id:</legend>
                            <input type="text" className="input " placeholder="Type here" />
                            <p className="label">Required*</p>
                        </fieldset>

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Student Name:</legend>
                            <input type="text" className="input" placeholder="Type here" />
                            <p className="label">Required*</p>
                        </fieldset>

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Courses</legend>
                            <select defaultValue="Pick a browser" className="select">
                                {courses.map((course, id) => {
                                    return(
                                        <option key={id}>{course}</option>
                                    )
                                })}
                            </select>
                            <span className="label">Required*</span>
                        </fieldset>

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Year</legend>
                            <select className="select">
                            {years.map(year => (
                                <option key={year}>{year}</option>
                            ))}
                            </select>
                            <span className="label">Required*</span>
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Semester</legend>
                            <select defaultValue="1st Semester" className="select">
                                <option>1st Semester</option>
                                <option>2nd Semester</option>
                            </select>
                            <span className="label">Required*</span>
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Status</legend>
                            <select className="select select-bordered w-full max-w-xs">
                                {statuses.map(status => (
                                    <option key={status}>{status}</option>
                                ))}
                            </select>
                            <span className="label">Required*</span>
                        </fieldset>
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