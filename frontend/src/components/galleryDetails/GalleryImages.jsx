import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GalleryComments from "./GalleryComments";
import PostComments from "./PostComments";

export default function GalleryImages() {
  const [images, setImages] = useState([]);
  const { galleryId } = useParams();

  useEffect(() => {
    const fetchGalleryImages = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://localhost:3310/api/images/gallery/${galleryId}`,
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
        setImages(data.results || []);
      } else {
        console.error("Failed to fetch images:", response.statusText);
      }
    };
    fetchGalleryImages();
  }, [galleryId]);

  const handleCommentPosted = (newComment, imageId) => {
    setImages(
      images.map((image) => {
        if (image.i_id === imageId) {
          return { ...image, comments: [...image.comments, newComment] };
        }
        return image;
      })
    );
  };
  return (
    <div>
      {images.map((image) => (
        <div key={image.i_id}>
          <img
            src={`http://localhost:3310/uploads/${image.i_path
              .split("\\")
              .pop()}`}
            alt={image.i_caption}
            className="rounded-lg"
          />
          <p>{image.i_caption}</p>
          <GalleryComments imageId={image.i_id} />
          <PostComments
            imageId={image.i_id}
            onCommentPosted={(newComment) =>
              handleCommentPosted(newComment, image.i_id)
            }
          />
        </div>
      ))}
    </div>
  );
}
