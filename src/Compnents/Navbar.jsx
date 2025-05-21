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

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cart } = useCart(); // Get cart from context

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const cartCount = cart?.reduce((sum, item) => sum + item.count, 0) || 0;

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#222", zIndex: 1100 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between",alignItems:"center"}}>
          {/* Logo */}
          <Box sx={{height:"70px",width:"70px", display: "flex", alignItems: "center", flex: "1",padding:"20px"}}>
            <img
              src="./src/assets/Icons/logo.png!sw800"
              alt="HM Restaurant"
              style={{ height: "50px",width:"50px" }}
            />
          </Box>

          {/* Navbar Items - Hidden on Mobile */}
          <Box sx={{ display: { xs: "none", md: "flex" }, flex: 2, gap: 2 ,alignContent:"center",justifyContent:"center"}}>
            {navItems.map((item) => (
              <Button
                key={item}
                component={NavLink}
                to={`/${item.toLowerCase()}`}
                sx={{ color: "#fff", "&:hover": { color: "#ffa500",borderBottom:"solid #ffa500" } }}
              >
                {item}
              </Button>
            ))}
          </Box>

          {/* Icons */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              gap: 1,
              flex: "1",
              justifyContent: "flex-end"
            }}
          >
            <IconButton color="inherit" sx={{":hover":{backgroundColor:"orangered",transform:"scale(1.1)"}}}>
              <SearchIcon />
            </IconButton>

            <NavLink to="/cart">
              <IconButton color="inherit" sx={{":hover":{backgroundColor:"red",transform:"scale(1.1)"}}}>
                <Badge badgeContent={cartCount} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </NavLink>
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={handleDrawerToggle}
           sx={{ display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Toolbar />

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{ "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 } }}
      >
        <Box sx={{ textAlign: "center", p: 2 }}>
          <List>
            {navItems.map((item) => (
              <ListItem key={item}>
                <ListItemButton
                  component={NavLink}
                  to={`/${item.toLowerCase()}`}
                  sx={{
                    textAlign: "center",
                    "&:hover": { backgroundColor: "rgba(255, 165, 0, 0.2)" },
                  }}
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
