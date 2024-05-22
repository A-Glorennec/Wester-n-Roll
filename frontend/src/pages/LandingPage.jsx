import Header from "../components/Header/Header";
import Presentation from "../components/Presentation";
import Banner from "../components/banner";
import LandingButton from "../components/LandingButton";
import About from "../components/About";
import Overview from "../components/Overview";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <div>
      <header>
        <Header />
        <Banner />
      </header>
      <main className="bg-bg-color">
        <Presentation />
        <LandingButton
          text="Se connecter"
          color="bg-deep-purple text-cream hover:scale-110"
          to="/login"
        />
        <LandingButton
          text="S'inscrire"
          color="bg-gold-default text-cream hover:scale-110"
          to="/signup"
        />
        <About />
        <Overview />
        <div className="pb-10 pt-4">
          <p className="text-2xl text-deep-purple font-semibold text-center">
            Inscrivez-vous pour toutes les voir !
          </p>
          <LandingButton
            text="S'inscrire"
            color="bg-gold-default text-cream hover:scale-110"
            to="/signup"
          />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
