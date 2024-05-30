import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTestStore } from '../store';

interface TimerProps {
   initialTime: number;
   onTimeUp: () => void;
}

const Timer: React.FC<TimerProps> = ({ initialTime, onTimeUp }) => {
   const [time, setTime] = useState(() => {
      const savedTime = localStorage.getItem('remainingTime');
      return savedTime ? parseInt(savedTime, 10) : initialTime;
   });

   const setRemainingTime = useTestStore((state) => state.setRemainingTime);

   useEffect(() => {
      if (time <= 0) {
         onTimeUp();
         return;
      }

      const timerId = setInterval(() => {
         setTime((prevTime) => {
            const newTime = prevTime - 1;
            localStorage.setItem('remainingTime', newTime.toString());
            setRemainingTime(newTime);
            return newTime;
         });
      }, 1000);

      return () => clearInterval(timerId);
   }, [time, onTimeUp, setRemainingTime]);

   const formatTime = (seconds: number) => {
      const minutes = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
   };

   return (
      <Box sx={{ p: 0.8, border: '1px solid gray', borderRadius: 3 }}>
         <Typography>{formatTime(time)}</Typography>
      </Box>
   );
};

export default Timer;
