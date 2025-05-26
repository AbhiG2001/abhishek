import React, { useState } from "react";
// import * as emailjs from "@emailjs/browser";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Stack,
  Link,
  InputAdornment,
  colors,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import emailjs from "@emailjs/browser";

const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const validateEmail = (email) => {
    return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  };

  const validateField = (name, value) => {
    let error = "";
    if (name === "name" && action === "Sign Up") {
      if (!value.trim()) {
        error = "Name is required";
      }
    }
    if (name === "email") {
      if (!value.trim()) {
        error = "Email is required";
      } else if (!validateEmail(value)) {
        error = "Invalid email format";
      }
    }
    if (name === "password") {
      if (!value.trim()) {
        error = "Password is required";
      } else if (value.length < 6) {
        error = "Password must be at least 6 characters";
      }
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate on change
    const error = validateField(name, value);
    setFormErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        errors[field] = error;
      }
    });
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Proceed with form submission
      console.log("Form submitted:", formData);
    }
  };

  const handleForgotPassword = () => {
    if (!validateEmail(formData.email)) {
      setFormErrors((prev) => ({
        ...prev,
        email: "Enter a valid email to reset password",
      }));
      return;
    }

    const templateParams = {
      email: formData.email,
      link: "https://your-app.com/reset-password", // Replace with your actual reset link
    };

    emailjs
      .send(
        "service_ysb73xc", // Replace with your EmailJS service ID
        "template_5ljjo6j", // Replace with your EmailJS template ID
        templateParams,
        "2iZNNEjvdPzUyQmnY" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("A reset link has been sent to your email.");
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send reset email. Please try again later.");
        }
      );
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#F1F1F1"
    >
      <div className="flex  flex-col md:flex-row">
        <Paper sx={{ width: 400, height: 470, bgcolor: "#343434" ,border:"none"}}>
          <img
            className="h-[470px] w-[400px] "
            // src="./src/assets/Icons/contact2.jpg"
            src="./src/images/contact1.jpg"
            alt="contact_img"
          />
        </Paper>
        <Paper
          elevation={3}
          sx={{ padding: 4, width: 400, height:470 , minheight: 470, bgcolor: "007BFF" ,disply:"flex", flexDirection:"column"}}
        >
          <Typography sx={{ color: "black" }} variant="h4" align="center" gutterBottom>
            {action}
          </Typography>
          <Box  component="form" onSubmit={handleSubmit}>
            <Stack className=" h-70"  spacing={2}>
              {action === "Sign Up" && (
                <TextField
                  placeholder="Name"
                  name="name"
                  size="small"
                  value={formData.name}
                  onChange={handleChange}
                  error={Boolean(formErrors.name)}
                  helperText={formErrors.name}
                  sx={{ bgcolor: "white"  ,height:"60px"}}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                />
              )}
              <TextField
                // label="Email"
                placeholder="Email"
                name="email"
                type="email"
                size="small"
                value={formData.email}
                onChange={handleChange}
                error={Boolean(formErrors.email)}
                helperText={formErrors.email}
                sx={{ bgcolor: "white" ,height:"60px" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
                fullWidth
              />
              <TextField
                placeholder="Password"
                name="password"
                type="password"
                size="small"
                value={formData.password}
                onChange={handleChange}
                error={Boolean(formErrors.password)}
                helperText={formErrors.password}
                sx={{ bgcolor: "white" ,height:"60px" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
                fullWidth
              />
              {action === "Login" && (
                <Typography variant="body2" align="right">
                  <Link
                    href="#"
                    underline="hover"
                    onClick={handleForgotPassword}
                  >
                    Forgot Password?
                  </Link>
                </Typography>
              )}
              <Button className="bg-red-700" variant="contained" color="warning" type="submit">
                {action}
              </Button>
            </Stack>
          </Box>
          <Box  mt={2} textAlign="center">
            <Button
              variant="text"
              onClick={() =>
                setAction((prev) => (prev === "Login" ? "Sign Up" : "Login"))
              }
            >
              {action === "Login"
                ? "Don't have an account? Sign Up"
                : "Already have an account? Login"}
            </Button>
          </Box>
          <div className="flex justify-evenly">
            <img
              className="h-10 w-10  rounded-2xl "
              src="./src/assets/Icons/Google.png"
              alt=""
            />
            <img
              className="h-10 w-10  rounded-2xl  "
              src="./src/assets/Icons/Github.png"
              alt=""
            />
            <img
              className="h-10 w-10  rounded-2xl  "
              src="./src/assets/Icons/Facebook.png"
              alt=""
            />
          </div>
        </Paper>
      </div>
    </Box>
  );
};

export default LoginSignup;
