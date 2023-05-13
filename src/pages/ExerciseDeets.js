import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//to determine the ID of current exercise fetch additional data
import {Box} from '@mui/material'
import {exerciseOptions,fetchData} from '../utils/fetchData'
import Detail from "../components/Detail";
// import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";


const ExerciseDeets = () => {
  const [exerciseDetail,setExerciseDetail] = useState({});
  // const [exerciseVideos, setExerciseVideos] = useState([]);
  const { id } = useParams();

  const [targetMuscle, setTargetMuscle] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  useEffect(()=>{
    const fetchExercisesData = async () => {
      const exerciseDBUrl = 'https://exercisedb.p.rapidapi.com';
      // const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDBUrl}/exercises/exercise/${id}`,exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      // const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
      // setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchData(`${exerciseDBUrl}/exercises/target/${exerciseDetailData.target}`,exerciseOptions);
      setTargetMuscle(targetMuscleExercisesData);

      const equipmentExercisesData = await fetchData(`${exerciseDBUrl}/exercises/equipment/${exerciseDetailData.equipment}`,exerciseOptions);
      setEquipmentExercises(equipmentExercisesData);


    }
    fetchExercisesData();
  },[id]); //whenever ID changes call this function

  return (
    <Box bgcolor="#252526">
      <Detail exerciseDetail={exerciseDetail}/>
      {/* <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/> */}
      <SimilarExercises targetMuscle={targetMuscle} equipmentExercises={equipmentExercises}/>
    </Box>
  )
};

export default ExerciseDeets;
