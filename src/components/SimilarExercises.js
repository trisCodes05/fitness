import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscle, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0px" } }} color="#fff">
      <Stack mb={8}>
      <Typography variant="h4" mb={3} ml={5} fontWeight={700} fontFamily="Josefin Sans" color="#d3dce8">
        Exercises the target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: "5", position: "relative" }}>
        {targetMuscle.length ?
         <HorizontalScrollbar data={targetMuscle}/> : <Loader/>}
      </Stack>
      </Stack>
      <Stack>
      <Typography variant="h4" mb={5} ml={5} fontWeight={700} fontFamily="Josefin Sans" color="#d3dce8">
        Exercises that uses the same equipment
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {equipmentExercises.length ?
         <HorizontalScrollbar data={equipmentExercises}/> : <Loader/>}
      </Stack>
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
