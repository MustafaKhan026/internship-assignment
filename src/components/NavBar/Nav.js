import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

export default function DenseAppBar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ marginBottom: "20px" }}>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            <Link
              to={props.to}
              style={{ textDecoration: "none", color: "white" }}
            >
              {props.label}
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
