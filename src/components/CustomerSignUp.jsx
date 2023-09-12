import styles from '../styles/loginPage.module.css';
import { Link } from 'react-router-dom';
import xLogo from '../assets/images/x.png'
import googleLogo from '../assets/images/google.png'
import facebookLogo from '../assets/images/facebook.png'
import logo from '../assets/images/logo_nobg.png'
import { useState } from 'react';
import customerstyles from '../styles/customerSignUp.module.css';

export default function CustomerSignUp() {
    const [showMismatch, setShowMismatch] = useState(false);

    const checkPasswordMatch = () => {
        const password = document.getElementById("password");
        const confpassword = document.getElementById("confpassword");
        if(password.value === "" || confpassword.value === "") {
            return;
        } 
        if (password.value !== confpassword.value) {
            setShowMismatch(true);
        } else {
            setShowMismatch(false);
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={customerstyles.leftcontainer} > 
                <Link to='/'>
                    <div className={styles.logo}>
                        <img src={logo} alt="" />
                        <div>LegalConnect</div>
                    </div>
                </Link>
                <div className={styles.welcome}>
                    <h1 className={styles.welcometext}>Welcome!</h1>
                    <p>Sign Up to get started</p>
                </div>
            </div>
            <div className={styles.rightcontainer}>
                <h2>Sign Up</h2>
                <form className={styles.form}>
                    <div className={styles.inputbox}>
                        <label htmlFor="name">Name: </label>
                        <input type="text" name="name" id="name" required />
                    </div>
                    <div className={styles.inputbox}>
                        <label htmlFor="">Date of Birth: </label>
                        <input type="date" name="DOB" id="DOB" required />
                    </div>
                    <div className={styles.inputbox}>
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" id="email" required/>
                    </div>
                    <div className={styles.inputbox}>
                        <label htmlFor="password">Password: </label>
                        <input type="password" name="password" id="password" onChange={checkPasswordMatch}required/>
                    </div>
                    <div className={styles.inputbox}>
                        <label htmlFor="confpassword">Confirm Password: </label>
                        <input
                            type="password"
                            name="confpassword"
                            id="confpassword"
                            onChange={checkPasswordMatch}
                            required
                        />
                        {showMismatch && <p className={styles.mismatch}>* Passwords do not match</p>}
                    </div>
                    <button type="submit" className={styles.button}>
                        Register{" "}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={styles.chevron}>
                            <title>chevron-right</title>
                            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                        </svg>
                    </button>
                    <div>
                        Already a customer? <Link to='/login'>Log In</Link>
                    </div>
                </form>
                <div className={styles.middletext}>Or Sign Up with</div>
                <div className={styles.socials}>
                    <a id={styles.google} href="#">
                        <img src={googleLogo} alt="" />
                        Sign Up with Google
                    </a>
                    <a id={styles.facebook} href="#">
                        <img src={facebookLogo} alt="" />
                        Sign Up with Facebook
                    </a>
                    <a id={styles.x} href="#">
                        <img src={xLogo} alt="" />
                        Sign Up with X
                    </a>
                </div>
            </div>
        </div>

    )
};