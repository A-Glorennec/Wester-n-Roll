/* eslint-disable react/prop-types */
import { useState } from "react";

export default function PostComments({ imageId, onCommentPosted }) {
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://localhost:3310/api/images/${imageId}/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ text: comment }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        const newComment = { c_id: Date.now(), c_text: comment };
        onCommentPosted(newComment);
        setComment("");
      } else {
        throw new Error(
          data.message ||
            "Une erreur est survenue lors de l'envoi du commentaire"
        );
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="comment"
            value={comment}
            placeholder="Votre commentaire"
            onChange={(e) => setComment(e.target.value)}
          />
          <button type="submit">Envoyer</button>
        </div>
      </form>
    </div>
  );
}
