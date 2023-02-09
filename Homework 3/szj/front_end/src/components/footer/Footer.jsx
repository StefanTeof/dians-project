import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import instagram from "../../assests/instagram-logo.png";
import facebook from "../../assests/facebook-logo.png";
import twitter from "../../assests/twitter-logo.png";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="flex-start"
        className="hd__footer"
        spacing={3}
      >
        <Grid item xs={12} sm={4}>
          <Typography variant="h5">
            <span className="footer-title-connect footer-titles">
              Connect With Us
            </span>
          </Typography>
          <Typography variant="p">szj@gmail.com</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" className="footer-titles">
            <span className="footer-titles">Main Office</span>
          </Typography>
          <Typography variant="p">
            123 Anywhere St.
            <br />
            Any City
            <br />
            Any Country
            <br />
            (123) 456 7890
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" className="footer-titles">
            <span className="footer-titles">Social Media</span>
          </Typography>
          <Typography className="logos">
            <img
              className="social-media-logo"
              src={instagram}
              alt="instagram"
            />
            Instagram <br />
          </Typography>
          <Typography className="logos">
            <img className="social-media-logo" src={facebook} alt="facebook" />
            Facebook <br />
          </Typography>
          <Typography className="logos">
            <img className="social-media-logo" src={twitter} alt="twitter" />
            Twitter <br />
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
