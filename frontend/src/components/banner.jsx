import banner from "../assets/banner.jpg";

export default function Banner() {
  return (
    <div className="p-1 md:hidden bg-bg-color">
      <img
        className="rounded-lg"
        src={banner}
        alt="Blagues à tabac faites main"
      />
    </div>
  );
}
