import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/Gym01.png";


const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #03172e" : "",
        backgroundColor: "#FFFFFF",
        borderBottomLeftRadius: "20px",
        width: "220px",
        height: "280px",
        cursor: " pointer",
        gap: "47px",
      }}

      onClick={()=>{
        setBodyPart(item);
        window.scrollTo({top: 600, left: 100, behavior:"smooth"})
      }}
    >
      <img
        src={Icon}
        alt="dumbell"
        style={{ width: "50px", height: "60px" }}
      />
      <Typography
       fontSize="24px" fontWeight="bold" color="#12354d" textTransform="capitalize" fontFamily="Malengo-Reg"
       >{item}</Typography>
    </Stack>
  );
};

export default BodyPart;
