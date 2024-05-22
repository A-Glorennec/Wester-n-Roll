import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <ul className="flex justify-end gap-6 pr-9 pt-9 text-text-color font-semibold font-Neue-Kabel text-lg md:text-2xl">
        <Link to="/evenment">
          <li className=" hover:text-gold-default">Evènements</li>
        </Link>
        <Link to="/contact">
          <li className=" hover:text-gold-default">Contact</li>
        </Link>
      </ul>
    </div>
  );
}
