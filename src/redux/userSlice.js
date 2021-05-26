import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState:{
    user:null,
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    loggout: (state) => {
      state.user = null;
    },  
  },
})

export const { loggin, loggout } = userSlice.actions

//Selectors
export const selectUser = (state) => state.user.user

export default userSlice.reducer