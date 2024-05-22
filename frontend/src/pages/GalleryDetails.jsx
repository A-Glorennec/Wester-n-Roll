import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import AddPic from "../components/galleryDetails/AddPic";
import GalleryImages from "../components/galleryDetails/GalleryImages";

export default function GalleryDetails() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <AddPic />
        <GalleryImages />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
