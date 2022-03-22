import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Stack } from "@mui/material";

function Footer() {
  return (
    <div className="footer">
      <Stack direction="row">
        <a
          href="https://www.instagram.com/Wildfireabhi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/inceptionabhi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://github.com/inceptionabhishek"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </a>
      </Stack>
    </div>
  );
}

export default Footer;
