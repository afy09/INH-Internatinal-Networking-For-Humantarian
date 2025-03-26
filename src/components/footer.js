import React from "react";
import { Link } from "react-router-dom";
import LogoLight from "../assets/images/Logo-INH.png";

import { FiYoutube, FiFacebook, FiInstagram } from "../assets/icons/vander";

export default function Footer() {
  return (
    <>
      <div className="relative">
        <div className="shape absolute xl:-bottom-[30px] lg:-bottom-[16px] md:-bottom-[13px] -bottom-[5px] start-0 end-0 overflow-hidden z-1 rotate-180 text-white dark:text-slate-900">
          <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="#323232"></path>
          </svg>
        </div>
      </div>
      <footer className="relative  overflow-hidden">
        <span className="absolute blur-[200px] w-[300px] h-[300px] rounded-full top-0 -start-[0] bg-gradient-to-tl to-amber-400  from-amber-400 z-0"></span>
        <div className="container-fluid relative md:py-24 py-16">
          <div className="container relative">
            <div className="grid grid-cols-1 text-center">
              <div className="">
                <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl text-white tracking-normal mb-4">Yuk Ikuti Kegiatan INH !</h4>
                <p className="text-white/70 text-lg max-w-xl mx-auto">Bergabunglah dengan komunitas kami dan jadilah bagian dari gerakan kemanusiaan yang bermanfaat bagi sesama.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container relative text-center">
          <div className="grid grid-cols-1 border-t border-gray-800 dark:border-white">
            <div className="py-[30px] px-0">
              <div className="grid md:grid-cols-2 items-center">
                <div className="md:text-start text-center">
                  <Link to="#" className="text-[22px] focus:outline-none">
                    <img src={LogoLight} className="mx-auto md:me-auto md:ms-0 h-14" alt="" />
                  </Link>
                </div>

                <ul className="list-none footer-list md:text-end text-center mt-6 md:mt-0 space-x-1">
                  <li className="inline">
                    <Link
                      to="https://www.youtube.com/@INHforHumanity"
                      target="_blank"
                      className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800  rounded-md hover:border-amber-400 dark:hover:border-amber-400 hover:bg-amber-400 dark:hover:bg-amber-400 text-slate-300 hover:text-white">
                      <FiYoutube className="h-4 w-4 align-middle" />
                    </Link>
                  </li>
                  <li className="inline">
                    <Link
                      to="https://web.facebook.com/inhforhumanity?_rdc=1&_rdr#"
                      target="_blank"
                      className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800  rounded-md hover:border-amber-400 dark:hover:border-amber-400 hover:bg-amber-400 dark:hover:bg-amber-400 text-slate-300 hover:text-white">
                      <FiFacebook className="h-4 w-4 align-middle" />
                    </Link>
                  </li>
                  <li className="inline">
                    <Link
                      to="https://www.instagram.com/inhforhumanity/"
                      target="_blank"
                      className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800  rounded-md hover:border-amber-400 dark:hover:border-amber-400 hover:bg-amber-400 dark:hover:bg-amber-400 text-slate-300 hover:text-white">
                      <FiInstagram className="h-4 w-4 align-middle" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="py-[30px] px-0 border-t border-gray-800 ">
          <div className="container relative text-center">
            <div className="grid grid-cols-1">
              <div className="text-center">
                <p className="text-gray-400">
                  © {new Date().getFullYear()} Copyright <i className="mdi mdi-heart text-orange-700"></i> by INH .
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
