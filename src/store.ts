import { create } from 'zustand';

interface TestState {
   currentStep: number;
   answers: Record<string, any>;
   setStep: (step: number) => void;
   setAnswer: (questionId: string, answer: any) => void;
   loadState: () => void;
   saveState: () => void;
   remainingTime: number;
   setRemainingTime: (time: number) => void;
   clearRemainingTime: () => void;
}

export const useTestStore = create<TestState>((set) => ({
   currentStep: 0,
   answers: {},
   setStep: (step) => set({ currentStep: step }),
   setAnswer: (questionId, answer) =>
      set((state) => ({
         answers: { ...state.answers, [questionId]: answer },
      })),
   loadState: () => {
      const savedState = JSON.parse(localStorage.getItem('testState') || '{}');
      set(savedState);
   },
   saveState: () => {
      set((state) => {
         localStorage.setItem('testState', JSON.stringify(state));
         localStorage.setItem('remainingTime', state.remainingTime.toString());
         return state;
      });
   },
   remainingTime: 0,
   setRemainingTime: (time) => set({ remainingTime: time }),
   clearRemainingTime: () => {
      localStorage.removeItem('remainingTime');
      set({ remainingTime: 0 });
   },
}));

// Load state on app start
useTestStore.getState().loadState();
