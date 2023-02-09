import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import logo from "../../assests/logo-transparent-croped.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Button } from "@mui/material";

const Navbar = () => {
  const [value, selectedTab] = React.useState(0);
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleChange = (event, newValue) => {
    selectedTab(newValue);
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        px={5}
        py={3}
        className="hd__navbar"
      >
        <Grid item col={3}>
          <Link to="/home">
            <img id="logo" src={logo} alt="mapHotels" />
          </Link>
        </Grid>
        <Grid item col={6} className="grid-tabs">
          <Box sx={{ width: "100%" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="nav tabs example"
              className="tabs"
              textColor="black"
              TabIndicatorProps={{
                style: { backgroundColor: "black" },
              }}
            >
              <Tab component={Link} label="Home" to="/home" />
              <Tab component={Link} label="Find Hotels" to="/findHotels" />
            </Tabs>
          </Box>
        </Grid>
        <Grid item col={3} className="grid-language-but">
          <button className="language-but" type="button">
            Mk
          </button>
          <button className="language-but" type="button">
            En
          </button>
        </Grid>

        <div className="hd__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#000"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#000"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}

          {toggleMenu && (
            <div className="hd__navbar-menu_container scale-up-center">
              <div className="hd__navbar-menu_container-link">
                <p>
                  <Button
                    component={Link}
                    label="Home"
                    to="/home"
                    className="menu-but"
                    sx={{ color: "black", backgroundColor: "transparent" }}
                    onClick={() => setToggleMenu(false)}
                  >
                    Home
                  </Button>
                </p>
                <p>
                  <Button
                    component={Link}
                    label="Find Hotels"
                    to="/findHotels"
                    className="menu-but"
                    sx={{ color: "black", backgroundColor: "transparent" }}
                    onClick={() => setToggleMenu(false)}
                  >
                    Find Hotels
                  </Button>
                </p>
                <div className="hd__navbar-menu_container-links-language">
                  <button
                    type="button"
                    className="language-but"
                    onClick={() => setToggleMenu(false)}
                  >
                    Mk
                  </button>
                  <button
                    type="button"
                    className="language-but"
                    onClick={() => setToggleMenu(false)}
                  >
                    En
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </Grid>
    </>
  );
};

export default Navbar;
