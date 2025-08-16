import { useState } from "react";
import sinemaLogo from "../../assets/sinema-logo.png";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router";

const MobileNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="mobile-navbar-wrapper flex w-full fixed justify-between items-center text-sm font-semibold text-white py-2 px-5 border-b">
      {/* Logo & Name */}
      <div className="logo-name flex items-center">
        <img src={sinemaLogo} alt="Logo" className="h-10 w-10" />
        <h1>Sinema</h1>
      </div>

      {/* Search */}
      <div className="search-bar-set relative">
        <input
          type="search"
          placeholder="Search..."
          value={searchValue}
          className="py-1 pr-8 px-4 rounded-3xl border focus:outline-none w-[45vw]"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <XMarkIcon
          className="h-5 w-5 absolute right-2 top-1 ml-5 hover:cursor-pointer"
          onClick={() => setSearchValue("")}
        />
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
          className="h-6 w-6 text-white absolute top-4 left-10 cursor-pointer"
        />
        <NavLink to="/" className="pt-[16vh] pb-[15vh]">
          Home
        </NavLink>

        <NavLink to="/movies" className="pb-[15vh]">
          Movies
        </NavLink>

        <NavLink to="/favorites" className="pb-[15vh]">
          Favorites
        </NavLink>
        <NavLink to="/login">
          <div className="pb-[15vh]">
            <button className="border-2 py-1 px-3 rounded-3xl">Sign In</button>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default MobileNavbar;
