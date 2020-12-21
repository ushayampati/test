import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import studentInfoReducer from '../features/studentInfo/studentSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    student: studentInfoReducer,
  },
});
