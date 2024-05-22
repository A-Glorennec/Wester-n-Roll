/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export default function GalleryComments({ imageId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchCommentsForImage = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(
          `http://localhost:3310/api/images/${imageId}/comments`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setComments(data.results || []);
        } else {
          console.error("Failed to fetch comments:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchCommentsForImage();
  }, [imageId]);

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.c_id}>{comment.c_text}</div>
      ))}
    </div>
  );
}
