import { Link } from "react-router-dom";
import logo from "../../assets/logo-toto.png";

export default function LogoTitle() {
  return (
    <div className="md:flex md:items-end md:ml-10">
      <Link to="/landing">
        <div className="flex items-center flex-col">
          <img
            className="h-60 w-60 md:w-80 md:h-80"
            src={logo}
            alt="Logo tête de buffle"
          />
        </div>
      </Link>
      <div className="md:flex flex-col md:w-96">
        <h1 className="text-5xl flex flex-start px-5 bg-gradient-custom p-4 rounded-lg  md:text-6xl">
          <strong className="font-rye text-gold-default">WESTER</strong>
          <strong className="font-niconne text-gold-default">'n'Roll</strong>
        </h1>
        <h2 className="text-gold-default font-Neue-Kabel font-bold flex justify-end pr-10 text-2xl">
          Le cuir de vos envies !
        </h2>
      </div>
    </div>
  );
}
