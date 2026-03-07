import { useState, useEffect } from 'react'
import styles from '../styles/Nav.module.css'

const NAV_LINKS = [
  ['#about', 'About'],
  ['#projects', 'Projects'],
  ['#contact', 'Contact'],
] as const

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const id = href.replace('#', '')
    const target = document.getElementById(id)
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height'))
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a
          className={styles.brand}
          href="#top"
          onClick={(e) => handleNavClick(e, '#top')}
        >
          Marc Cooperstein
        </a>

        <button
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
        >
          <span className={isMenuOpen ? styles.barOpen : ''} />
          <span className={isMenuOpen ? styles.barOpen : ''} />
          <span className={isMenuOpen ? styles.barOpen : ''} />
        </button>

        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
          {NAV_LINKS.map(([href, label]) => (
            <li key={href}>
              <a href={href} onClick={(e) => handleNavClick(e, href)}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/Marc_Cooperstein_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resumeLink}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
