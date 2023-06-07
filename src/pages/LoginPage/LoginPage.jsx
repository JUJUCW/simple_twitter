import { useState } from 'react';

import AuthInput from '../../components/Auth/AuthInput/AuthInput.jsx'
import AuthPageContainer from '../../components/Auth/AuthPageContainer/AuthPageContainer.jsx'
import Button from '../../components/Button/Button.jsx'

import styles from './LoginPage.module.scss'

export default function LoginPage () {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AuthPageContainer title='登入 Alphitter'>
        <AuthInput label='帳號' value={account} placeholder='請輸入帳號' onChange={(accountInputValue) => setAccount(accountInputValue)}
        notification='字數超出上限!' wordsLimit={20}
        />
        <AuthInput label='密碼' value={password} placeholder='請輸入密碼' onChange={(passwordInputValue) => setPassword(passwordInputValue)}
        notification='字數超出上限!' wordsLimit={20}
        />
        <Button title='登入' size='large' isAction></Button>
        <div className={styles.link}>
          <span className={styles.span}>註冊</span>
          <span>・</span>
          <span className={styles.span}>後台登入</span>
        </div>
    </AuthPageContainer>
  );
}