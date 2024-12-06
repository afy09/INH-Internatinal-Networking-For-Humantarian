import React from "react";
import { Link } from "react-router-dom";

import { blogData } from "../data/data3";

import { FiClock, FiCalendar } from "../assets/icons/vander";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Switcher from "../components/switcher";

export default function Blogs() {
  return (
    <>
      <Navbar />
      <div className="container relative md:mt-24 mt-16 mb-5">
        <div className="grid grid-cols-1 pb-6 text-center">
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Distribusi Program</h3>

          <p className="text-slate-400 max-w-xl mx-auto">Program distribusi kami yang terkini tentang kebaikan dan kepedulian untuk masyarakat </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
          {blogData.slice(0, 3).map((item, index) => {
            return (
              <div className="relative bg-white dark:bg-slate-900 p-4 rounded-md shadow dark:shadow-gray-700" key={index}>
                <img src={item.image} className="rounded-md shadow dark:shadow-gray-700" alt="" />
                <div className="pt-4">
                  <div className="mt-5">
                    <Link to={`/blog-detail/${item.id}`} className="text-lg font-semibold hover:text-amber-400">
                      {item.title}
                    </Link>
                  </div>

                  <div className="mt-5 flex justify-between items-center">
                    <span className="flex items-center">
                      <FiCalendar className="h-4 w-4" />
                      <span className="ms-1 text-slate-400">{item.date}</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
      <Switcher />
    </>
  );
}
