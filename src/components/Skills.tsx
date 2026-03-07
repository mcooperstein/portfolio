import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from '../styles/Skills.module.css'

const SKILLS = [
  'JavaScript',
  'React',
  'TypeScript',
  'graphQL',
  'HandlebarsJS',
  'Node.js',
  'Express',
  'AJAX',
  'HTML / CSS',
  'CSS Grid',
  'Flexbox',
  'CI/CD',
  'Git / GitHub',
  'A/B testing',
  'Vite',
  'Webpack',
  'Jest',
  'PHP',
]

export default function Skills() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section id="skills" className={`${styles.skills} reveal`} ref={ref}>
      <div className={styles.container}>
        <h2>Skills</h2>
        <div className={styles.grid}>
          {SKILLS.map((skill) => (
            <span key={skill} className={styles.badge}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
