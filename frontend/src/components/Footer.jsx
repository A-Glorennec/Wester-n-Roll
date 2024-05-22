import { FaFacebook, FaPhone, FaHeart } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

export default function Footer() {
  return (
    <div className="bg-color-footer h-32">
      <div className="flex justify-center items-center h-20 gap-4">
        <a
          href="https://www.facebook.com/westernroll69?locale=fr_FR"
          aria-label="Lien vers mon compte Facebook"
        >
          <FaFacebook size={35} className="text-gold-default" />
        </a>
        <a
          href="carole.foret@hotmail.fr"
          aria-label="Lien vers mon adresse email"
        >
          <IoIosMail size={35} className="text-gold-default" />
        </a>
        <a
          href="https://www.instagram.com/westernroll69/"
          aria-label="Lien vers mon compte Instagram"
        >
          <RiInstagramFill size={35} className="text-gold-default" />
        </a>
        <a
          href="tel:+33650427184"
          aria-label="Lien vers mon numéro de téléphone"
        >
          <FaPhone size={30} className="text-gold-default" />
        </a>
      </div>
      <div className="flex gap-2 text-gold-default justify-center">
        <p>Fait avec </p>
        <FaHeart size={20} color="red" />
        <p>par Anaïs Glorennec</p>
      </div>
    </div>
  );
}
