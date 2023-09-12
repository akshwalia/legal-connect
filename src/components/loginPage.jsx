import styles from '../styles/loginPage.module.css'
import xLogo from '../assets/images/x.png'
import googleLogo from '../assets/images/google.png'
import facebookLogo from '../assets/images/facebook.png'
import logo from '../assets/images/logo_nobg.png'
import { Link } from 'react-router-dom'

export default function LoginPage() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.leftcontainer}>
                <Link to='/'>
                    <div className={styles.logo}>
                        <img src={logo} alt="" />
                        <div>LegalConnect</div>
                    </div>
                </Link>
                <div className={styles.welcome}>
                    <h1 className={styles.welcometext}>Welcome Back!</h1>
                    <p>Sign in to continue</p>
                </div>
            </div>
            <div className={styles.rightcontainer}>
                <h2 className={styles.heading}>Log In</h2>
                <form className={styles.form}>
                    <div className={styles.inputbox}>
                        <label htmlFor="">Username: </label>
                        <input type="text" name="username" required="" />
                    </div>
                    <div className={styles.inputbox}>
                        <label htmlFor="">Password: </label>
                        <input type="password" name="password" required="" />
                    </div>
                    <button type="submit" className={styles.button}>
                        Continue{" "}
                        <svg className={styles.chevron} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <title>chevron-right</title>
                            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                        </svg>
                    </button>
                    <Link to='/customerSignUp'>Don't have an account?</Link>
                </form>
                <div className={styles.middletext}>Or Sign In with</div>
                <div className={styles.socials}>
                    <a id={styles.google} href="#">
                        <img src={googleLogo} alt="" />
                        Sign In with Google
                    </a>
                    <a id={styles.facebook} href="#">
                        <img src={facebookLogo} alt="" />
                        Sign In with Facebook
                    </a>
                    <a id={styles.x} href="#">
                        <img src={xLogo} alt="" />
                        Sign in with X
                    </a>
                </div>
            </div>
        </div>

    )
}