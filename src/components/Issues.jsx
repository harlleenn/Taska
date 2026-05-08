import React, { useState } from 'react'

export default function Issues() {
    const [modal, setModal] = useState(false)
    const btns = [
        { id:1 , btnName: "All issuses"},
        //   {id:2,  btnName: "Created"},
            // {id:3, btnName: "Subscribed"},
            //   {id:4, btnName: "Activity"},
    ]
    const handleModal = () => {
        setModal((prev) => !prev)
    }
  return (
    <div className='relative  bg-slate-700 h-screen'>
          <div className=' '>
       {btns.map((btn) => (
        <button key={btn.id} className='bg-black text-white rounded-xl p-5'onClick={handleModal}>{btn.btnName}</button>
       ))}

    {modal ? 
    <div className='absolute inset-x-60 inset-y-60  rounded-md flex flex-col justify-center bg-slate-400 '>
        <h1>New Issue</h1>
        <input placeholder='Issue title'className='focus-visible:outline-none text-lg '/>
        <textarea placeholder='Add description...' className='focus-visible:outline-none'/>
        <button onClick={() => handleModal()}>Create issue</button>
        <div className='flex flex-row gap-5'>
            <button className='rounded-full p-3 bg-slate-100'>Done</button>
              <button className='rounded-full p-3 bg-slate-100'>Priority</button>
                <button className='rounded-full p-3 bg-slate-100'>Assignee</button>
                  <button className='rounded-full p-3 bg-slate-100'>Labels</button>
        </div>
    </div> : ""}
    </div>
    </div>
  
  )
}
