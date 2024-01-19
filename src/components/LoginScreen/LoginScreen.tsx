import { useState } from "react"
import styles from "./LoginScreen.module.css"

interface props {
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

export default function LoginScreen({ setLoggedIn }: props) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loggingIn, setLoggingIn] = useState<boolean>(false);

  async function logIn() {
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
              <div>Don't have an account? Create One</div>
            </>
          :
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
                <input
                  className={styles.formInput}
                  type="password"
                  placeholder="Confirm Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <div className={styles.button} onClick={logIn}>Register</div>
              </form>
              <div>Have an account? Log In</div>
            </>
        }
      </div>
    </div>
  )
}
