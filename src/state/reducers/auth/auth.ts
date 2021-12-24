import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isSignedIn: boolean;
}

const initialState: AuthState = {
  isSignedIn: false,
};

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsSignedIn: (state, action: PayloadAction<boolean>) => {
      console.log(action.payload);
    },
  },
});

export const {} = slice.actions;

export default slice.reducer;
