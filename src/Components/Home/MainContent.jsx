import Popcorn from "../../assets/popcorn.png";

const Main = () => {
  return (
    <>
      <div className="main-wrapper min-h-screen flex flex-col justify-center items-center px-4 text-center">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl text-white font-sans font-extrabold tracking-widest drop-shadow-lg mb-6">
          WELCOME TO SINEMA
        </h1>

        <p className="text-base sm:text-lg lg:text-xl text-white font-light max-w-xl mb-12">
          Your gateway to the latest blockbusters, hidden gems, and cult
          classics — all in one place.
        </p>

        <img
          src={Popcorn}
          alt="Popcorn"
          className="w-48 sm:w-64 lg:w-[25rem] lg:hover:scale-105 transition duration-300 ease-in-out"
        />
      </div>
    </>
  );
};

export default Main;
