const Hero = () => {
  return (
    <div className="flex justify-between main-container">
      <div className="flex flex-col gap-4 pt-[100px]">
        <p className="font-bold text-4xl">
          Connect with your loved ones
          <br /> in Real-time.
        </p>
        <p className="font-sans text-base">
          <span className="font-bold text-lg text-[#623CEA]">LinkUp</span> is a
          mobile platform that enables you to connect
          <br /> with your family and friends anywhere at anytime.
        </p>
        <div className="py-2 px-4 bg-[#623CEA] transition duration-300 hover:scale-[1.1] w-fit rounded-lg">
          <p className="cursor-pointer text-white font-bold">Get Started</p>
        </div>
      </div>
      <div>
        <img
          className="w-[600px] h-[540px] object-cover rounded-md"
          src="https://advice.cdn.betterhelp.com/md/people-at-work-smiling-at-computer.jpg"
        />
      </div>
    </div>
  );
};

export default Hero;
