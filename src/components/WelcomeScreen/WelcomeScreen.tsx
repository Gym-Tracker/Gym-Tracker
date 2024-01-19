import { useState } from "react"
import styles from "./WelcomeScreen.module.css"
import LoginScreen from "./LoginScreen"
import RegisterScreen from "./RegisterScreen"


interface props {
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

export default function WelcomeScreen({ setLoggedIn }: props) {
  const [registering, setRegistering] = useState<boolean>(true);

  return (
    <div className={styles.container}>
    <div className={styles.formContainer}>
      <div className={styles.title}>Gym Tracker</div>
      { registering 
        ? <RegisterScreen setLoggedIn={setLoggedIn} setRegistering={setRegistering}/> 
        : <LoginScreen setLoggedIn={setLoggedIn} setRegistering={setRegistering}/>
      }
    </div>
  </div>

  )
}
