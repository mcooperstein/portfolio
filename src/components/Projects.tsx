import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from '../styles/Projects.module.css'
import type { Project } from '../types'

// Update titles, descriptions, and liveUrl values once Yahoo Search project links are ready.
const PROJECTS: Project[] = [
  {
    id: 'yahoo-entertainment',
    title: 'Yahoo Search — Entertainment',
    description: '"What to watch" and Oscars dynamic discovery experiences',
    images: ['/images/project-entertainment.png', '/images/project-entertainment2.png', '/images/project-entertainment3.png'],
    tags: ['JavaScript', 'State managament', 'Accessibility', 'AJAX'],
    liveUrl: 'https://search.yahoo.com/search?p=what+to+watch',
    sourceUrl: 'https://search.yahoo.com/search?p=what+to+watch',
  },
  {
    id: 'yahoo-sports',
    title: 'Yahoo Search — Sports',
    description: 'Sports experience for NFL, NBA, NHL, MLB, Soccer, Golf, Tennis, and motorsports, as well as tentpole sporting events like World Cup and Olympics',
    images: ['/images/project-sports.png', '/images/project-sports2.png', '/images/project-sports3.png'],
    tags: ['JavaScript', 'graphQL', 'Flexbox'],
    liveUrl: 'https://search.yahoo.com/search?p=nba',
    sourceUrl: 'https://search.yahoo.com/search?p=nba',
  },
  {
    id: 'yahoo-movies',
    title: 'Yahoo Search — Movies',
    description: 'Movie Browse experience with enhanced showtime module',
    images: ['/images/project-movies.png', '/images/project-movies2.png', '/images/project-movies3.png'],
    tags: ['React', 'JavaScript', 'Fandango API'],
    liveUrl: 'https://search.yahoo.com/search?p=titanic+movie',
    sourceUrl: 'https://search.yahoo.com/search?p=titanic+movie',
  },
  {
    id: 'yahoo-tv',
    title: 'Yahoo Search — TV Shows',
    description: 'Refreshed TV show experience for shows and specific episodes',
    images: ['/images/project-tv.png', '/images/project-tv2.png', '/images/project-tv3.png'],
    tags: ['React', 'JavaScript', 'A/B Testing'],
    liveUrl: 'https://search.yahoo.com/search?p=stranger+things',
    sourceUrl: 'https://search.yahoo.com/search?p=stranger+things',
  },
  {
    id: 'yahoo-finance',
    title: 'Yahoo Search — Finance',
    description: 'Worked on stock chart and company financial modules',
    images: ['/images/project-finance.png', '/images/project-finance2.png', '/images/project-finance3.png'],
    tags: ['React', 'Charting library', 'CSS animations'],
    liveUrl: 'https://search.yahoo.com/search?p=apple+stock',
    sourceUrl: 'https://search.yahoo.com/search?p=apple+stock',
  },
  {
    id: 'yahoo-people',
    title: 'Yahoo Search — People',
    description: 'Refreshed people experience using React-based internal design system (UDS)',
    images: ['/images/project-people.png', '/images/project-people2.png', '/images/project-people3.png'],
    tags: ['React', 'Design systems', 'tailwind CSS'],
    liveUrl: 'https://search.yahoo.com/search;_ylt=AwrO6ba4kqxpsakSfz9DDWVH;_ylc=X1MDMTE5NzgwNDg2NwRfcgMyBGZyAwRmcjIDcDpzLHY6c2ZwLG06c2ItdG9wBGdwcmlkA2NPbTdodEgwUjZpOWxVRm1lczA0VUEEbl9yc2x0AzAEbl9zdWdnAzEwBG9yaWdpbgNzZWFyY2gueWFob28uY29tBHBvcwMwBHBxc3RyAwRwcXN0cmwDMARxc3RybAMxMgRxdWVyeQN0YXlsb3IlMjBzd2lmdAR0X3N0bXADMTc3MjkxNzQzNw--?p=taylor+swift&fr=sfp&fr2=p%3As%2Cv%3Asfp%2Cm%3Asb-top&iscqry=',
    sourceUrl: 'https://search.yahoo.com/search?p=taylor+swift',
  },
]

function ProjectCard({ project }: { project: Project }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleMouseEnter = () => {
    if (project.images.length <= 1) return
    setCurrentIndex(prev => (prev + 1) % project.images.length)
  }

  return (
    <article className={styles.card}>
      <div
        className={styles.imageContainer}
        onMouseEnter={handleMouseEnter}
      >
        {project.images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${project.title} screenshot ${i + 1}`}
            className={`${styles.cardImage} ${i === currentIndex ? styles.cardImageActive : ''}`}
            loading="lazy"
          />
        ))}
        {project.images.length > 1 && (
          <div className={styles.imageDots}>
            {project.images.map((_, i) => (
              <span
                key={i}
                className={`${styles.dot} ${i === currentIndex ? styles.dotActive : ''}`}
              />
            ))}
          </div>
        )}
      </div>
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
              View experience on Yahoo Search ↗
            </a>
          ) : (
            <span className={styles.linkPending}>Link coming soon</span>
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
