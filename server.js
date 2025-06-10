import express from "express";
import fetch from "node-fetch";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("./build"));

// SSR untuk halaman berita
app.get("/news/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/news/${id}`);
    const result = await response.json();
    const data = result.data;

    if (!data) return res.status(404).send("Berita tidak ditemukan");

    // Bersihkan tag HTML dari deskripsi
    const plainDescription = data.deskripsi.replace(/<[^>]+>/g, "").slice(0, 160);

    // Ambil template HTML
    const template = fs.readFileSync(path.resolve("./src/templates/index.html"), "utf8");

    // Inject metadata dinamis ke dalam HTML
    const finalHtml = template.replace("{{TITLE}}", data.title).replace("{{DESCRIPTION}}", plainDescription).replace("{{IMAGE}}", data.image).replace("{{URL}}", `https://domainkamu.com/news/${id}`);

    res.send(finalHtml);
  } catch (err) {
    console.error(err);
    res.status(500).send("Gagal memuat berita");
  }
});

// Fallback lainnya ke React SPA
app.get("*", (req, res) => {
  res.sendFile(path.resolve("./build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
