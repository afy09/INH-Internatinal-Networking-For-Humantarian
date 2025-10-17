import React from "react";
import { PiHandHeart } from "react-icons/pi";

const DonasiList = () => {
  const donasiData = [
    {
      id: 1,
      nama: "Anonym",
      jumlah: 3049,
      tanggal: "15 Okt 2025 11:31",
      pesan: "SEMOGA SEHAT SELALU DAN CEPAT MERDEKA",
    },
    {
      id: 2,
      nama: "Anonym",
      jumlah: 5034,
      tanggal: "15 Okt 2025 05:03",
      pesan: "",
    },
    {
      id: 3,
      nama: "Anonym",
      jumlah: 10069,
      tanggal: "15 Okt 2025 04:38",
      pesan: "",
    },
  ];

  return (
    <div className="mt-4 mb-8 border border-gray-800 rounded-lg p-5">
      <div className="text-xl font-semibold mb-4">
        Donasi <span className="text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">{donasiData.length}</span>
      </div>

      <div className="space-y-4">
        {donasiData.map((item) => (
          <div key={item.id} className="border-b pb-6 last:border-none">
            <div className="flex items-start mt-3">
              {/* Icon */}
              <div className="mt-1 text-amber-500">
                <PiHandHeart size={20} />
              </div>

              {/* Isi Donasi */}
              <div>
                <div className="font-medium text-gray-900 dark:text-white">{item.pesan ? item.pesan : "(Tidak ada pesan / doa)"}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">{item.nama}</span> Berdonasi sebesar <span className="font-semibold text-amber-500">Rp {item.jumlah.toLocaleString("id-ID")}</span> pada {item.tanggal}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonasiList;
