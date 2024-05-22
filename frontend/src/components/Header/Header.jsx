import LogoTitle from "./LogoTitle";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <div className="bg-color-header h-[450px]">
      <LogoTitle />
      <NavBar />
    </div>
  );
}
