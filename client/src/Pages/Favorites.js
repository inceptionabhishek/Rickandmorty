import axios from "axios";
import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Route, Routes } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import { Link } from "@mui/material";
import Goo from "gooey-react";
import Footer from "../components/Footer";

const api = "http://localhost:5000/favourite";

function Favorites() {
  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((result) => {
        setFavourites(result);
        setLoading(false);
      });
  }, [favourites]);

  return (
    <>
      <div className="container">
        {loading ? (
          <>
            <div className="Loading-Div">
              <div class="loader"></div>
            </div>
          </>
        ) : (
          <>
            <Typography variant="h4" style={{ marginTop: "20px" }}>
              Favourites
            </Typography>
            <Grid
              container
              spacing={0}
              direction="row"
              justify="center"
              alignItems="center"
            >
              {favourites.map((character) => (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    p={2}
                    m={1}
                    bgcolor="background.paper"
                    boxShadow={3}
                  >
                    <img
                      src={character.image}
                      alt={character.name}
                      className="Char-Image"
                    />
                    <Typography variant="h5">
                      Name : {character.name}
                    </Typography>
                    <Typography variant="h6">
                      Status: {character.status}
                    </Typography>
                    <Typography variant="h6">
                      Species : {character.species}
                    </Typography>
                    {character.type ? (
                      <Typography variant="h6">
                        Type : {character.type}
                      </Typography>
                    ) : (
                      <Typography variant="h6">Type : Not Known</Typography>
                    )}
                    <Typography variant="h6">
                      Location : {character.location.name}
                    </Typography>
                    <Button
                      onClick={() => {
                        axios.delete(
                          `http://localhost:5000/favourite/${character._id}`
                        );
                      }}
                      variant="contained"
                      color="primary"
                    >
                      Remove from Favorites
                    </Button>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Favorites;
