import { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import ShimmerButton from "../magicui/shimmer-button";

const NavBar: FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ backgroundColor: " #0F172A", borderBottom: "1px solid black" }}
      >
        <Toolbar>
          <Box className="w-1/4 h-full flex flex-row justify-center">
            <Avatar
              alt=""
              src="https://tse3.mm.bing.net/th?id=OIP.cl3sQJX3HOBCuKQEMKY0jwHaFj&pid=Api&P=0&h=220"
              sx={{ width: 56, height: 56 }}
            />
          </Box>
          <Box className="w-1/2 h-full flex flex-row justify-evenly items-center">
            <Typography
              sx={{ flexGrow: 1 }}
              className="text-white font-thin  cursor-pointer"
              variant="subtitle2"
            >
              <b>About me</b>
            </Typography>
            <Typography
              sx={{ flexGrow: 1 }}
              variant="subtitle2"
              className="text-white font-thin cursor-pointer"
            >
              <b>Education</b>
            </Typography>
            <Typography
              sx={{ flexGrow: 1 }}
              variant="subtitle2"
              className="text-white font-thin cursor-pointer"
            >
              <b>Experience</b>
            </Typography>
            <Typography
              sx={{ flexGrow: 1 }}
              variant="subtitle2"
              className="text-white font-thin cursor-pointer"
            >
              <b>Projects</b>
            </Typography>
            <Typography
              sx={{ flexGrow: 1 }}
              variant="subtitle2"
              className="text-white font-bold cursor-pointer"
            >
              <b>Hobbies</b>
            </Typography>
          </Box>
          <Box className="w-1/4 flex flex-row justify-evenly">
            <ShimmerButton className="shadow-2xl">
              Contact Details
            </ShimmerButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
