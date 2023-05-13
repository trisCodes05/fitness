import React from "react";
import { Typography, Button, Stack } from "@mui/material";

const LandingPage = () => {
  return (
    <div className="background-container">
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex:1
        }}
      >
        <Stack border="2px dashed #fff" px="25px" mt="10%">
          <Typography
            fontWeight="700"
            sx={{
              fontSize: {
                lg: "60px",
                xs: "35px",
              },
            }}
            mb="23px"
            mt="25px"
            color="#fff"
            textAlign="center"
            variant="h3"
            fontFamily= 'Courgette'
            textTransform="capitalize"
          >
            Some people want it to happen, <br/>some wish it would happen, <br />
            others make it happen.
          </Typography>
          <Typography
            fontSize="30px"
            lineHeight="25px"
            mb={4}
            color="#f2f0f5"
            textAlign="center"
            fontWeight="700"
            fontFamily= 'Tangerine-Reg'
          >
            – Michael Jordan
          </Typography>
        </Stack>
        <Button

          variant="contained"
          href="/explore"
          sx={{ padding: "10px", mt: "20px", fontFamily:"Josefin Sans",textTransform:"capitalize" }}
          size="medium"
        >
          Explore Exercises
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
