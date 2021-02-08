import React from "react";
import MessageTag from "./MessageTag";

// components

export default function CardMessageBox() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
        <div className="flex">
         <MessageTag />
        </div>
        <div className="rounded-t mb-0">
          <textarea
            type="text"
            className="px-3 py-3 placeholder-gray-400 text-gray-700 rounded text-sm focus:outline-none w-full ease-linear transition-all duration-150 bg-gray-100"
            rows="15"
            placeholder="message here"
          ></textarea>
          <div className="m-2 flex">
          <button className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
          Send Message
        </button>
        <button className="bg-red-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
          Reset
        </button>
        </div>
        </div>
      </div>
    </>
  );
}
