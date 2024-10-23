import React from 'react'
import Slidercomponent from './common/Slidercomponent'

const Sliderselect = () => {
  return (
    <div>
      <Slidercomponent amount={3500} unit="$" step={100} defaultValue={4000} min={1000} max={10000} label="Home Value" onChange={(e) => console.log(e.target.value)}/>
      
      <Slidercomponent amount={600} unit="$" step={100} defaultValue={600} min={0} max={3000} label="Down Payment" onChange={(e) => console.log(e.target.value)}/>

      <Slidercomponent amount={2000} unit="$" step={100} defaultValue={2000} min={0} max={3000} label="Loan Amount" onChange={(e) => console.log(e.target.value)}/>

      <Slidercomponent amount={5} unit="%" step={1} defaultValue={5} min={2} max={18} label="Interest Rate" onChange={(e) => console.log(e.target.value)}/>
    </div>
  )
}

export default Sliderselect