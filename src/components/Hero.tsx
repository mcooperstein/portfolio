import styles from '../styles/Hero.module.css'

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="top" className={styles.hero}>
      {/* Replace this div with a background-image once the new hero photo is ready */}
      <div className={styles.heroBg} aria-hidden="true" />

      <div className={styles.heroContent}>
        <p className={styles.eyebrow}>Software Engineer · Yahoo Search</p>
        <h1 className={styles.headline}>
          Hi, I'm Marc —<br />
          I build elegant user experiences<br />
          at scale.
        </h1>
        <p className={styles.subheadline}>
          Based in the San Francisco Bay Area. Focused on fast, accessible, user-first web.
        </p>
        <div className={styles.ctaGroup}>
          <a
            href="#projects"
            className={styles.ctaPrimary}
            onClick={(e) => handleScroll(e, 'projects')}
          >
            See My Work
          </a>
          <a
            href="#about"
            className={styles.ctaSecondary}
            onClick={(e) => handleScroll(e, 'about')}
          >
            About Me
          </a>
        </div>
      </div>
    </section>
  )
}
