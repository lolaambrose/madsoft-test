import { TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';
import { IQuestionProps } from './IQuestionProps';

const ShortAnswerInput: React.FC<IQuestionProps> = ({ question, control }) => (
   <Controller
      name="answer"
      control={control}
      rules={{
         required: 'Ответ обязателен',
         maxLength: { value: 50, message: 'Ответ должен быть не более 50 символов' },
      }}
      render={({ field }) => <TextField {...field} fullWidth inputProps={{ maxLength: 50 }} />}
   />
);

export default ShortAnswerInput;
