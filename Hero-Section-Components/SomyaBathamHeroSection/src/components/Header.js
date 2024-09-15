import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import logo from "../Images/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import "../style/Header.css";

export const Header = () => {
  const [mobileOpen, setmobileopen] = useState(false);
  //hendle menu click
  const handleDrawerToggle = () => {
    setmobileopen(!mobileOpen);
  };
  //menu drawer
  const drawer = (
    <Box OnClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component={"div"}
        sx={{ flexGrow: 1, my: 2 }}
      >
        <img src={logo} alt="logo" height={"70"} width="200px"></img>
      </Typography>
      <Divider></Divider>
      <ul className="mobile-navigation">
        <li>
          <NavLink active ClassName="active" to={"/Home"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/Menu"}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/About"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/Contact"}>Contact</NavLink>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: "240px",
                },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component={"div"}
              sx={{ flexGrow: 1 }}
            >
              <img src={logo} alt="logo" height={"70"} width="250px"></img>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink active ClassName="active" to={"/Home"}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/Menu"}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={"/About"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/Contact"}>Contact</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  ); 
};
export default Header;
