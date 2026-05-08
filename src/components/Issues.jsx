import React, { useState } from "react";
import Todo from "./Todo";
import Done from "./Done";
import Modal from "./Modal";
import Toast from "./Toast";
export default function Issues() {
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);
  const [create, setCreate] = useState(false);
  const [issues, setIssues] = useState([]);
  const [created, setCreated] = useState(false)
  //need for what is beng writein in input which is title and descripyion in this case and then a new set of it which is the spread operator
  const btns = [
    { id: 1, btnName: "All issuses" },
    //   {id:2,  btnName: "Created"},
    // {id:3, btnName: "Subscribed"},
    //   {id:4, btnName: "Activity"},
  ];
  const handleModal = () => {
    setModal((prev) => !prev);
  };
  const handleCreate = () => {
    setIssues([...issues, title]);
    setModal(false);
    setCreated(true)
    console.log(issues);
  };
  return (
    <div className="relative  h-screen ">
      <div className=" ">
        {btns.map((btn) => (
          <button key={btn.id} className="bg-black text-white rounded-xl p-5">
            {btn.btnName}
          </button>
        ))}
        <div className="flex flex-col gap-5">
          <Todo handleModal={handleModal} />
          <Done handleModal={handleModal} />
        </div>

        {modal ? 
        
               <Modal title={title} 
               description={description} 
               setDescription={setDescription} setTitle={setTitle} handleCreate={handleCreate} />
        
    : ""}
      </div>
      <div className=" flex flex-col bg-black ">
        {issues.map((issue) => (
          <div className="w-full p-1 text-neutral-800" key={issue.id}>
            <div className="bg-red-500 p-2">{issue}</div>
          </div>
        ))}
      </div>
      {created ? <Toast created={created}/> : ""}
    </div>
  );
}
