import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/Logo.svg";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "100px", xs: "40px" },
        mt: { sm: "22px", sx: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="Logo"
          style={{ width: "80px", height: "80px", margin: "0 20px" }}
        />
      </Link>
    </Stack>
  );
};

export default Navbar;
