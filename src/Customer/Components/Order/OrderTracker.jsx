import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'


const OrderTracker = ({ activeStep }) => {
    const steps = [
        "Placed",
        "confirmed",
        "Shipped",
        "Out for delivery",
        "Delivered"
    ]
  return (
    <div className='w-full'>
        <Stepper activeStep={activeStep} alternativeLabel >
        {steps.map((label) => <Step>
            <StepLabel sx={{color:"#9155fd", font:"44px"}}>{label}</StepLabel>
        </Step>)}
        </Stepper>
    </div>
  )
}

export default OrderTracker