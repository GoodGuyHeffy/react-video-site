import React from 'react'

function GradientBtn({title, className}) {



  return (
    <button className={`bg-gradient-to-r from-cyan-800 to-teal-500  py-2 px-6
     text-black rounded-lg duration-300 hover:scale-110 ${className}`}>{title}</button>
  )
}

export default GradientBtn;