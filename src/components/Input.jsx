import React from 'react'

const Input = ({type,name,value,onChange,placeholder}) => {
  return (
   <input className='p-2 rounded-lg bg-white border border-[#07425b] outline-none' type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} required  />
  )
}

export default Input