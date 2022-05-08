import React from 'react'
import {IoCloseSharp} from 'react-icons/io5'
import {TiDivide} from 'react-icons/ti';
import {IoMdAdd} from 'react-icons/io'
import {HiMinusSm} from 'react-icons/hi'

export default function Buttons({Data,ButtonClick}) {
  const data=[ '*' , '/' , 'del','+','-','=' ]

  return (
      <button className='shadow-3xl shadow-gray-300 drop-shadow- w-24 py-10 rounded-lg text-3xl font-medium font-Oswald text-gray-400' onClick={()=>ButtonClick(Data)}>
      <div className='flex items-center justify-center'>
          {data.includes(Data)?Data==='*'?<IoCloseSharp/>:Data==='/'?<TiDivide/>:Data==='+'?<IoMdAdd/>:Data==='-'?<HiMinusSm/>:Data:Data}
      </div>
  </button>
  )
}
