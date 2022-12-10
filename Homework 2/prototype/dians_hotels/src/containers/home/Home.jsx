import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Typography, Button } from "@mui/material";
import hotel from "../../assests/hotel-draw_3.png";

const Home = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="home-header"
        spacing={3}
      >
        <Grid
          container
          item
          direction="column"
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={12}
          lg={6}
          className="home-header-left"
        >
          <Grid item id="home-title-grid">
            <Typography variant="h3" fontSize="2rem">
              <span id="home-title">Your desired hotel is click away...</span>
            </Typography>
          </Grid>
          <Grid item>
            <Button component={Link} id="find-hotel-btn" to="/findHotels">
              Find Hotel
            </Button>
          </Grid>
        </Grid>

        <Grid
          container
          item
          className="home-header-right"
          direction="column"
          alingItems="center"
          justifyContent="center"
          xs={12}
          md={12}
          lg={6}
        >
          <img src={hotel} alt="hotel-img" id="hotel-img" />
        </Grid>
      </Grid>
      ;
    </>
  );
};

export default Home;
