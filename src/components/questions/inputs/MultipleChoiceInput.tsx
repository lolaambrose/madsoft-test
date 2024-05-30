import { Box, Button, Checkbox, FormControl, FormControlLabel } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';
import { IQuestionProps } from './IQuestionProps';

const MultipleChoiceQuestion: React.FC<IQuestionProps> = ({ question, control }) => (
   <Controller
      name="answer"
      control={control}
      rules={{
         required: 'Выберите хотя бы один вариант',
      }}
      render={({ field }) => (
         <>
            {question?.options?.map((option: string) => (
               <FormControlLabel
                  key={option}
                  control={<Checkbox {...field} value={option} />}
                  label={option}
               />
            ))}
         </>
      )}
   />
);

export default MultipleChoiceQuestion;
