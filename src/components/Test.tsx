import { Box, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTestStore } from '../store';
import ProgressBar from './ProgressBar';
import Timer from './Timer';
import Question from './questions/Question';

interface TestProps {
   questions: any[];
   time: number;
}

const Test: React.FC<TestProps> = ({ questions, time }) => {
   const [isTimeUp, setIsTimeUp] = useState(false);
   const currentStep = useTestStore((state) => state.currentStep);
   const setStep = useTestStore((state) => state.setStep);
   const saveState = useTestStore((state) => state.saveState);
   const clearRemainingTime = useTestStore((state) => state.clearRemainingTime);

   useEffect(() => {
      saveState();
   }, [currentStep, saveState]);

   const handleNext = () => {
      setStep(currentStep + 1);
   };

   const handleTimeUp = () => {
      setIsTimeUp(true);
      //clearRemainingTime();
   };

   return (
      <Container maxWidth="sm">
         <Box
            sx={{
               display: 'flex',
               flexDirection: 'column',
               justifyContent: 'center',
               alignItems: 'flex-start',
               minHeight: '100vh',
            }}
         >
            <Box
               sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
               }}
            >
               <Typography variant="h5" component="h1">
                  Тестирование
               </Typography>
               <Timer initialTime={time} onTimeUp={handleTimeUp} />
            </Box>
            <Box sx={{ width: '100%', my: 1.2 }}>
               <ProgressBar currentStep={currentStep} totalSteps={questions.length} />
            </Box>
            {isTimeUp && currentStep < questions.length ? (
               <Typography variant="h5">Время окончено</Typography>
            ) : currentStep < questions.length ? (
               <Question question={questions[currentStep]} onNext={handleNext} />
            ) : (
               <Typography variant="h5">Тест завершен</Typography>
            )}
         </Box>
      </Container>
   );
};

export default Test;
