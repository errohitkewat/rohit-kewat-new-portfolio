import { configureStore } from '@reduxjs/toolkit'
import profile from './profileSlice'
import theme, { THEME_KEY } from './themeSlice'
import projects from './projectsSlice'
import ui from './uiSlice'

export const store = configureStore({ reducer: { profile, theme, projects, ui } })

store.subscribe(() => {
  try { localStorage.setItem(THEME_KEY, store.getState().theme.mode) } catch (e) { /* ignore */ }
})
