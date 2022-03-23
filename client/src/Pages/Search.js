import { Box, Typography, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Avatar from "@mui/material/Avatar";
import { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import axios from "axios";
import Footer from "../components/Footer";
const rickAvatar = "https://rickandmortyapi.com/api/character/avatar/1.jpeg";
const mortyAvatar = "https://rickandmortyapi.com/api/character/avatar/2.jpeg";

const api = "https://rickandmortyapi.com/api/character/?name=";
function Search() {
  const [name, setName] = useState("rick");
  const [character, setCharacter] = useState([]);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    // error handling
    fetch(api + name)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        if (data.results.length > 0) {
          setCharacter(data.results);
          setFlag(true);
        } else {
          setFlag(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [name]);

  const changename = (e) => {
    setName(e.target.value);
    console.log(name);
  };
  return (
    <>
      <div className="container">
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "20vh" }}
        >
          <h1 className="Heading-Top">Search Characters</h1>
          <TextField
            onChange={changename}
            label="Search character"
            color="secondary"
            focused
          />
        </Grid>
        <Grid
          container
          spacing={0}
          direction="row"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "20vh" }}
        >
          {flag ? (
            character.map((character) => (
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
                  <Typography variant="h6">
                    Origin : {character.origin.name}
                  </Typography>
                  <Button
                    onClick={() => {
                      axios
                        .post(
                          "https://rickandmorty-mern.herokuapp.com/favourite/add",
                          {
                            name: character.name,
                            image: character.image,
                            status: character.status,
                            species: character.species,
                            type: character.type,
                            location: character.location.name,
                            characterID: character.id,
                          }
                        )
                        .then((res) => alert(res.data))
                        .catch((err) => console.log(err));
                    }}
                    variant="contained"
                    color="primary"
                  >
                    Add to favorites
                  </Button>
                </Box>
              </Grid>
            ))
          ) : (
            <Typography variant="h6">No results found</Typography>
          )}
        </Grid>
      </div>
      <Footer />
    </>
  );
}

export default Search;
