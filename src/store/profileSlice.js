import { createSlice } from '@reduxjs/toolkit'
import { profile } from '../data/profile'

const profileSlice = createSlice({
  name: 'profile',
  initialState: profile,
  reducers: {},
})

export const selectProfile = (s) => s.profile
export default profileSlice.reducer
