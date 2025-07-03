import React from 'react'

const Input = ({label, name, type, placeholder, required = false}) => {
  return (
    <fieldset className="fieldset">
        <legend className="fieldset-legend">{label}</legend>
        <input type={type} name={name} className="input" placeholder={placeholder} />
        {required && <span className='tex-sm font-medium text-red-400'>Required*</span>}
    </fieldset>
  )
}

export default Input
