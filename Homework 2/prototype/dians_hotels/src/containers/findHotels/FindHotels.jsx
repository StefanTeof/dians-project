import React from "react";
import "./findHotels.css";
import {
  Grid,
  Typography,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormLabel,
  ListItem,
  ListItemButton,
  ListItemText,
} from "../imports";
import { Map, NavigationControl } from "react-map-gl";
import maplibregl from "maplibre-gl";

const FindHotels = () => {
  const [muni, setMuni] = React.useState("");

  const handleChange = (event) => {
    setMuni(event.target.value);
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className="grids"
        spacing={3}
      >
        <Grid container item xs={12} md={6} lg={3} className="grid">
          <Grid
            container
            item
            direction="column"
            justifyContent="flex-start"
            spacing={2}
          >
            <Grid item>
              <Typography variant="h6" id="filter-by">
                <span className="find-hotels-grid-titles">Filter By:</span>
              </Typography>
            </Grid>
            <Grid item className="filters">
              <Box sx={{ minWidth: 120 }}>
                <FormControl variant="standard" sx={{ m: 2, minWidth: 120 }}>
                  <InputLabel id="select-Municipality-label">
                    Municipality
                  </InputLabel>
                  <Select
                    labelId="select-municipality-label"
                    id="select-municipality"
                    value={muni}
                    label="Municipality"
                    onChange={handleChange}
                  >
                    <MenuItem value={null}>------</MenuItem>
                    <MenuItem value="Tetovo">Tetovo</MenuItem>
                    <MenuItem value="Skopje">Skopje</MenuItem>
                    <MenuItem value="Bitola">Bitola</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item className="filters">
              <FormControl>
                <FormLabel>Rating</FormLabel>
                <FormGroup row>
                  <FormControlLabel
                    value="1"
                    control={<Checkbox size="small" />}
                    label="1"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Checkbox size="small" />}
                    label="2"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Checkbox size="small" />}
                    label="3"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="4"
                    control={<Checkbox size="small" />}
                    label="4"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="5"
                    control={<Checkbox size="small" />}
                    label="5"
                    labelPlacement="start"
                  />
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item className="filters">
              <FormControl>
                <FormLabel>Building type</FormLabel>
                <FormGroup column>
                  <FormControlLabel
                    value="hotel"
                    control={<Checkbox size="small" />}
                    label="Hotel"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="house"
                    control={<Checkbox size="small" />}
                    label="House"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="apartment"
                    control={<Checkbox size="small" />}
                    label="Apartment"
                    labelPlacement="end"
                  />
                </FormGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          item
          direction="column"
          justifyContent="flex-start"
          xs={12}
          md={6}
          lg={3}
        >
          <Box className="grid">
            <Grid>
              <Typography variant="h6" id="hotels-title">
                <span className="find-hotels-grid-titles">HOTELS</span>
              </Typography>
              <ListItem key={0} component="div" disablePadding>
                <ListItemButton className="list-btn">
                  <ListItemText primary={`Hotel Macedonia`} />
                </ListItemButton>
              </ListItem>
              <ListItem key={1} component="div" disablePadding>
                <ListItemButton className="list-btn">
                  <ListItemText primary="Hotel Emka" />
                </ListItemButton>
              </ListItem>
              <ListItem key={1} component="div" disablePadding>
                <ListItemButton className="list-btn">
                  <ListItemText primary="Petrol Company" />
                </ListItemButton>
              </ListItem>
            </Grid>
          </Box>
        </Grid>

        <Grid container item xs={12} md={12} lg={6} sx={{ height: "28rem" }}>
          <Map
            mapLib={maplibregl}
            initialViewState={{
              longitude: 41.9939913,
              latitude: 21.0276195,
              zoom: 9,
            }}
            id="map"
            style={{ width: "100%", height: "100%" }}
            mapStyle="https://api.maptiler.com/maps/streets/style.json?key=puGdEliB5MOMAOxGFncQ"
          >
            <NavigationControl position="top-left" />
          </Map>
        </Grid>
      </Grid>
    </>
  );
};

export default FindHotels;
