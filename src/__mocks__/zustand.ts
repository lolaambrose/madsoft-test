import { createStore } from 'zustand';

const storeResetFns = new Set();

const createMockStore = (createState: any) => {
   const store = createStore(createState);
   const initialState = store.getState();
   storeResetFns.add(() => store.setState(initialState, true));
   return store;
};

afterEach(() => {
   storeResetFns.forEach((resetFn: any) => resetFn());
});

export { createMockStore as create };
