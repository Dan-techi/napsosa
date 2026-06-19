import styles from './StatsBar.module.css'

const stats = [
  { icon: 'fa-calendar', label: 'Established', value: '1998' },
  { icon: 'fa-location-dot', label: 'Location', value: 'Nabingoola Town Council, Mubende District' },
  { icon: 'fa-book-open', label: 'Levels', value: "O' Level & A' Level" },
  { icon: 'fa-user-tie', label: 'Current Head Teacher', value: 'Mrs. Natabi Idah' },
  { icon: 'fa-id-card', label: 'UNEB Centre No.', value: 'U2542' },
]

export default function StatsBar() {
  return (
    <div className={styles.bar}>
      {stats.map(s => (
        <div key={s.label} className={styles.item}>
          <i className={`fa ${s.icon}`} />
          <div>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
