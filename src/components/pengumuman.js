import React from "react";
import { Link } from "react-router-dom";

import { blogData } from "../data/data2";

export default function Pengumuman() {
  return (
    <>
      <div className="container relative md:mt-24 mt-16">
        <div className="grid grid-cols-1 pb-6 text-center">
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Pengumuman</h3>
        </div>

        <div className="flex justify-around w-[30%] gap-6">
          {blogData.slice(0, 3).map((item, index) => {
            return (
              <div className="relative bg-white dark:bg-slate-900 p-4 rounded-md shadow dark:shadow-gray-700" key={index}>
                <img src={item.image} className="rounded-md shadow dark:shadow-gray-700" alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
