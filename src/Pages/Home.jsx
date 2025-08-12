import DesktopNavbar from "../Components/Navbar/DesktopNavbar.jsx";
import MobileNavbar from "../Components/Navbar/MobileNavbar.jsx";

const Home = () => {
  return (
    <>
      {/* Desktop*/}
      <div className="Desktop-Design hidden md:block">
        {/* Navbar */}
        <DesktopNavbar />
      </div>

      {/* Mobile */}
      <div className="Desktop-Design block md:hidden">
        {/* Navbar */}
        <MobileNavbar />
      </div>
    </>
  );
};

export default Home;
