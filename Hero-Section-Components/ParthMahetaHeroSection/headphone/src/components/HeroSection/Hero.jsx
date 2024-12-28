import React from "react";
import Headphone from "../../assets/icons/headphone.png";
import Headphone2 from "../../assets/icons/headphone2.png";
import Headphone3 from "../../assets/icons/headphone3.png";
import { FaWhatsapp } from "react-icons/fa";
import { UpdateFollower } from "react-mouse-follower";
import { easeInOut, motion, AnimatePresence } from "framer-motion";

const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.5,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      trasition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.5,
      trasition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
  };
};

const headphoneData = [
  {
    id: 1,
    image: Headphone,
    title: "Immortal 500",
    subtitle:
      "Where Innovation Meets Sound: Explore Our Wireless Headphones for a Superior Audio Journey.",
    price: "$150",
    modal: "Cocoa Comfort",
    bgColor: "#A0522D"	,
  },
  {
    id: 2,
    image: Headphone2,
    title: "Rockid Rush",
    subtitle: "Bold sea green, unbeatable sound – headphones with premium audio quality and a striking look.",
    price: "$99",
    modal: "Emerald Wave",
    bgColor: "rgb(46,139,87)",
  },
  {
    id: 3,
    image: Headphone3,
    title: "Wireless Q2",
    subtitle: "Elevate your listening with Abyss Blue headphones – where exceptional sound meets eye-catching elegance",
    price: "$85",
    modal: "Abyss Blue",
    bgColor: "#6495ED",
  },
];
const Hero = () => {
  const [activeData, setActiveData] = React.useState(headphoneData[0]);
  const handleActiveData = (data) => {
    setActiveData(data);
  };
  return (
    <>
      <section className="bg-brandDark text-white font-varela">

        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
          {/* Info */}
          <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]">
            <div className="space-y-5 text-center md:text-left">
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: -720,
                    mixBlendMode: "difference",
                    scale: 10,
                  }}
                >
                  <motion.h1
                    key={activeData.id}
                    variants={fadeUp(0.2)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="text-3xl lg:text-6xl font-bold font-varela"
                  >
                    {activeData.title}
                  </motion.h1>
                </UpdateFollower>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeData.id}
                  variants={fadeUp(0.4)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="text-lg leading-loose text-white/80"
                >
                  {activeData.subtitle}
                </motion.p>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: activeData.bgColor,
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: -720,

                    scale: 6,
                    backgroundElement: (
                      <div>
                        {" "}
                        <img src={activeData.image} alt="" />
                      </div>
                    ),
                  }}
                >
                  <motion.button
                    key={activeData.id}
                    variants={fadeUp(0.2)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    style={{ backgroundColor: activeData.bgColor }}
                    className="px-4 py-2 inline-block font-normal rounded-sm"
                  >
                    Buy and Listen
                  </motion.button>
                </UpdateFollower>
              </AnimatePresence>

              {/* List Separator */}
              <div className="flex items-center justify-center md:justify-start gap-4 !mt-24">
                <div className="w-20 h-[1px] bg-white"></div>
                <p className="uppercase text-sm">Top Headphones for you</p>
                <div className="w-20 h-[1px] bg-white"></div>
              </div>
              {/* list switcher */}
              <div className="grid grid-cols-3 gap-10">
                {headphoneData.map((item) => {
                  return (
                    <UpdateFollower
                    key={item.id}
                      mouseOptions={{
                        backgroundColor: item.bgColor,
                        zIndex: 9999,
                        followSpeed: 0.5,
                        rotate: -720,
                        scale: 5,
                        text: "View Details",
                        textFontSize: "3px",
                      }}
                    >
                      <div
                        onClick={() => handleActiveData(item)}
                        className="grid grid-cols-2 gap-3 place-items-center cursor-pointer"
                      >
                        <div>
                          <img src={item.image} alt="" className="w-[200px]" />
                        </div>
                        <div className="space-y-2">
                          <p className="text-base font-bold">{item.price}</p>
                          <p className="text-sm font-normal text-nowrap">
                            {item.modal}
                          </p>
                        </div>
                      </div>
                    </UpdateFollower>
                  );
                })}
              </div>
            </div>
          </div>

          {/* {Hero image} */}

          <div className="flex flex-col justify-end items-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeData.id}
                variants={fadeUp(0.2)}
                initial={{ opacity: 0, scale: 0.9, y: 100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: easeInOut }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  y: 100,
                  transition: {
                    duration: 0.2,
                  },
                }}
                src={activeData.image}
                alt=""
                className="w-[300px] md:w-[400px] xl:w-[550px]"
              />
            </AnimatePresence>
          </div>
          {/* Whatsappicon */}
          <div className="text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference">
            <a href="">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
