import { createSlice, createSelector } from '@reduxjs/toolkit'
import { selectProfile } from './profileSlice'

const projectsSlice = createSlice({
  name: 'projects',
  initialState: { category: 'All', query: '' },
  reducers: {
    setCategory(state, { payload }) { state.category = payload },
    setQuery(state, { payload }) { state.query = payload },
  },
})

export const { setCategory, setQuery } = projectsSlice.actions
export const selectFilters = (s) => s.projects

export const selectCategories = createSelector([selectProfile], (p) => [
  'All',
  ...new Set(p.projects.map((x) => x.type)),
])

export const selectFilteredProjects = createSelector(
  [selectProfile, selectFilters],
  (p, { category, query }) => {
    const q = query.trim().toLowerCase()
    return p.projects.filter((x) =>
      (category === 'All' || x.type === category) &&
      (!q || [x.name, x.desc, x.stack, ...x.tags].join(' ').toLowerCase().includes(q))
    )
  }
)
export default projectsSlice.reducer
