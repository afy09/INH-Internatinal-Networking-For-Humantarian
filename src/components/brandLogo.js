import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";

export default function BrandLogo() {
  const [brandLogos, setBrandLogos] = useState([]);
  const [lembagaLogos, setLembagaLogos] = useState([]);

  useEffect(() => {
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
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/api/lembaga_kerjasama`)
      .then((response) => {
        setLembagaLogos(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching brand logos:", error);
      });
  }, []);

  return (
    <div className="container relative">
      <div className="text-amber-400 text-lg md:text-lg mt-4 font-semibold text-center">Mitra Media & Publikasi</div>
      <Swiper
        modules={[Grid, Autoplay]}
        spaceBetween={10}
        grid={{
          rows: 1,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 6,
          },
          768: {
            slidesPerView: 4,
          },
          0: {
            slidesPerView: 2,
          },
        }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}>
        {brandLogos.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex justify-center items-center py-4">
              <img src={item.image} alt={item.name} className="h-14 rounded-lg" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="text-amber-400 text-lg md:text-lg mt-4 font-semibold text-center">Mitra Lembaga</div>
      <Swiper
        modules={[Grid, Autoplay]}
        spaceBetween={10}
        grid={{
          rows: 1,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 6,
          },
          768: {
            slidesPerView: 4,
          },
          0: {
            slidesPerView: 2,
          },
        }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}>
        {lembagaLogos.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex justify-center items-center py-4">
              <img src={item.image} alt={item.name} className="h-14 rounded-lg" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mb-5"></div>

      {/* <Link to="/brandmitra">
        <div className="text-end text-lg text-white mt-3 hover:text-amber-400">Lihat lebih lengkap</div>
      </Link> */}
    </div>
  );
}
