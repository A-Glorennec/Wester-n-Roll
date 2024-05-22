import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import SignupForm from "../components/SignupForm";

export default function Signup() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <h1 className="text-xl font-Neue-Kabel font-bold text-center pt-4 text-text-color">
          Inscrivez-vous pour voir toutes mes créations !
        </h1>
        <SignupForm />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
