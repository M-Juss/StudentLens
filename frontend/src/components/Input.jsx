import React from 'react'

const Input = ({label, value, type, placeholder, required = false, onChange}) => {
  return (
    <fieldset className="fieldset">
        <legend className="fieldset-legend">{label}</legend>
        <input type={type} value={value} className="input" placeholder={placeholder} onChange={onChange}/>
        {required && <span className='tex-sm font-medium text-red-400'>Required*</span>}
    </fieldset>
  )
}

export default Input
