import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Grid,
  Avatar,
} from "@mui/material";

const API_REGISTER = "http://localhost:8005/register";

const Registration = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_REGISTER, formData);
      setUsers((prevUsers) => [...prevUsers, response.data]);
      setFormData({ name: "", email: "", password: "" });
    } catch (error) {
      console.error("There was an error registering the user!", error);
    }
  };

  return (
    <Container
      sx={{
        marginTop: "15px",
        backgroundColor: "#f0f8ff",
        padding: 4,
        borderRadius: 5,
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontFamily: "'Comic Sans MS', cursive",
          color: "#ffcc00",
        }}
      >
        Registration Form
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          backgroundColor: "#fdfd96",
          padding: 4,
          borderRadius: 5,
          border: "3px solid #ffcc00",
        }}
      >
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          sx={{ backgroundColor: "#ffffff", borderRadius: 1 }}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          sx={{ backgroundColor: "#ffffff", borderRadius: 1 }}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
          sx={{ backgroundColor: "#ffffff", borderRadius: 1 }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#ffcc00",
            color: "#000000",
            fontFamily: "'Comic Sans MS', cursive",
            "&:hover": {
              backgroundColor: "#ffdd57",
            },
          }}
        >
          Register
        </Button>
      </Box>

      <Typography
        variant="h5"
        gutterBottom
        sx={{
          marginTop: 4,
          fontFamily: "'Comic Sans MS', cursive",
          color: "#ffcc00",
        }}
      >
        Registered Users
      </Typography>
      <Grid container spacing={2}>
        {users.map((user, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                border: "2px solid #ffcc00",
                borderRadius: 5,
                padding: 2,
                backgroundColor: "#ffffff",
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Avatar
                alt="User Avatar"
                src="https://img.icons8.com/color/96/000000/spongebob-squarepants.png"
                sx={{ width: 56, height: 56 }}
              />
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "'Comic Sans MS', cursive",
                    color: "#000000",
                  }}
                >
                  {user.name}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Comic Sans MS', cursive",
                    color: "#000000",
                  }}
                >
                  {user.email}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Registration;
