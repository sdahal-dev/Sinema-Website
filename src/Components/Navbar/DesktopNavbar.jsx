import sinemaLogo from "../../assets/sinema-logo.png";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const DesktopNavbar = () => {
  return (
    <div className="desktop-navbar-wrapper flex w-screen fixed justify-between items-center text-sm font-semibold text-white py-2 border-b">
      {/* Logo & Name */}
      <div className="logo-name flex items-center cursor-pointer">
        <img src={sinemaLogo} alt="Logo" className="h-10 w-10 ml-5" />
        <h1>Sinema</h1>
      </div>

      {/* Desktop Navbar Links */}
      <div className="navbar-links">
        <a className="links ml-10 mr-6">Home</a>

        <a className="links mx-6">Movies</a>

        <a className="links mx-6">Favorites</a>

        <a className="links mr-10 ml-6">Search</a>
      </div>

      {/* Sign In / Log Out */}
      <div className="signing border-2 border-white mr-5 py-1 px-4 rounded-3xl text-white bg-[rgba(220,144,50,0.64)] hover:bg-white hover:text-[rgba(220,144,50,0.64)] transition-all duration-300 ease-in-out">
        <button className="cursor-pointer">Sign In</button>
      </div>
    </div>
  );
};

export default DesktopNavbar;
