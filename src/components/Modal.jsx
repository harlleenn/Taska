import React, { useState } from 'react'
import { X } from 'lucide-react';
import Dropdown from './Dropdown'
export default function Modal({description, title , setDescription, setTitle ,handleCreate}) {
    const [dropdown, setDropdown] = useState(false)
    const handleDropdown = () => {
        setDropdown((prev) => !prev)
    }
  return (
    <div >
           <div className="p-5 absolute inset-52  rounded-md flex flex-col justify-center bg-white border-2">
            <div className='flex flex-row justify-between'>
                <h1>New Issue</h1>
                <X/>
            </div>
            
            <input
              placeholder="Issue title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="focus-visible:outline-none text-lg p-5 "
            />
            <textarea
              placeholder="Add description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="focus-visible:outline-none p-3"
            />
           
            <div className="flex flex-row gap-5 justify-start">
              <button className="border-2 w-20 rounded-full" onClick={handleDropdown}>
                Done
                </button>
                {dropdown && <div>
                    {<Dropdown/>}
                    </div>}
              <button className="border-2 w-20 rounded-full">
                Priority
              </button>
              <button className="border-2 w-20 rounded-full">
                Assignee
              </button>
              <button className=" border-2 w-20 rounded-full">Labels</button>
            </div>
            <div className='flex justify-end'>
                  <button onClick={() => handleCreate()} className='bg-slate-200 p-1 rounded-full'>Create issue</button>
            </div>
           
          </div>
    </div>
  )
}
