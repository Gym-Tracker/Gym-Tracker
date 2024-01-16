import { useState } from "react"
import styles from "./LoginScreen.module.css"

interface props {
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

export default function LoginScreen({ setLoggedIn }: props) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.title}>Gym Tracker</div>
        <form className={styles.form}>
          <input
            className={styles.formInput}
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            className={styles.formInput}
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <div className={styles.button} onClick={() => setLoggedIn(true)}>Log In</div>
        </form>
        <div>Don't have an account? Create One</div>
      </div>
    </div>
  )
}
