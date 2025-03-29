import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Switcher from "../components/switcher";

export default function BrandLogo() {
  const [brandLogos, setBrandLogos] = useState([]);
  const [brandKerjasama, setBrandKerjasama] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/api/mitra`)
      .then((response) => {
        setBrandLogos(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching brand logos:", error);
      });
  }, []);

  useEffect(() => {
    // Fetch data from the backend
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/api/lembaga_kerjasama`)
      .then((response) => {
        setBrandKerjasama(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching brand logos:", error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container relative mt-20">
        <div className="pt-16 pb-10 md:text-2xl text-2xl font-semibold text-amber-400">Mitra Media & Publikasi</div>
        <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-6 ">
          {brandLogos.map((item) => (
            <div className="mx-auto py-4" key={item.id}>
              <img src={item.image} className="h-14 rounded-lg" alt={item.name} />
            </div>
          ))}
        </div>
      </div>

      <div className="container relative mt-20">
        <div className="pt-16 pb-10 md:text-2xl text-2xl font-semibold text-amber-400">Mitra Lembaga</div>
        <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-6 ">
          {brandKerjasama.map((item) => (
            <div className="mx-auto py-4" key={item.id}>
              <img src={item.image} className="h-14 rounded-lg" alt={item.name} />
            </div>
          ))}
        </div>
      </div>

      <Footer />
      <Switcher />
    </>
  );
}
