import React from 'react'

const Button = (props) => {
  return (
    <button className="bg-blue-500 font-medium text-white px-4 py-2 rounded-md hover:scale-105 hover:bg-blue-600 ease-linear duration-200 active:scale-95 shadow-lg active:shadow-sm">
        {props.children}
    </button>
  )
}

export default Button