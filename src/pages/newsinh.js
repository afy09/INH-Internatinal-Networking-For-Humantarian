import React from "react";
import Blogs from "../components/blogs";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Switcher from "../components/switcher";
import Berita from "../components/berita";
import Pengumuman from "../components/pengumuman";

export default function News() {
  return (
    <>
      <Navbar />

      <section>
        <div className="mb-6">
          <Blogs />
        </div>
        <div className="mb-6">
          <Berita />
        </div>
        <div className="mb-6">
          <Pengumuman />
        </div>
      </section>

      <Footer />
      <Switcher />
    </>
  );
}
