import { useState } from 'react';

import AuthInput from '../../components/AuthInput/AuthInput.jsx'
import logo from '../../assets/icons/logo.png'

import styles from './AdminLoginPage.module.scss'

export default function AdminLoginPage () {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  return (
      <div className={styles.container}>
        <img className={styles.logo} src={logo} alt='AC logo' />
        <h3 className={styles.title}>後台登入</h3>
        <div className={styles.AuthInputContainer}>
          <AuthInput label='帳號' value={account} placeholder='請輸入帳號' onChange={(accountInputValue) => setAccount(accountInputValue)}
          notification='字數超出上限!' wordsLimit={20}
          />
          <AuthInput label='密碼' type='password' value={password} placeholder='請輸入密碼' onChange={(passwordInputValue) => setPassword(passwordInputValue)}
          notification='字數超出上限!' wordsLimit={20}
          />
          <button className={styles.button}>登入</button>
          <div className={styles.link}>
            <span className={styles.span}>前台登入</span>
          </div>
        </div>
      </div>
  );
}