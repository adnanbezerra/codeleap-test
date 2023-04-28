import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './usernameReducer';

const usernameStore = configureStore({
  reducer: rootReducer,
});

export default usernameStore;
