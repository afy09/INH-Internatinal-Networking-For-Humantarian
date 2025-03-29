import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function BrandLogo() {
  const [brandLogos, setBrandLogos] = useState([]);

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

  return (
    <div className="container relative">
      <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-6 ">
        {brandLogos.map((item) => (
          <div className="mx-auto py-4" key={item.id}>
            <img src={item.image} className="h-14 rounded-lg" alt={item.name} />
          </div>
        ))}
      </div>
      <Link to="/brandmitra">
        <div className="text-end text-lg text-white mt-3 hover:text-amber-400">Lihat lebih lengkap</div>
      </Link>
    </div>
  );
}
