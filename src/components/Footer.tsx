import styles from '../styles/Footer.module.css'

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/mcooperstein' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mcooperstein1990' },
]

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.tagline}>Get in touch</p>
        <a href="mailto:mcooperstein@gmail.com" className={styles.email}>
          mcooperstein@gmail.com
        </a>
        <nav className={styles.socialLinks} aria-label="Social links">
          {SOCIAL_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              {label}
            </a>
          ))}
        </nav>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Marc Cooperstein
        </p>
      </div>
    </footer>
  )
}
