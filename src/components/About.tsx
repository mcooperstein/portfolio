import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from '../styles/About.module.css'

export default function About() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section id="about" className={`${styles.about} reveal`} ref={ref}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img
            src="/images/headshot-new.png"
            alt="Marc Cooperstein"
            className={styles.headshot}
          />
        </div>

        <div className={styles.bio}>
          <h2>About Me</h2>
          <p>
            I'm a Software Engineer at Yahoo, where I work on Search products
            that reach millions of users every day. My focus is on building
            fast, accessible web experiences with modern JavaScript and React.
          </p>
          <p>
            Before Yahoo, I taught kids how to code at theCoderSchool and did
            freelance web development around the Bay Area. I love the craft of
            turning complex problems into clean, simple interfaces.
          </p>
          <a href="/oldportfolio" className={styles.oldLink}>
            View my earlier projects →
          </a>
        </div>
      </div>
    </section>
  )
}
