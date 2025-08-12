import { useState } from "react";
import sinemaLogo from "../../assets/sinema-logo.png";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";

const MobileNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="mobile-navbar-wrapper flex w-full fixed justify-between items-center text-sm font-semibold text-white py-2 px-5 border-b">
      {/* Logo & Name */}
      <div className="logo-name flex items-center">
        <img src={sinemaLogo} alt="Logo" className="h-10 w-10" />
        <h1>Sinema</h1>
      </div>

      {/* Menu Button */}
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <Bars3Icon className="h-6 w-6 text-white" />
      </div>

      {/* Menu Screen */}
      <div
        className={`menu-screen absolute opacity-100 top-0 right-0 w-[45vw] h-screen bg-[rgba(220,144,50,0.64)] flex flex-col items-center justify-center ${
          menuOpen ? "" : "hidden"
        }`}
      >
        <XMarkIcon
          onClick={() => setMenuOpen(false)}
          className="h-6 w-6 text-white absolute top-4 right-35 cursor-pointer"
        />
        <a className="pt-[16vh] pb-[15vh]">Home</a>

        <a className="pb-[15vh]">Movies</a>

        <a className="pb-[15vh]">Favorites</a>

        <a className="pb-[15vh]">Search</a>

        <div className="pb-[15vh]">
          <button className="border-2 py-1 px-3 rounded-3xl">Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
