import { TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';
import { IQuestionProps } from './IQuestionProps';

const LongAnswerInput: React.FC<IQuestionProps> = ({ question, control }) => (
   <Controller
      name="answer"
      control={control}
      rules={{ required: 'Ответ обязателен' }}
      render={({ field }) => <TextField {...field} fullWidth multiline rows={4} />}
   />
);

export default LongAnswerInput;
