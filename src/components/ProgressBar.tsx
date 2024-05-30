import { Box, LinearProgress } from '@mui/material';
import React from 'react';

interface ProgressBarProps {
   currentStep: number;
   totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
   const progress = (currentStep / totalSteps) * 100;

   return (
      <Box sx={{ width: '100%', mb: 2 }}>
         <LinearProgress variant="determinate" value={progress} />
      </Box>
   );
};

export default ProgressBar;
