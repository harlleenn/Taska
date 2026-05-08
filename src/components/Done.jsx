import React from 'react'

export default function Done({handleModal}) {
  return (
    <div className='bg-slate-200 w-full rounded-2xl '>
        <div className='flex justify-between p-2 '>
    Done
    <button onClick={handleModal}>Add button</button>
        </div>
    
        </div>
  )
}
