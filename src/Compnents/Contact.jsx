import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  TextField,
  Button,
  Typography,
  Box,
  Container,
  Paper,
} from "@mui/material";
import { Email, Phone } from "@mui/icons-material";

export default function ContactForm() {
  // const theme = useTheme();
  // const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const formRef = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    reply_to: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    from_name: "",
    from_email: "",
    reply_to: "",
    message: "",
  });

  const validate = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.from_name.trim()) {
      newErrors.from_name = "Name is required.";
      isValid = false;
    } else if (!/^[A-Za-z\s]+$/.test(formData.from_name)) {
      newErrors.from_name = "Name must contain only letters and spaces.";
      isValid = false;
    }

    if (!formData.from_email.trim()) {
      newErrors.from_email = "Email is required.";
      isValid = false;
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(
        formData.from_email
      )
    ) {
      newErrors.from_email = "Enter a valid email address.";
      isValid = false;
    }

    if (!formData.reply_to.trim()) {
      newErrors.reply_to = "Mobile number is required.";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.reply_to)) {
      newErrors.reply_to = "Mobile number must be 10 digits.";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  //
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    let error = "";

    // Real-time validation
    if (name === "from_name") {
      if (!value.trim()) {
        error = "Name is required.";
      } else if (!/^[A-Za-z\s]+$/.test(value)) {
        error = "Name must contain only letters and spaces.";
      }
    }

    if (name === "from_email") {
      if (!value.trim()) {
        error = "Email is required.";
      } else if (
        !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value)
      ) {
        error = "Enter a valid email address.";
      }
    }

    if (name === "reply_to") {
      if (!value.trim()) {
        error = "Mobile number is required.";
      } else if (!/^\d{10}$/.test(value)) {
        error = "Mobile number must be 10 digits.";
      }
    }

    if (name === "message") {
      if (!value.trim()) {
        error = "Message is required.";
      }
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    emailjs
      .send(
        "service_ysb73xc",
        "template_qcsno6n",
        formData,
        "2iZNNEjvdPzUyQmnY"
      )
      .then((response) => {
        console.log("Email sent successfully!", response);
        alert("Your message has been sent!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        pt: 2,
      }}
    >
      <Container>
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          LOCATION CONTACT FORM
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            height: { xs: "auto", md: "90vh" },
            mt: 2,
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: -5,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.4204606503513!2d75.34641777499859!3d19.86445998150926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba32d8726a0a3%3A0xcc355f9df5c78151!2sHostedminds!5e0!3m2!1sen!2sin!4v1746446182213!5m2!1sen!2sin"
              width="100%"
              height="90%"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
            <Paper
              sx={{
                backgroundColor: "white",
                py: 3,
                px: { xs: 2, sm: 3, md: 4 },
                color: "black",
                borderRadius: "0",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: { xs: "flex-start", sm: "center" },
                  // padding-left: { xs: 10, sm: 10 },
                  alignItems: { xs: "space-between", sm: "center" },
                  pl: { xs: 10, sm: 0 },
                  justifyContent: { xs: "space-between", sm: "center" },
                  gap: { xs: 2, sm: 10 },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Email fontSize="small" sx={{ mr: 1, color: "#0a4d8c" }} />
                  <Typography
                    variant="body2"
                    sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
                  >
                    hostedminds@gmail.com
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Phone fontSize="small" sx={{ mr: 1, color: "#0a4d8c" }} />
                  <Typography
                    variant="body2"
                    sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
                  >
                    (+91) 90xxxxxx44
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Box>

          <Paper
            sx={{ flex: 1, backgroundColor: "white", p: 4, borderRadius: 0 }}
          >
            <Box
              sx={{
                mb: 1,
                display: "flex",
                flexDirection: "column",
                gap: "25px",
              }}
            >
              <Typography
                variant="h5"
                gutterBottom
                sx={{ color: "black", fontWeight: "bold", alignSelf: "center" }}
              >
                SEND A MESSAGE
              </Typography>

              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: "flex", flexDirection: "column", gap: 2 }}
              >
                <TextField
                  name="from_name"
                  placeholder="Name"
                  value={formData.from_name}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  error={Boolean(errors.from_name)}
                  helperText={errors.from_name}
                  InputProps={{
                    sx: { backgroundColor: "grey.200", color: "black" },
                  }}
                />
                <TextField
                  name="from_email"
                  placeholder="Email"
                  type="email"
                  value={formData.from_email}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  error={Boolean(errors.from_email)}
                  helperText={errors.from_email}
                  InputProps={{
                    sx: { backgroundColor: "grey.200", color: "black" },
                  }}
                />
                <TextField
                  name="reply_to"
                  placeholder="Mobile Number"
                  type="tel"
                  value={formData.reply_to}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  error={Boolean(errors.reply_to)}
                  helperText={errors.reply_to}
                  InputProps={{
                    sx: { backgroundColor: "grey.200", color: "black" },
                  }}
                />
                <TextField
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                  error={Boolean(errors.message)}
                  helperText={errors.message}
                  InputProps={{
                    sx: { backgroundColor: "grey.200", color: "black" },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "#69c",
                    color: "white",
                    fontWeight: "bold",
                    width: "15%",
                    mx: "auto",
                    py: 0.5,
                    "&:hover": { backgroundColor: "#1c3d66" },
                  }}
                >
                  SEND
                </Button>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}
