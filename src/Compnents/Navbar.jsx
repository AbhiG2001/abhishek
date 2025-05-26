import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { useCart } from "./CartContext"; // Import useCart from context

const navItems = ["Home", "About", "Menu", "Blog", "Contact"];

function Navbar({ setSearchQuery }) {
  
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false); // State to toggle search bar
  const { cart } = useCart();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleSearchClick = () => {
    setShowSearch((prevState) => !prevState);
  };

  const cartCount = cart?.reduce((sum, item) => sum + item.count, 0) || 0;

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#222", zIndex: 1100 }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            flex: "1",
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexShrink: 0,
              width: "20%",
            }}
          >
            <NavLink to="/">
              <img
                src="./src/assets/Icons/logo.png"
                alt="HM Restaurant"
                style={{
                  height: "60px",
                  width: "60px",
                  objectFit: "contain",
                  maxWidth: "100%",
                }}
              />
            </NavLink>
          </Box>

          {/* Navbar Items - Hidden on Mobile */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 2,
              width: { sx: "0", md: "50%" },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                component={NavLink}
                to={`/${item.toLowerCase()}`}
                sx={{
                  color: "#fff",
                  "&:hover": {
                    color: "#ffa500",
                    borderBottom: "solid #ffa500",
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>

          {/* Search Icon (Click to Show Search Bar) */}
          <Box
            sx={{ position: "relative", display: "flex", alignItems: "center",justifyContent:"left" }}
          >
            <input
              type="text"
              placeholder="Search menu..."
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-none rounded px-2 py-1 text-black bg-white w-[100%] sm:w-80 pl-10"
              style={{ paddingLeft: "40px", height: "30px" }} // Adjust left padding to make space for icon
            />
            <IconButton
              sx={{
                position: "absolute",
                color: "gray",
                overflow: "hidden",
                position: "absolute",
              }}
            >
              <SearchIcon />
            </IconButton>
          </Box>

          {/* Icons & Mobile Menu */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              width: { sx: "23%", md: "3%" },
              justifyContent: "end",
            }}
          >
            <NavLink to="/cart">
              <IconButton color="inherit">
                <Badge badgeContent={cartCount} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </NavLink>

            {/* Mobile Menu Icon - Positioned in Right Corner */}
            <IconButton
              color="inherit"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{
                display: { xs: "flex", md: "none" },
                marginLeft: "auto",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Toolbar />

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ "& .MuiDrawer-paper": { width: 240 } }}
      >
        <Box sx={{ textAlign: "center", p: 2 }}>
          <List>
            {navItems.map((item) => (
              <ListItem key={item}>
                <ListItemButton
                  component={NavLink}
                  to={`/${item.toLowerCase()}`}
                  sx={{ textAlign: "center" }}
                >
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;
