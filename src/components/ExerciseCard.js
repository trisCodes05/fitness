import React from 'react'
import {Link} from'react-router-dom';
import {Button, Stack, Typography} from '@mui/material';

const ExerciseCard = ({exercise}) => {
  return (
    <Link
     className="exercise-card" to={`/explore/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <Stack direction="row">
        <Button variant="contained" sx={{ml:'21px' ,color: '#fff' ,background: '#093361',fontSize:'14px',
    borderRadius:'20px', textTransform: 'capitalize'}}>
        {exercise.bodyPart}
        </Button>

        <Button variant="contained" sx={{ml:'21px' ,color: '#fff' ,background: '#061a30' ,fontSize:'14px',
    borderRadius:'20px', textTransform: 'capitalize' }}>
        {exercise.target}
        </Button>
    </Stack>
    <Typography ml="21px" color="#000" fontWeight="bold" mt="11px"
    pb="10px" textTransform="capitalize" fontSize="22px" fontFamily="Courgette">{exercise.name}</Typography>
    </Link>
  )
}

export default ExerciseCard
