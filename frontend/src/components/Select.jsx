import React from 'react'

const Select = ({id, label, name, arrays, required = false, onChange, value,}) => {
  return (
    <div>
        <fieldset className="fieldset">
            <legend className="fieldset-legend">{label}</legend>
            <select name={name}  className="select" onChange={onChange} value={value}>
                {arrays.map((array, index) => {
                    const isFirst = index === 0 && id === 'add_modal'
                    return(
                        <option key={index} hidden={isFirst}>{array}</option>
                    )
                })}
            </select>
            {required && <span className='tex-sm font-medium text-red-400'>Required*</span>}
        </fieldset>
    </div>
  )
}

export default Select
