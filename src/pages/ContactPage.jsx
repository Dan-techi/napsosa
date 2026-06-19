import styles from './ContactPage.module.css'

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <h1>Contact Us</h1>
        <p>Get in Touch with NAPOSA</p>
      </div>
      <div className={styles.content}>
        <div className={styles.infoCards}>
          <div className={styles.card}>
            <i className="fa fa-envelope" />
            <h3>Email</h3>
            <a href="mailto:info@naposa.org">info@naposa.org</a>
          </div>
          <div className={styles.card}>
            <i className="fa fa-phone" />
            <h3>Phone</h3>
            <a href="tel:+256778986345">+256 778 986345</a>
          </div>
          <div className={styles.card}>
            <i className="fa fa-location-dot" />
            <h3>Location</h3>
            <span>Nabingoola Town Council, Mubende District, Uganda</span>
          </div>
        </div>

        <div className={styles.form}>
          <h2>Send Us a Message</h2>
          <form onSubmit={e => e.preventDefault()}>
            <div className={styles.row}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
            </div>
            <input type="text" placeholder="Subject" required />
            <textarea rows="5" placeholder="Your Message" required />
            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </main>
  )
}
