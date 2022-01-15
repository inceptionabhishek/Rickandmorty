import axios from 'axios';
import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useState,useEffect } from "react";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {Route,Routes} from 'react-router-dom';
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import {Link} from '@mui/material'
const rickAvatar = "https://rickandmortyapi.com/api/character/avatar/1.jpeg";
const mortyAvatar= "https://rickandmortyapi.com/api/character/avatar/2.jpeg";


  
const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 20,
    label: "20",
  },
  {
    value: 40,
    label: "40",
  },
  {
    value: 60,
    label: "60",
  },
  {
    value: 80,
    label: "80",
  },
  {
    value: 100,
    label: "100",
  },
];

function valuetext(value) {
  return `${value}°C`;
}

function Dashboard() {
    const [characters, setCharacters] = useState([]);
    const [addfavorite, setAddfavorite] = useState({});
    const handleClick = () => {
      console.log(addfavorite);
    };
    const [page, setPage] = useState(1);
    useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character/?page=${page % 40}`)
        .then((response) => response.json())
        .then((data) => {
          setCharacters(data.results);
        });
    }, [page]);
    return (
      <div>
        <div>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: "50vh" }}
          >
            <Stack direction="row" spacing={2}>
              <Avatar alt="Rick" src={rickAvatar} />
              <Typography variant="h4">Rick</Typography>
              <Typography variant="h3">AND</Typography>
              <Avatar alt="morty" src={mortyAvatar} />
              <Typography variant="h4">Morty</Typography>
            </Stack>
            <h1>page: {page}</h1>
            <br />
            <br />
            <Box sx={{ width: 300 }}>
              <Slider
                aria-label="Custom marks"
                getAriaValueText={valuetext}
                step={1}
                valueLabelDisplay="auto"
                marks={marks}
                onChange={(e, value) => setPage(value)}
              />
            </Box>
          </Grid>

          <Typography variant="h4">All characters</Typography>
          <Grid
            container
            spacing={0}
            direction="row"
            justify="center"
            alignItems="center"
          >
            {characters.map((character) => (
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
                  <img src={character.image} alt={character.name} />
                  <Typography variant="h5">Name : {character.name}</Typography>
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
                    onClick={
                      () => {

                        axios
                          .post("http://localhost:5000/favourite/add", {
                            name: character.name,
                            image: character.image,
                            status: character.status,
                            species: character.species,
                            type: character.type,
                            location: character.location.name,
                            characterID:character.id
                          })
                          .then((res) => console.log(res.data))
                          .catch((err) => console.log(err));
                      }
                      
                    }
                    variant="contained"
                    color="primary"
                  >
                    Add to favorites  
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    );
}

export default Dashboard;
