import { RadioGroup, FormControlLabel, Radio } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';
import { IQuestionProps } from './IQuestionProps';

const SingleChoiceInput: React.FC<IQuestionProps> = ({ question, control }) => (
   <Controller
      name="answer"
      control={control}
      rules={{ required: 'Выбор обязателен' }}
      render={({ field }) => (
         <RadioGroup {...field} value={field.value || ''}>
            {question?.options?.map((option: string) => (
               <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
            ))}
         </RadioGroup>
      )}
   />
);

export default SingleChoiceInput;
