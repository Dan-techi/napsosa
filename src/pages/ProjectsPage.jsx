import styles from './ProjectsPage.module.css'

export default function ProjectsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <h1>Projects</h1>
        <p>Initiatives &amp; Community Work</p>
      </div>
      <div className={styles.empty}>
        <i className="fa fa-folder-open" />
        <h2>No Projects Yet</h2>
        <p>We are working on exciting initiatives. Check back soon.</p>
      </div>
    </main>
  )
}
