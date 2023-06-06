import { useState } from 'react';

import Header from '../../components/Header/Header.jsx'
import AuthInput from '../../components/AuthInput/AuthInput.jsx'
import Button from '../../components/Button/Button.jsx'
import styles from './SettingPage.module.scss'

export default function SettingPage () {
  const [account, setAccount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  return (
    <div className={styles.adminContainer}>
      <div className={styles.navBar}>NavBar</div>
      <div className={styles.middleContainer}>
        <Header title='帳戶設定' tweetCount={25}/>
        <div className={styles.inputContainer}>
          <AuthInput label='帳號' value={account} placeholder='請輸入帳號' onChange={(accountInputValue) => setAccount(accountInputValue)}
          notification='字數超出上限!' wordsLimit={20}
          />
          <AuthInput label='名稱' value={name} placeholder='請輸入使用者名稱' onChange={(nameInputValue) => setName(nameInputValue)}
          notification='字數超出上限!' wordsLimit={20}
          />
          <AuthInput label='Email' value={email} placeholder='請輸入Email' onChange={(emailInputValue) => setEmail(emailInputValue)}
          notification='字數超出上限!' wordsLimit={20}
          />
          <AuthInput label='密碼' type='password' value={password} placeholder='請設定密碼' onChange={(passwordInputValue) => setPassword(passwordInputValue)}
          notification='字數超出上限!' wordsLimit={20}
          />
          <AuthInput label='密碼確認' type='password' value={checkPassword} placeholder='請再次輸入密碼' onChange={(checkPasswordInputValue) => setCheckPassword(checkPasswordInputValue)}
          notification='字數超出上限!' wordsLimit={20}
          />
          <Button title='儲存' size='small' isAction></Button>
        </div>
      </div>
    </div>
  )
}