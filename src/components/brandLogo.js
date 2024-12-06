import React, { useEffect, useState } from "react";
import axios from "axios";

export default function BrandLogo() {
  const [brandLogos, setBrandLogos] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    axios
      .get(`http://34.128.71.42:8898/api/lembaga_kerjasama`)
      .then((response) => {
        setBrandLogos(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching brand logos:", error);
      });
  }, []);

  return (
    <div className="container relative">
      <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-6">
        {brandLogos.map((item) => (
          <div className="mx-auto py-4" key={item.id}>
            <img src={item.image} className="h-14" alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
