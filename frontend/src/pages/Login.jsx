import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="main-height">
        <LoginForm />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
