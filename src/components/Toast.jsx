import React, { useEffect } from "react";
import { use } from "react";

export default function Toast({created}) {

    useEffect(() => {
    const hideToast = () => {
    const toast = document.getElementById("toastId");
    setTimeout(function () {
    document.getElementById("toastId").style.display = "none"
    console.log(document.getElementById("toastId"));
    }, 5000);
    };
    hideToast();
    },[created]) // on the first render it is showing but after that not 


  return (
    <div
      className="absolute bottom-10 right-0 bg-slate-200 p-5 rounded-lg"
      id="toastId"
    >
      <h1>New issue has been added successfully</h1>
      <p>Whateber issue has been wriiten will come hre</p>
    </div>
  );
}
