import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Switcher from "../components/switcher";
import LogoInhGold from "../assets/images/Logo-INH-Gold.png";

export default function DonasiDetails() {
  const { id } = useParams(); // Mendapatkan ID dari parameter URL
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [nominal, setNominal] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState("");

  // Daftar nominal yang akan di-mapping
  const nominalOptions = [10000, 30000, 50000, 80000, 100000];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
  });

  const isButtonDisabled = formData.name == "";

  const handleNominalClick = (e, value) => {
    e.preventDefault(); // Mencegah default behavior
    setNominal(value); // Update nilai input saat tombol ditekan
  };

  useEffect(() => {
    // Mengatur tema
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");

    // Fetch data berdasarkan ID
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.rekapitung.id/api/campaign/${id}`);
        const result = await response.json();
        if (result?.data) {
          setData(result.data); // Ambil data dari respons
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://api.rekapitung.id/api/payment", {
        name: formData.name,
        email: formData.email,
        amount: parseInt(formData.amount), // Pastikan amount dikirim sebagai angka
      });

      if (response.data && response.data.url) {
        setRedirectUrl(response.data.url);
        setPopupVisible(true);
      }
    } catch (error) {
      console.error("Error posting data:", error);
      alert("Gagal mengirim data. Silakan coba lagi.");
    }
  };

  return (
    <>
      <Navbar />
      <section className="relative md:pt-44 pt-36 bg-gradient-to-b from-amber-400/20 dark:from-amber-400/40 to-transparent">
        <div className="container relative">
          <div className="md:flex justify-center">
            <div className="lg:w-2/3 md:w-4/5">
              <Link to="" className="bg-amber-400 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">
                Donasi
              </Link>
              <h5 className="md:text-4xl text-3xl font-bold md:tracking-normal tracking-normal md:leading-normal leading-normal mt-3">{data.title}</h5>
              <div className="">
                <img src={data.image} className="rounded-md shadow dark:shadow-gray-700 mt-5" alt={data.title} />
              </div>
              <p className="text-slate-400 text-lg mt-3">{data.deskripsi}</p>

              <div className="mt-5">
                <form onSubmit={handleSubmit} className="text-start mt-4">
                  <div className="grid grid-cols-1">
                    <div>
                      <label className="font-semibold" htmlFor="RegisterName">
                        Masukkan Nominal Donasi:
                      </label>

                      {/* Mapping tombol pilihan nominal */}
                      <div className="flex gap-6 mt-3 flex-wrap">
                        {nominalOptions.map((value) => (
                          <div key={value}>
                            <button
                              type="button"
                              className={`py-2 px-4 rounded border border-amber-400 ${nominal === value.toString() ? "bg-amber-400 text-white" : "bg-gray-200"}`}
                              onClick={(e) => {
                                handleNominalClick(e, value.toString()); // Tetap menggunakan fungsi pilih nominal yang sudah ada
                                setFormData((prevFormData) => ({
                                  ...prevFormData,
                                  amount: value, // Perbarui nilai formData.amount
                                }));
                              }}>
                              Rp {value.toLocaleString("id-ID")}
                            </button>
                          </div>
                        ))}
                      </div>

                      {/* Input untuk nominal */}
                      <input
                        id="RegisterName"
                        type="text"
                        value={nominal}
                        onChange={(e) => {
                          const inputValue = e.target.value;
                          setNominal(inputValue); // Perbarui state nominal
                          setFormData((prevFormData) => ({
                            ...prevFormData,
                            amount: inputValue ? parseInt(inputValue, 10) || 0 : 0, // Perbarui formData.amount dengan nilai dari input
                          }));
                        }}
                        className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-amber-400 dark:border-gray-800 dark:focus:border-amber-400 focus:ring-0"
                        placeholder="Masukkan nominal lainnya"
                      />
                    </div>

                    {/* PESAN DAN DOA */}
                    <div className="mb-4 mt-8">
                      <label className="font-semibold" htmlFor="RegisterName">
                        Pesan Doa atau Dukungan (opsional):
                      </label>
                      <textarea
                        rows={4}
                        className="mt-3 w-full py-2 px-3  bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-amber-400 dark:border-gray-800 dark:focus:border-amber-400 focus:ring-0"
                        placeholder="Tulis pesan doa dan dukunganmu disini"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="font-semibold">Nama Lengkap :</label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        type="text"
                        className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-amber-400 dark:border-gray-800 dark:focus:border-amber-400 focus:ring-0"
                        placeholder="Masukkan Nama"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="font-semibold">Email :</label>
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        type="email"
                        className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-amber-400 dark:border-gray-800 dark:focus:border-amber-400 focus:ring-0"
                        placeholder="Masukkan Email"
                      />
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center w-full mb-0">
                        <input
                          className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-amber-400 focus:border-amber-300 focus:ring focus:ring-offset-0 focus:ring-amber-200 focus:ring-opacity-50 me-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="AcceptT&C"
                        />
                        <label className="form-check-label text-slate-400 cursor-pointer" htmlFor="AcceptT&C">
                          Sembunyikan nama saya{" "}
                          <Link to="" className="text-amber-400">
                            (donasi sebagai anonim)
                          </Link>
                        </label>
                      </div>
                    </div>

                    <div className="mb-4">
                      <button
                        type="submit"
                        className={`py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-amber-400 hover:bg-amber-500 border-amber-400 hover:border-amberbg-amber-500 text-white rounded-md w-full cursor-pointer ${
                          isButtonDisabled ? "bg-gray-100 cursor-not-allowed" : ""
                        }`}
                        disabled={isButtonDisabled}>
                        Kirim
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {popupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center w-96">
            {/* Gambar*/}
            <img src={LogoInhGold} className="mx-auto block" alt="" />

            {/* Tombol Lanjut */}
            <div className=" mt-6 px-6 py-2 text-black bg-amber-400 hover:bg-amber-500 rounded">
              <a href={redirectUrl} target="_blank" rel="noopener noreferrer" className="">
                Lanjut Pembayaran
              </a>
            </div>
            <div onClick={() => setPopupVisible(false)} className=" mt-2 px-6 py-2  text-amber-400 border border-amber-400 rounded">
              <button>Batal</button>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <Switcher />
    </>
  );
}
