const Header = () => {
  return (
    <div className="flex justify-between items-center w-full h-24 main-container">
      <div className="flex gap-1 items-center">
        <img className="w-7" src="/logo.svg" />
        <p className="font-bold text-lg text-gray-700">LinkUp</p>
      </div>
      <div className="flex gap-6 items-center font-sans">
        <p className="transition duration-300 hover:scale-[1.1] cursor-pointer hover:text-[#623CEA]">
          Features
        </p>
        <p className="transition duration-300 hover:scale-[1.1] cursor-pointer hover:text-[#623CEA]">
          Pricing
        </p>
        <p className="transition duration-300 hover:scale-[1.1] cursor-pointer hover:text-[#623CEA]">
          Contact Us
        </p>
        <p className="transition duration-300 hover:scale-[1.1] cursor-pointer hover:text-[#623CEA]">
          Log In
        </p>
        <div className="p-2 w-fit bg-[#623CEA] rounded-lg transition duration-300 hover:scale-[1.1]">
          <button className="text-white font-bold">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
