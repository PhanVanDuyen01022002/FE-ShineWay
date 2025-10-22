import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { UserPermissions } from '../types/index.ts';

export interface AuthState {
  permissions: UserPermissions | null;
  emailForgot: string | null;
}

const initialState: AuthState = {
  permissions: null,
  emailForgot: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setPermissions: (state, action: PayloadAction<UserPermissions>) => {
      state.permissions = action.payload;
    },
    logout: (state) => {
      state.permissions = null;
    },
    setEmailForgot: (state, action) => {
      state.emailForgot = action.payload;
    },
  },
});

export const { setPermissions, logout, setEmailForgot } = authSlice.actions;
export default authSlice.reducer;
