import React from "react";
import { Link } from "react-router-dom";
import aboutImg from "../assets/images/tentang.png";

import { FiCheckCircle, MdKeyboardArrowRight } from "../assets/icons/vander";

export default function AboutOne() {
  return (
    <>
      <div className="container relative md:mt-24 mt-16">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-6">
          <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30  from-fuchsia-600/30 ps-6 pt-6 lg:me-8">
            <img src={aboutImg} className="ltr:rounded-tl-lg rtl:rounded-tr-lg" alt="" />
          </div>

          <div className="">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Sekilas Tentang Kami</h3>
            <p className="text-slate-400 max-w-xl">
              "INH adalah lembaga kemanusiaan yang tidak hanya fokus menyalurkan bantuan dari masyarakat untuk masyarakat secara amanah, namun juga menjaring potensi kemanusiaan melalui berbagai program yang dibangun atas dasar pesan damai
              untuk seluruh alam. INH berkomitmen mengajak seluruh elemen masyarakat, lembaga, perusahaan, dan pemerintah untuk bersatu dalam meningkatkan peran sosial dalam penanggulangan krisis kemanusiaan. Kami memahami bahwa tanggung
              jawab bersama sangat penting untuk memberikan bantuan yang berkelanjutan kepada mereka yang membutuhkan."
            </p>

            <div className="mt-4">
              <Link to="/aboutus" className="hover:text-amber-400 font-medium duration-500 inline-flex items-center">
                Selengkapnya
                <MdKeyboardArrowRight className="ms-1 text-[20px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
