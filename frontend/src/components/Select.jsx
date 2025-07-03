import React from 'react'

const Select = ({label, name, arrays, required = false, onChange}) => {
  return (
    <div>
        <fieldset className="fieldset">
            <legend className="fieldset-legend">{label}</legend>
            <select name={name}  className="select" onChange={onChange}>
                {arrays.map((array, index) => {
                    return(
                        <option key={index}>{array}</option>
                    )
                })}
            </select>
            {required && <span className='tex-sm font-medium text-red-400'>Required*</span>}
        </fieldset>
    </div>
  )
}

export default Select
