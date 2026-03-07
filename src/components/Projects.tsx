import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from '../styles/Projects.module.css'
import type { Project } from '../types'

// Update titles, descriptions, and liveUrl values once Yahoo Search project links are ready.
const PROJECTS: Project[] = [
  {
    id: 'yahoo-entertainment',
    title: 'Yahoo Search — Entertainment',
    description: 'Description and link to be added. Placeholder for Yahoo Search experience.',
    image: '/images/project-entertainment.png',
    tags: ['React', 'TypeScript', 'Node.js'],
    liveUrl: null,
    sourceUrl: null,
  },
  {
    id: 'yahoo-sports-team',
    title: 'Yahoo Search — Sports Team Pages',
    description: 'Description and link to be added. Placeholder for Yahoo Search experience.',
    image: '/images/project-sports-team.png',
    tags: ['JavaScript', 'CSS', 'Performance'],
    liveUrl: null,
    sourceUrl: null,
  },
  {
    id: 'yahoo-sports-standings',
    title: 'Yahoo Search — Sports Standings',
    description: 'Description and link to be added. Placeholder for Yahoo Search experience.',
    image: '/images/project-sports-standings.png',
    tags: ['React', 'A/B Testing', 'Accessibility'],
    liveUrl: null,
    sourceUrl: null,
  },
  {
    id: 'yahoo-movies',
    title: 'Yahoo Search — Movies',
    description: 'Description and link to be added. Placeholder for Yahoo Search experience.',
    image: '/images/project-movies.png',
    tags: ['React', 'TypeScript', 'API Integration'],
    liveUrl: null,
    sourceUrl: null,
  },
  {
    id: 'yahoo-tv',
    title: 'Yahoo Search — TV Shows',
    description: 'Description and link to be added. Placeholder for Yahoo Search experience.',
    image: '/images/project-tv.png',
    tags: ['JavaScript', 'CSS', 'React'],
    liveUrl: null,
    sourceUrl: null,
  },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={styles.card}>
      <img
        src={project.image}
        alt={project.title}
        className={styles.cardImage}
        loading="lazy"
      />
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDescription}>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.cardLinks}>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkPrimary}
            >
              View Project ↗
            </a>
          ) : (
            <span className={styles.linkPending}>Link coming soon</span>
          )}
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkSecondary}
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section id="projects" className={`${styles.projects} reveal`} ref={ref}>
      <div className={styles.container}>
        <h2>Projects</h2>
        <p className={styles.subtitle}>Work at Yahoo Search</p>
        <div className={styles.grid}>
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
