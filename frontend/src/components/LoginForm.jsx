import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function f() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3310/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.removeItem("token");
        localStorage.setItem("token", data.token);
        navigate("/galleries");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center pt-20 text-text-color font-semibold">
      <form onSubmit={handleSubmit}>
        <div className="py-2">
          <label htmlFor="email">Email:</label>
        </div>
        <div>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="exemple@exemple.com"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border p-2 rounded-md"
          />
        </div>
        <div className="py-2">
          <label htmlFor="password">Password:</label>
        </div>
        <div className="pb-3">
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Mot de passe"
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border p-2 rounded-md"
          />
        </div>
        <div>
          <button
            type="submit"
            className="mx-auto w-3/4 h-9 border-[1px] border-dark-default rounded-xl bg-light-purple text-cream font-bold text-lg flex items-center justify-center font-Neue-Kabel shadow-lg md:max-w-80 my-3 hover:scale-110 hover:bg-gold-default"
          >
            Se connecter
          </button>
        </div>
      </form>
    </div>
  );
}
