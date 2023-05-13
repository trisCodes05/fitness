import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmetImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDeets = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmetImage,
      name: equipment,
    },
  ];
  return (
    <Stack
      gap="60px"
      color="#fff"
      sx={{ flexDirection: { lg: "row" }, p: "20px", aligItems: "center" }}
    >
       <img src={gifUrl} alt={name} Loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }} mt="6%">
        <Typography variant="h4" textTransform="capitalize" fontFamily="Courgette">
          {name}{" "}
        </Typography>
        <Typography variant="h6" fontFamily="Malengo-Reg">
          {name}
          {` `} is one of the best exercises that targets your {target}.
        </Typography>
        {extraDeets.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#d3dce8",
                borderRadius: "50%",
                width: "80px",
                height: "80px",
              }}
            >
              <img
                src={item.icon}
                alt={bodyPart}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography variant="h5" textTransform="capitalize" fontFamily="Malengo-Reg">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
     
    </Stack>
  );
};

export default Detail;
