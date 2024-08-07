import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from 'react-router-dom';
import OrderSummary from './OrderSummary';
import DiliveryAddressForm from './DiliveryAddressForm';

const steps = ['Login', 'Delivery address', 'Order summary', 'Payment'];

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const querySearch = new URLSearchParams(location.search);
  const step = parseInt(querySearch.get("step")) || 0; 

  const [activeStep, setActiveStep] = React.useState(step);

  const updateStepInUrl = (step) => {
    const params = new URLSearchParams(location.search);
    params.set("step", step);
    navigate({ search: params.toString() });
  };



  React.useEffect(() => {
    setActiveStep(step);
  }, [step]);

  return (
    <div className='px-10 lg:px-20 py-10'>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className='mt-20'>
              {step == 1?<DiliveryAddressForm />:<OrderSummary />}
            </div>
          </React.Fragment>
        )}
      </Box>
    </div>
  );
}
