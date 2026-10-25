import { createSlice } from '@reduxjs/toolkit'

export const THEME_KEY = 'portfolio-theme'
function initial() {
  try {
    const saved = localStorage.getItem(THEME_KEY)
    if (saved === 'white' || saved === 'dark') return saved
    if (saved === 'smokey') return 'dark'
  } catch (e) { /* storage unavailable */ }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'white'
}

const themeSlice = createSlice({
  name: 'theme',
  initialState: { mode: initial() },
  reducers: {
    toggleTheme(state) { state.mode = state.mode === 'white' ? 'dark' : 'white' },
    setTheme(state, { payload }) { state.mode = payload },
  },
})

export const { toggleTheme, setTheme } = themeSlice.actions
export const selectTheme = (s) => s.theme.mode
export default themeSlice.reducer
