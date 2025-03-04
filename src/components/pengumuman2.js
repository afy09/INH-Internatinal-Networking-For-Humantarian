import React, { useEffect, useState } from "react";
import HakAsasi from "../assets/images/hakasasi.png";

export default function Pengumuman() {
  return (
    <div className="container relative md:flex gap-3 md:mt-24 mt-16">
      <div className="pe-3">
        <div className="grid grid-cols-1 pb-3 text-center">
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Aktivitas Terbaru Kami</h3>
        </div>

        <div className="flex justify-center">
          <div className="relative bg-white dark:bg-slate-900 p-4 rounded-md shadow dark:shadow-gray-700">
            <img src={HakAsasi} className="rounded-md shadow dark:shadow-gray-700" alt="Pengumuman" />
          </div>
        </div>
      </div>

      <div className="ms-0 md:ms-5 mt-4 md:mt-0">
        <div className="grid grid-cols-1 pb-3 text-center">
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Pengumuman</h3>
        </div>

        <div className="flex justify-center">
          <div className="relative bg-white dark:bg-slate-900 p-4 rounded-md shadow dark:shadow-gray-700">
            <img src={HakAsasi} className="rounded-md shadow dark:shadow-gray-700" alt="Pengumuman" />
          </div>
        </div>
      </div>
    </div>
  );
}
