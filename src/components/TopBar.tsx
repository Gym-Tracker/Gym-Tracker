import styles from './TopBar.module.css'

interface props {
  setSettingsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function TopBar({ setSettingsOpen }: props) {
    return (
      <div className={styles.topBar}>
        <div className={styles.container}>Account</div>
        <div className={styles.title}>Gym Tracker</div>
        <div className={styles.settings} onClick={() => setSettingsOpen(true)}>Settings</div>
      </div>
    )
  }
  
export default TopBar
