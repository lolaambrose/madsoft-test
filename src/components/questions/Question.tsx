import { Box, Button, FormControl, FormHelperText, FormLabel } from '@mui/material';
import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useTestStore } from '../../store';
import ShortAnswerInput from './inputs/ShortAnswerInput';
import SingleChoiceInput from './inputs/SingleChoiceInput';
import LongAnswerInput from './inputs/LongAnswerInput';
import MultipleChoiceInput from './inputs/MultipleChoiceInput';
import { IQuestion } from './IQuestion';

interface QuestionProps {
   question: IQuestion;
   onNext: () => void;
}

const Question: React.FC<QuestionProps> = ({ question, onNext }) => {
   const defaultValues = {
      answer: question.type === 'multiple' || question.type === 'checkbox' ? [] : '',
   };

   const {
      control,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm({
      defaultValues: defaultValues,
      mode: 'onChange',
   });

   useEffect(() => {
      reset(defaultValues); // Сбрасываем значения формы при изменении вопроса
   }, [question, reset]);

   const setAnswer = useTestStore((state) => state.setAnswer);

   const onSubmit = (data: any) => {
      setAnswer(question.id.toString(), data.answer);
      onNext();
   };

   const renderInputComponent = () => {
      switch (question.type) {
         case 'short':
            return <ShortAnswerInput question={question} control={control} />;
         case 'multiple':
            return <MultipleChoiceInput question={question} control={control} />;
         case 'long':
            return <LongAnswerInput question={question} control={control} />;
         case 'checkbox':
            return <SingleChoiceInput question={question} control={control} />;
         default:
            return null;
      }
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
         <FormControl component="fieldset" sx={{ mb: 3, width: '100%' }}>
            <FormLabel component="legend" sx={{ mb: 1 }}>
               {question.text}
            </FormLabel>
            {renderInputComponent()}
            {errors.answer && <FormHelperText error>{errors.answer.message}</FormHelperText>}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
               <Button type="submit" variant="contained">
                  Следующий
               </Button>
            </Box>
         </FormControl>
      </form>
   );
};

export default Question;
