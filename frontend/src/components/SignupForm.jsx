import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3310/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        navigate("/login");
      } else {
        throw new Error("Une erreur est survenue lors de l'inscription");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center pt-20 text-text-color font-semibold">
      <form onSubmit={handleSubmit}>
        <div className="py-2">
          <label htmlFor="nom">Votre nom: </label>
          <div>
            <input
              type="text"
              id="name"
              value={name}
              placeholder="Nom"
              onChange={(e) => setName(e.target.value)}
              required
              className="border p-2"
            />
          </div>
        </div>
        <div className="py-2">
          <label htmlFor="email">Votre adresse email:</label>
          <div>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border p-2"
            />
          </div>
        </div>
        <div className="py-2">
          <label htmlFor="password">Votre mot de passe:</label>
          <div className="pb-3">
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border p-2"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="mx-auto w-3/4 h-8 border-[1px] border-dark-default rounded-xl bg-gold-default text-cream font-bold text-lg flex items-center justify-center font-Neue-Kabel shadow-lg md:max-w-80 my-3"
          >
            S'inscrire
          </button>
        </div>
      </form>
    </div>
  );
}
