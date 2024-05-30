import { Control } from 'react-hook-form';
import { IQuestion } from '../IQuestion';

export interface IQuestionProps {
   question?: IQuestion;
   control: Control<any>;
}
