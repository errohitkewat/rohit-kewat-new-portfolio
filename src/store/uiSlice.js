import { createSlice } from '@reduxjs/toolkit'

// rect is a plain object { top, left, width, height } so state stays serializable
const uiSlice = createSlice({
  name: 'ui',
  initialState: { viewer: { open: false, rect: null } },
  reducers: {
    openViewer(state, { payload }) { state.viewer = { open: true, rect: payload } },
    closeViewer(state) { state.viewer = { open: false, rect: null } },
  },
})

export const { openViewer, closeViewer } = uiSlice.actions
export const selectViewer = (s) => s.ui.viewer
export default uiSlice.reducer
