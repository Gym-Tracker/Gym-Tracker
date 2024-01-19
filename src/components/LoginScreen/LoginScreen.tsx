import { useState } from "react"
import styles from "./LoginScreen.module.css"

interface props {
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

export default function LoginScreen({ setLoggedIn }: props) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [newEmail, setNewEmail] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");

  const [loggingIn, setLoggingIn] = useState<boolean>(false);

  async function logIn() {
    if (email.length == 0 || password.length == 0) return

    const response = await fetch(import.meta.env.VITE_SERVER_URL + "/login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });

    const loggenIn: boolean = await response.json();

    setLoggedIn(loggenIn);
  }

  async function register() {
    if (email.length == 0 || password.length == 0) return

    fetch(import.meta.env.VITE_SERVER_URL + "/register", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: newEmail,
        password: newPassword
      })
    });

    fetch(import.meta.env.VITE_SERVER_URL + "/login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: newEmail,
        password: newPassword
      })
    });

    setLoggedIn(true);
  }

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.title}>Gym Tracker</div>
        {
          loggingIn ?
            <>
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
                <div className={styles.button} onClick={logIn}>Log In</div>
              </form>
              <div onClick={() => setLoggingIn(false)}>Don't have an account? Create One</div>
            </>
          :
            <>
              <form className={styles.form}>
                <input
                  className={styles.formInput}
                  placeholder="Email"
                  value={newEmail}
                  onChange={e => setNewEmail(e.target.value)}
                />
                <input
                  className={styles.formInput}
                  type="password"
                  placeholder="Password"
                  value={newPassword}
                  onChange={e => setNewPassword(e.target.value)}
                />
                <input
                  className={styles.formInput}
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmNewPassword}
                  onChange={e => setConfirmNewPassword(e.target.value)}
                />
                <div className={styles.button} onClick={register}>Register</div>
              </form>
              <div onClick={() => setLoggingIn(true)}>Have an account? Log In</div>
            </>
        }
      </div>
    </div>
  )
}
