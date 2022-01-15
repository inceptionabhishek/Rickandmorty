import * as React from "react";
import "./index.css";
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
import Dashboard from "./Pages/Dashboard";
import Favorites from "./Pages/Favorites";
import Search from "./Pages/Search";
import {Link } from 'react-router-dom';
import { makeStyles } from "@mui/styles";
const rickAvatar = "https://rickandmortyapi.com/api/character/avatar/1.jpeg";
const mortyAvatar = "https://rickandmortyapi.com/api/character/avatar/2.jpeg";


const useStyles = makeStyles({
  link : {
    textDecoration: 'none'
  }
});

function App() {
  const classes = useStyles();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Avatar alt="morty" src={mortyAvatar} />
            <Link to="/" className="link">
              <Button color="inherit">Dashboard</Button>
            </Link>
            <Link to="/favorites" className="link">
              <Button color="inherit">Favourites</Button>
            </Link>
            <Link to="/search" className="link">
              <Button color="inherit">Search</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
