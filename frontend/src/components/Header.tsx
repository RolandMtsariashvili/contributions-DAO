import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";

export const Header = () => {
  return (
    <AppBar position="static" sx={{ background: "#232323", boxShadow: "none" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ justifyContent: "space-between", minHeight: 80 }}
        >
          {/* Left: Title */}
          <Typography variant="h6" sx={{ fontWeight: 600, p: 0, m: 0 }}>
            Connect Your Wallet
          </Typography>
          {/* Center: Navigation */}
          <Box sx={{ display: "flex", gap: 4 }}>
            <Button>Explore</Button>
            <Button>Your Projects</Button>
            <Button>About</Button>
            <Button>Profile</Button>
          </Box>
          {/* Right: Connect Button */}
          <Button variant="contained">Connect</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
