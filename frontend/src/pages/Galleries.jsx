import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import GalleryComponent from "../components/GalleryComponent";

export default function Galleries() {
  return (
    <div className="font-Neue-Kabel text-text-color">
      <header>
        <Header />
      </header>
      <main>
        <h1 className="text-2xl text-center pb-10 font-bold">
          Bienvenue dans mes galeries
        </h1>
        <GalleryComponent />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
