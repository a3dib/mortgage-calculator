import React from 'react'
import Slidercomponent from './common/Slidercomponent'

const Sliderselect = ({ data, setData }) => {
  const bank_limit = 10000
  return (
    <div>
      <Slidercomponent amount={data.homeValue} unit="$" step={100} defaultValue={data.homeValue} value={data.homeValue} min={1000} max={bank_limit} label="Home Value" onChange={(e,value) => setData({
        homeValue: value
      })} />

      <Slidercomponent amount={data.downPayment} unit="$" step={100} defaultValue={data.downPayment} value={data.downPayment} min={0} max={3000} label="Down Payment" onChange={(e,value) => setData({
        downPayment: value
      })} />

      <Slidercomponent amount={data.loanAmount} unit="$" step={100} defaultValue={data.loanAmount} value={data.loanAmount} min={0} max={3000} label="Loan Amount" onChange={(e,value) => setData({
        loanAmount: value
      })} />

      <Slidercomponent amount={data.interestRate} unit="%" step={0.5} defaultValue={data.interestRate} value={data.interestRate} min={2} max={18} label="Interest Rate" onChange={(e, value) => setData({
        interestRate: value
      })} />
    </div>
  )
}

export default Sliderselect