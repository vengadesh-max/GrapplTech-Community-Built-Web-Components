import React from "react";
import { Box, Container, Button } from "@mui/material";
import "../Center.css";

function Center() {
  return (
    <div className="hero-section">
      <div className="starss">
        <Container className="contain" maxWidth="md">
          <div className="title">
            Embark on a Galactic Journey
          </div>
          <div className="subtitle">
            Join our workshop to explore galaxies through a telescope!
          </div>
          <Button
            className="cta-button"
            variant="contained"
            style={{
              color: "#000428",
              top: "50%",
              left: "15%",
              position: "absolute",
            }}
          >
            Register Now
          </Button>
        </Container>
        <img
          className="man"
          src="./man.png"
          alt=""
        />
        <div className="circle"></div>
        <Box className="gal" id="parallax-image1">
          <img src="./galaxy1.gif" alt="Galaxy 1" style={{width:"100%", height:"100%", objectFit:"cover"
          }}/>
        </Box>
        <Box className="gal" id="parallax-image2">
          <img src="./galaxy2.gif" alt="Galaxy 2" style={{width:"100%", height:"100%", objectFit:"cover"
          }}/>
        </Box>
        <Box className="gal" id="parallax-image3">
          <video src="./earth.mp4" alt="Galaxy 3" autoPlay loop muted playsInline style={{width:"100%", height:"100%", objectFit:"cover"
          }} />
        </Box>
      </div>
    </div>
  );
}

export default Center;
