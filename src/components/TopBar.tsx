import styles from './TopBar.module.css'

function TopBar() {
    return (
      <div className={styles.topBar}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>Gym Tracker</div>
        </div>
      </div>
    )
  }
  
export default TopBar
