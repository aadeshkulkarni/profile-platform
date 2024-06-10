"use client";
import Appbar from "@/components/Appbar";
import React from "react";

const EditUser = () => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center items-center gap-4">
        <div className="w-[500px] min-h-[600px] bg-white bg-opacity-10 p-4 my-4 flex flex-col justify-center items-center gap-4">
          <h2>Edit your profile</h2>
          <input className="w-full px-4 py-2 rounded-lg" type="text" placeholder="Name" />
          <input className="w-full px-4 py-2 rounded-lg" type="text" placeholder="Bio" />
          <input type="file" placeholder="Profile picture" />
          <div className="flex justify-center gap-4 w-full">
            <input
              className="w-full px-4 py-2 rounded-lg"
              type="text"
              placeholder="Instagram Url"
            />
            <input className="w-full px-4 py-2 rounded-lg" type="text" placeholder="LinkedIn Url" />
          </div>
          <div className="flex justify-center gap-4 w-full">
            <input className="w-full px-4 py-2 rounded-lg" type="text" placeholder="Twitter Url" />
            <input className="w-full px-4 py-2 rounded-lg" type="text" placeholder="Github Url" />
          </div>
          <div className="flex justify-center gap-4 w-full">
            <input
              className="w-full px-4 py-2 rounded-lg"
              type="text"
              placeholder="Application1 Label"
            />
            <input
              className="w-full px-4 py-2 rounded-lg"
              type="text"
              placeholder="Application1 url"
            />
          </div>

          <div className="flex justify-center gap-4 w-full">
            <input
              className="w-full px-4 py-2 rounded-lg"
              type="text"
              placeholder="Application2 Label"
            />
            <input
              className="w-full px-4 py-2 rounded-lg"
              type="text"
              placeholder="Application2 url"
            />
          </div>
          <button className="px-4 py-2 bg-white text-xs tracking-wide rounded-md text-black shadow-lg mx-2">
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
