import React from 'react'
import Slider from '@mui/material/Slider';
import { Stack, Step, Typography } from '@mui/material';

const Slidercomponent = ({ defaultValue, min, max, amount, label, unit, step, value, onChange}) => {
  return (
    <Stack my={2}>
      <Stack gap={1}>
        <Typography variant="subtitle1">{label}</Typography>
        <Typography variant='h4'>{unit}{amount}</Typography>
      </Stack>
      <Slider min={min} max={max} defaultValue={defaultValue} aria-label="Default" valueLabelDisplay="auto" step={step} marks value={value} onChange={onChange}/>
      <Stack direction='row' justifyContent='space-between' >
        <Typography variant='caption' color='text.secondary'>{unit} {min}</Typography>
        <Typography color='text.secondary'>{unit} {max}</Typography>
      </Stack>
    </Stack>
  )
}

export default Slidercomponent