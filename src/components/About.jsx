import styles from './About.module.css'

const pillars = [
  { icon: 'fa-people-group', title: 'Lifelong Fellowship', desc: 'Uniting all former students and fostering a strong sense of belonging.' },
  { icon: 'fa-school', title: 'Support School Development', desc: 'Mobilising resources to improve infrastructure, academics and welfare.' },
  { icon: 'fa-graduation-cap', title: 'Mentorship & Guidance', desc: 'Providing mentorship, career guidance and scholarship opportunities.' },
  { icon: 'fa-handshake', title: 'Networking & Service', desc: 'Networking for professional growth and engaging in community service.' },
]

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.left}>
        <h3>ABOUT NAPSSOSA</h3>
        <p>
          NAPSSOSA brings together Old Girls and Old Boys of Nabingoola Public
          School to foster lifelong fellowship, support school
          development, mentor students, and promote the values that define our
          alma mater.
        </p>
        <a href="/about" className={styles.btn}>READ MORE ABOUT US</a>
      </div>

      <div className={styles.pillars}>
        {pillars.map(p => (
          <div key={p.title} className={styles.card}>
            <i className={`fa ${p.icon}`} />
            <h4>{p.title}</h4>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
