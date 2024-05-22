import about from "../assets/about.jpg";

export default function About() {
  return (
    <div className="px-2 py-8 font-Neue-Kabel text-text-color">
      <img
        src={about}
        alt="Kerry mon cheval, et moi"
        className="rounded-xl m-auto"
      />
      <h1 className="font-bold text-xl text-center pt-6">Qui suis-je ?</h1>
      <p className="font-medium pt-4 text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsum
        expedita eaque optio, soluta consectetur voluptatem at, dolore corrupti
        odit eveniet porro laborum impedit cum. Deserunt ab iure inventore
        eaque.lorem.
      </p>
    </div>
  );
}
