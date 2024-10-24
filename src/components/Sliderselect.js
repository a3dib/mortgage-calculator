import React from 'react'
import Slidercomponent from './common/Slidercomponent'

const Sliderselect = ({ data, setData }) => {
  const bank_limit = 10000
  return (
    <div>
      <Slidercomponent
        amount={data.homeValue}
        unit="$"
        step={100}
        defaultValue={data.homeValue}
        value={data.homeValue}
        min={1000}
        max={bank_limit}
        label="Home Value"
        onChange={(e, value) => setData({
          ...data,
          homeValue: value,
          downPayment: value * 0.2,
          loanAmount: value * 0.8
        })} />

      <Slidercomponent
        amount={data.downPayment}
        unit="$"
        step={100}
        defaultValue={data.downPayment}
        value={data.downPayment}
        min={0}
        max={data.homeValue}
        label="Down Payment"
        onChange={(e, value) => setData({
          ...data,
          downPayment: value,
          loanAmount: data.homeValue - value
        })} />

      <Slidercomponent 
      amount={data.loanAmount} 
      unit="$" step={100} 
      defaultValue={data.loanAmount} 
      value={data.loanAmount} 
      min={0} 
      max={data.homeValue} 
      label="Loan Amount" 
      onChange={(e, value) => setData({
        ...data,
        loanAmount: value,
        downPayment: data.homeValue - value
      })} />

      <Slidercomponent amount={data.interestRate} unit="%" step={0.5} defaultValue={data.interestRate} value={data.interestRate} min={2} max={18} label="Interest Rate" onChange={(e, value) => setData({
        ...data,
        interestRate: value
      })} />
    </div>
  )
}

export default Sliderselect