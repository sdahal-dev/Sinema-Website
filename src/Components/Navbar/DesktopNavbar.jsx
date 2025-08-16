import sinemaLogo from "../../assets/sinema-logo.png";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid"; // or /outline

const DesktopNavbar = () => {
  const [searchBar, setSearchBar] = useState(false);
  const [exitSearch, setExitSearch] = useState(true);
  return (
    <div className="desktop-navbar-wrapper flex w-screen fixed justify-between items-center text-sm font-semibold text-white py-2 border-b">
      {/* Logo & Name */}
      <div className="logo-name flex items-center cursor-pointer">
        <img src={sinemaLogo} alt="Logo" className="h-10 w-10 ml-5" />
        <h1>Sinema</h1>
      </div>

      {/* Search Bar */}

      {searchBar ? (
        <>
          {exitSearch ? (
            <>
              <div className="search-bar-set relative">
                <input
                  type="search"
                  placeholder="Search..."
                  className="py-1 pr-8 px-4 rounded-3xl border focus:outline-none w-70"
                />
                <XMarkIcon
                  className="h-5 w-5 absolute right-2 top-1 ml-5 hover:cursor-pointer"
                  onClick={() => setSearchBar(false)}
                />
              </div>
            </>
          ) : null}
        </>
      ) : (
        /* Desktop Navbar Links */
        <div className="navbar-links">
          <NavLink to="/" className="links ml-10 mr-6 font-bold">
            Home
          </NavLink>

          <NavLink to="/movies" className="links ml-10 mr-6 font-bold">
            Movies
          </NavLink>

          <NavLink to="/favorites" className="links ml-10 mr-6 font-bold">
            Favorites
          </NavLink>

          <a
            to="/search"
            className="links ml-10 mr-6 font-bold"
            onClick={() => setSearchBar(true)}
          >
            Search
          </a>
        </div>
      )}

      {/* Sign In / Log Out */}
      <NavLink to="/login">
        <div className="signing border-2 border-white mr-5 py-1 px-4 rounded-3xl text-white bg-[rgba(220,144,50,0.64)] hover:bg-white hover:text-[rgba(220,144,50,0.64)] transition-all duration-300 ease-in-out">
          <button className="cursor-pointer">Sign In</button>
        </div>
      </NavLink>
    </div>
  );
};

export default DesktopNavbar;
