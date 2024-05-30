export interface IQuestion {
   id: number;
   text: string;
   type: 'short' | 'multiple' | 'long' | 'checkbox';
   options?: string[];
}
