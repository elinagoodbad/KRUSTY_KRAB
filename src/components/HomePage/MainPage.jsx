import React from "react";
import {
  Rating,
  Stack,
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

const MainPage = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
          position: "relative",
        }}
        className="home-main-page"
      >
        <div
          style={{
            width: "100%",
            position: "relative",
          }}
          className="content"
        >
          <img
            style={{ width: "100%" }}
            src="https://androidow.com/uploads/posts/2023-04/gubka-bob-na-kuhne_1.jpg"
            alt="SpongeBob in the kitchen"
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.1) 80%)",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "20px",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                maxWidth: "300px",
                color: "white",
              }}
            >
              <img
                src="https://static.okko.tv/images/v4/d779a16b-4ecf-4e9b-9d2d-1ae2ba93f963?width=840&scale=2&quality=80&mediaType=webp&trimBorder=true"
                alt="Krusty Krab Logo"
                style={{
                  width: "100%",
                  marginBottom: "10px",
                  borderRadius: "10px",
                }}
              />
              <h1
                style={{
                  width: "700px",
                  fontSize: "50px",
                  marginLeft: "10px",
                }}
              >
                Welcome to the Krusty Krab!
              </h1>
              <h2
                style={{
                  width: "700px",
                  fontSize: "30px",
                  marginLeft: "10px",
                }}
              >
                Home of the finest fast food in Bikini Bottom.
              </h2>
              <h3
                style={{
                  width: "700px",
                  fontSize: "30px",
                  marginLeft: "10px",
                }}
              >
                Our famous Krabby Patties are made with a secret formula that
                will leave you wanting more. Come and enjoy the best dining
                experience under the sea!
              </h3>
            </div>
          </div>
          <Box
            sx={{
              bgcolor: "#3f51b5",
              color: "white",
              py: 4,
              mt: 0,
            }}
          >
            <Container maxWidth="lg">
              <img
                src="https://static.okko.tv/images/v4/d779a16b-4ecf-4e9b-9d2d-1ae2ba93f963?width=840&scale=2&quality=80&mediaType=webp&trimBorder=true"
                alt="Krusty Krab Logo"
                style={{
                  width: "100px",
                  marginBottom: "10px",
                  borderRadius: "10px",
                }}
              />
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                  <Typography variant="h6" gutterBottom>
                    Krusty Krab
                  </Typography>
                  <Typography variant="body2">
                    Address: 123 Bikini Bottom Avenue, Bikini Bottom
                  </Typography>
                  <Typography variant="body2">Phone: (123) 456-7890</Typography>
                  <Typography variant="body2">
                    Email: info@krustykrab.com
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Typography variant="h6" gutterBottom>
                    Follow Us
                  </Typography>
                  <Box>
                    <IconButton
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ color: "white" }}
                    >
                      <Facebook />
                    </IconButton>
                    <IconButton
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ color: "white" }}
                    >
                      <Twitter />
                    </IconButton>
                    <IconButton
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ color: "white" }}
                    >
                      <Instagram />
                    </IconButton>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Typography variant="h6" gutterBottom>
                    About Us
                  </Typography>
                  <Typography variant="body2">
                    Welcome to the Krusty Krab! Home of the Krabby Patty and the
                    best burgers under the sea. Come visit us for an underwater
                    dining experience you won't forget!
                  </Typography>
                </Grid>
              </Grid>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: 4,
                }}
              >
                {/* <EmojiFoodBeverageIcon fontSize="large" /> */}
              </Box>
              <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                © {new Date().getFullYear()} Krusty Krab.
              </Typography>
            </Container>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
