import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5">
        <img
          style={{ width: "60%", marginLeft: "190px" }}
          src="media\images\home.jpg"
        />
      </div>
      <h2 style={{ color: "#0956ca" }} className="text-center">
        Grapplers Unite! Discover Powerful Web Components Created by Your Peers.
      </h2>
      <p className="text-muted fs-5 text-center mt-5">
        Tired of building websites from scratch? Feeling like a hamster on a
        wheel of code? Introducing Grabbit & Go, your one-stop shop for web
        components built by the awesome GrapplTech community! Stop reinventing
        the wheel (or the dropdown menu) and unleash your inner Picasso (of web
        design, that is). With Grabbit & Go, you can:
      </p>
    </div>
  );
}

export default Hero;
