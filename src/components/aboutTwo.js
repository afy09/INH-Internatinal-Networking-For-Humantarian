import React from "react";
import { Link } from "react-router-dom";

import aboutImg from "../assets/images/features/bg-journey.png";

import { FiCheckCircle, MdKeyboardArrowRight } from "../assets/icons/vander";

export default function AboutTwo() {
  return (
    <>
      <div className="container relative md:mt-24 mt-16">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-6">
          <div className="relative order-1 md:order-2">
            <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30  from-fuchsia-600/30 dark:to-amber-400/50 dark:from-fuchsia-600/50 pe-6 pt-6 lg:ms-8">
              <img src={aboutImg} className="ltr:rounded-tr-lg rtl:rounded-tl-lg" alt="" />
            </div>
          </div>

          <div className="order-2 md:order-1">
            <h4 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Perjalanan Kami</h4>
            <p className="text-slate-400">"Membangun komintas ini tentu sangatlah tidak mudah, tapi kami yakin untuk berfikir postif kepada komunitas ini, karna kami sudah di jalan yang benar"</p>
            <ul className="list-none text-slate-400 mt-4">
              <li className="mb-2 flex items-center">
                <FiCheckCircle className="text-amber-400 h-5 w-5 me-2" />
                Program berjalan 20 +
              </li>
              <li className="mb-2 flex items-center">
                <FiCheckCircle className="text-amber-400 h-5 w-5 me-2" /> Donatur 30,372
              </li>
              <li className="mb-2 flex items-center">
                <FiCheckCircle className="text-amber-400 h-5 w-5 me-2" />
                Negara Kerjasama 13
              </li>
              <li className="mb-2 flex items-center">
                <FiCheckCircle className="text-amber-400 h-5 w-5 me-2" />
                Penirima Manfaat 1,126,248
              </li>
            </ul>

            <div className="mt-4">
              <Link to="" className="hover:text-amber-400 font-medium duration-500 inline-flex items-center">
                Lebih lihat detail <MdKeyboardArrowRight className="ms-1 text-[20px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
