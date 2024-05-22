import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function GalleryComponent() {
  const [galleries, setGalleries] = useState([]);

  useEffect(() => {
    const fetchGalleries = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch("http://localhost:3310/api/galleries", {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setGalleries(data.results || []);
        } else {
          console.error("Failed to fetch galleries:", response.statusText);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchGalleries();
  }, []);

  return (
    <div className="w-3/4 m-auto">
      {galleries.map((gallery) => (
        <Link to={`/galleries/${gallery.g_id}`} key={gallery.g_id}>
          <div className="border-2 my-4 rounded-lg">
            <h2 className="text-center p-3 text-lg font-bold">
              {gallery.g_title}
            </h2>
            <img
              src={`http://localhost:3310/uploads/${gallery.g_image
                .split("\\")
                .pop()}`}
              alt={gallery.g_title}
              className="rounded-lg w-full"
            />
            <p className="text-center font-medium text-lg pt-2">
              {gallery.g_description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
