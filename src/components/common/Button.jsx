 
/* eslint-disable react/prop-types */
// import React from 'react'
export default function Button({className, text, onClick, type}) {
  return (
    <button onClick={onClick} type={type} className={`${className}`}>
      {text}
    </button>
  )
};