import React from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  // Button,
  Container,
  Typography,
} from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../assets/personal_logo.svg";
import { Link } from "react-router-dom";
import NavLinks from "../navLinks/navLinks";

const drawerWidth = 240;
const navItems = ["Home", "About", "projects", "Contact", "Resume"];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    // ------------------ Sidebar ----------------- //
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        sx={{
          height: 87,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          fontSize: "1.3rem",
          fontWeight: "500",
        }}
      >
        Murtaza Mohebi
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" position="static" sx={{ bgcolor: "none" }}>
        <Container>
          <Toolbar>
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            {/* ------------ Personal Logo below ----------- */}
            {/* <Box sx={{ flexGrow: 1, textAlign: { xs: "center", sm: "left" } }}>
              <img src={Logo} alt="Logo" height="80" width="60" />
            </Box>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{
                    fontSize: "1.05rem",
                    fontFamily: "Jost",
                    fontWeight: "400",
                    textTransform: "none",
                    mr: "10px",
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box> */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", sm: "left" },
                flexGrow: 1,
                textAlign: { xs: "center", sm: "left" },
                my: 2,
              }}
            >
              <img src={Logo} alt="Personal Logo" height="80" width="60" />
              <Typography
                sx={{
                  ml: 2,
                  display: { xs: "none", sm: "block" },
                }}
              >
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "#F0F0F0",
                    fontWeight: "400",
                    fontSize: "20px",
                  }}
                >
                  Murtaza Mohebi
                </Link>
              </Typography>
            </Box>
            {/* Importing the nav buttons */}
            <NavLinks />
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Navbar;
