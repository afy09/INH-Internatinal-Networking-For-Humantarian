import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Switcher from "../components/switcher";

export default function BlogDetails() {
  const { id } = useParams(); // Mendapatkan ID dari parameter URL
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mengatur tema
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");

    // Fetch data berdasarkan ID
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.rekapitung.id/api/distribusi-program/${id}`);
        const result = await response.json();
        if (result) {
          setData(result); // Ambil data dari respons
        }
      } catch (error) {
        console.error("Error fetching blog detail:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center mt-20">
        <h3>Loading...</h3>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center mt-20">
        <h3>Data not found</h3>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <section className="relative md:pt-44 pt-36 bg-gradient-to-b from-amber-400/20 dark:from-amber-400/40 to-transparent">
        <div className="container relative">
          <div className="md:flex justify-center">
            <div className="lg:w-2/3 md:w-4/5">
              <Link to="" className="bg-amber-400 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">
                Distribusi Program
              </Link>
              <h5 className="md:text-4xl text-3xl font-bold md:tracking-normal tracking-normal md:leading-normal leading-normal mt-3">{data.title}</h5>
              <p className="text-slate-400 text-lg mt-3">{data.deskripsi}</p>

              <div className="flex items-center mt-5">
                <img src={data.image} className="h-12 w-12 rounded-full" alt={data.author} />

                <div className="ms-2">
                  <h6>
                    <Link to="" className="font-medium hover:text-amber-400">
                      {data.author}
                    </Link>
                  </h6>
                  <span className="text-slate-400 text-sm">{new Date(data.created_at).toLocaleDateString()} </span>
                </div>
              </div>
              <div className="">
                <img src={data.image} className="rounded-md shadow dark:shadow-gray-700 mt-10" alt={data.title} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Switcher />
    </>
  );
}
