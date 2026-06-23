import { useState, useEffect } from 'react'
import styles from './AlumniPage.module.css'

const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQWQw2kOPyYfMdVInl0u-SgC4EZnneidxvwBNExTflPyjijpd66rYSeYVB1FyxM_Dign1SqzkQ70nNi/pub?output=csv'

function parseCSV(text) {
  const [headerLine, ...rows] = text.trim().split('\n')
  const headers = headerLine.split(',').map(h => h.trim().replace(/^"|"$/g, ''))
  return rows.map(row => {
    const values = row.match(/(".*?"|[^,]+|(?<=,)(?=,)|^(?=,)|(?<=,)$)/g) || []
    const obj = {}
    headers.forEach((h, i) => {
      obj[h] = (values[i] || '').trim().replace(/^"|"$/g, '')
    })
    return obj
  })
}

export default function AlumniPage() {
  const [alumni, setAlumni] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(CSV_URL)
      .then(r => r.text())
      .then(text => { setAlumni(parseCSV(text)); setLoading(false) })
      .catch(() => { setError(true); setLoading(false) })
  }, [])

  const filtered = alumni.filter(a =>
    Object.values(a).some(v => v.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Alumni</h1>
          <p>Our Former Students Community</p>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.topBar}>
          <div className={styles.count}>
            {!loading && !error && <span><strong>{alumni.length}</strong> registered alumni</span>}
          </div>
          <input
            className={styles.search}
            type="text"
            placeholder="Search by name, year, location..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <a href="https://forms.gle/7DyeoTazPqgtEZwcA" target="_blank" rel="noreferrer" className={styles.btn}>
            + Register as OB / OG
          </a>
        </div>

        {loading && <p className={styles.msg}>Loading alumni data...</p>}
        {error && <p className={styles.msg}>Failed to load data. Please try again later.</p>}

        {!loading && !error && filtered.length === 0 && (
          <p className={styles.msg}>No alumni found matching your search.</p>
        )}

        {!loading && !error && filtered.length > 0 && (
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  {Object.keys(alumni[0]).map(h => <th key={h}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {filtered.map((a, i) => (
                  <tr key={i}>
                    {Object.values(a).map((v, j) => <td key={j}>{v}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  )
}
