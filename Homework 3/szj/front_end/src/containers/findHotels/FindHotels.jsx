import React, { useState, useEffect } from "react";
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
import { Map, NavigationControl, Popup, Marker } from "react-map-gl";
import maplibregl from "maplibre-gl";
import axios from "axios";
// import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const FindHotels = () => {
  const [municipalities, setMunicipalities] = useState([]);
  const [selectedMuni, setSelectedMuni] = useState(-1);
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [ratingCheckBoxes, setRatingCheckBoxes] = useState([]);
  const [buildingCheckBoxes, setBuildingCheckBoxes] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8081/api/municipalities", {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((response) => {
        setMunicipalities(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("http://localhost:8081/api/hotels", {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((response) => {
        setHotels(response.data);
        setFilteredHotels(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleMuniEvent = (event) => {
    setSelectedMuni(event.target.value);

    console.log("Id: " + event.target.value);
    // if (event.target.value === -1) {
    //   setFilteredHotels(hotels);
    // } else {
    //   setFilteredHotels(
    //     hotels.filter((hotel) => event.target.value === hotel.municipalityId)
    //   );
    // }

    handleFilters(event.target.value, ratingCheckBoxes, buildingCheckBoxes);
  };

  const handleRatingEvent = (event) => {
    const rating = event.target.value;
    const updatedRatings = ratingCheckBoxes.includes(rating)
      ? ratingCheckBoxes.filter((r) => r !== rating)
      : [...ratingCheckBoxes, rating];

    setRatingCheckBoxes(updatedRatings);

    handleFilters(selectedMuni, updatedRatings, buildingCheckBoxes);
  };

  const handleBuidlingEvent = (event) => {
    const building = event.target.value;
    const updatedBuildings = buildingCheckBoxes.includes(building)
      ? buildingCheckBoxes.filter((b) => b !== building)
      : [...buildingCheckBoxes, building];

    setBuildingCheckBoxes(updatedBuildings);

    handleFilters(selectedMuni, ratingCheckBoxes, updatedBuildings);
  };

  const handleFilters = (muni, ratings, buildings) => {
    console.log("Filters Handle");
    console.log("Selected Muni " + muni);
    console.log("Checkboxes rating: " + ratings);
    console.log("Checkboxes building: " + buildings);

    let filterHotels = hotels;
    if (muni !== -1) {
      filterHotels = filterHotels.filter(
        (hotel) => hotel.municipalityId === muni
      );
    }

    if (ratings.length > 0) {
      filterHotels = filterHotels.filter((hotel) =>
        ratings.includes(hotel.stars)
      );
    }

    if (buildings.length > 0) {
      filterHotels = filterHotels.filter((hotel) =>
        buildings.includes(hotel.building)
      );
    }

    setFilteredHotels(filterHotels);
  };

  const renderRatingCheckBoxes = () => {
    const ratings = [1, 2, 3, 4, 5];

    return ratings.map((rating) => (
      <FormControlLabel
        key={rating}
        value={rating.toString()}
        control={<Checkbox size="small" />}
        label={rating.toString()}
        labelPlacement="start"
        onChange={handleRatingEvent}
      />
    ));
  };

  const renderBuildingCheckBoxes = () => {
    const buildings = ["hotel", "house", "apartments"];

    return buildings.map((building) => (
      <FormControlLabel
        value={building}
        control={<Checkbox size="small" />}
        label={building.charAt(0).toUpperCase() + building.slice(1)}
        labelPlacement="end"
        onChange={handleBuidlingEvent}
      />
    ));
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
                    value={selectedMuni}
                    label="Municipality"
                    onChange={handleMuniEvent}
                  >
                    <MenuItem value={-1}>All</MenuItem>
                    {municipalities.map((muni) => {
                      return (
                        <MenuItem key={muni.id} value={muni.id}>
                          {muni.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid item className="filters">
              <FormControl>
                <FormLabel>Rating</FormLabel>
                <FormGroup row>{renderRatingCheckBoxes()}</FormGroup>
              </FormControl>
            </Grid>

            <Grid item className="filters">
              <FormControl>
                <FormLabel>Building type</FormLabel>
                <FormGroup column>{renderBuildingCheckBoxes()}</FormGroup>
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
          <Box className="grid" id="hotels-overflow">
            <Grid>
              <Grid id="hotels-title-grid">
                <Typography variant="h6" id="hotels-title">
                  <span className="find-hotels-grid-titles">HOTELS</span>
                </Typography>
              </Grid>
              <Grid id="hotels-list-grid">
                {filteredHotels.length > 0 ? (
                  filteredHotels.map((hotel) => {
                    return (
                      <ListItem key={hotel.key} component="div" disablePadding>
                        <ListItemButton
                          className="list-btn"
                          onClick={() => {
                            setSelectedHotel(hotel);
                          }}
                        >
                          <ListItemText primary={hotel.name} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })
                ) : (
                  <Typography>No hotels found</Typography>
                )}
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid container item xs={12} md={12} lg={6} sx={{ height: "28rem" }}>
          <Map
            mapLib={maplibregl}
            initialViewState={{
              longitude: 21.7453,
              latitude: 41.6086,
              zoom: 7,
            }}
            style={{ width: "100%", height: "100%" }}
            mapStyle="https://api.maptiler.com/maps/streets/style.json?key=puGdEliB5MOMAOxGFncQ"
            id="map"
          >
            <NavigationControl position="top-left" />
            <Marker
              longitude={21.7453}
              latitude={41.6086}
              color="#FF0000"
            ></Marker>
          </Map>
        </Grid>
      </Grid>
    </>
  );
};

export default FindHotels;
