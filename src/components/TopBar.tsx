import styles from './TopBar.module.css'

interface props {
  setSettingsOpen: React.Dispatch<React.SetStateAction<boolean>>
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

function TopBar({ setSettingsOpen, setLoggedIn }: props) {

  function logOut() {
    document.cookie = "session-id=";
    setLoggedIn(false);
  }

  return (
    <div className={styles.topBar}>
      <div className={styles.container} onClick={logOut}>Log out</div>
      <div className={styles.title}>Gym Tracker</div>
      <div className={styles.settings} onClick={() => setSettingsOpen(true)}>Settings</div>
    </div>
  )
}
  
export default TopBar
