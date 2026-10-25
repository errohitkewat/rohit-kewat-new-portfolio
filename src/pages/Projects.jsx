import { useSelector } from 'react-redux'
import { selectFilteredProjects } from '../store/projectsSlice'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const items = useSelector(selectFilteredProjects)
  return (
    <section>
      <div className="grid grid-cols-2 gap-3">
        {items.map((x) => <ProjectCard key={x.id} project={x} />)}
      </div>
    </section>
  )
}
