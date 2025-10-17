import React from "react";

const NewsCardSkeleton = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {[...Array(count)].map((_, index) => (
        <div key={index} className="rounded-lg bg-slate-900 p-4 shadow-md border border-gray-800 animate-[pulse_3s_linear_infinite]">
          {/* Gambar */}
          <div className="w-full h-40 bg-gray-600 rounded-lg mb-3 animate-[pulse_3s_linear_infinite]"></div>

          {/* Kategori */}
          <div className="w-24 h-5 bg-gray-600 rounded-md mb-2"></div>

          {/* Tanggal */}
          <div className="w-28 h-4 bg-gray-600 rounded mb-3"></div>

          {/* Judul */}
          <div className="w-full h-5 bg-gray-600 rounded mb-2"></div>
          <div className="w-3/4 h-5 bg-gray-600 rounded mb-3"></div>

          {/* Deskripsi */}
          <div className="w-full h-4 bg-gray-600  rounded mb-1"></div>
          <div className="w-5/6 h-4 bg-gray-600  rounded mb-1"></div>
          <div className="w-2/3 h-4 bg-gray-600  rounded mb-3"></div>

          {/* Penulis */}
          <div className="w-32 h-4 bg-gray-600  rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default NewsCardSkeleton;
