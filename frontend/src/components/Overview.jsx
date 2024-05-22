/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import bride from "../assets/creations/bride.jpg";
import chinks from "../assets/creations/chinks.jpeg";
import collier from "../assets/creations/collierchien.jpg";
import maroquinerie from "../assets/creations/maroquinerie.jpg";

const images = [bride, chinks, collier, maroquinerie];

export default function Overview() {
  return (
    <>
      <div className="font-Neue-Kabel font-bold text-2xl text-text-color w-80 flex flex-col m-auto">
        <h1 className="flex justify-start">Un petit aperçu</h1>
        <h2 className="flex justify-end">De mes créations...</h2>
      </div>
      <div className="flex flex-wrap justify-center pt-6">
        {images.map((img, index) => (
          <div className="py-2">
            <img
              key={index}
              src={img}
              alt={`Création ${index + 1}`}
              className="px-2 rounded-xl"
            />
          </div>
        ))}
      </div>
    </>
  );
}
