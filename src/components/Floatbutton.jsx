import React from 'react'
import {AiOutlineArrowLeft} from 'react-icons/ai'
const Floatbutton = ({sidebar, handleSidebar}) => {
  return (
    // floating button at top right tailwindcss
    <div className="fixed top-24 lg:top-20 z-20 right-5">
        <button onClick={handleSidebar} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            <AiOutlineArrowLeft className="text-2xl" />
        </button>
    </div>
  )
}

export default Floatbutton