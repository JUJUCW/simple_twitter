import { useState } from 'react';
import {Link} from 'react-router-dom'
import AuthInput from '../../components/Auth/AuthInput/AuthInput.jsx'
import AuthPageContainer from '../../components/Auth/AuthPageContainer/AuthPageContainer.jsx'
import Button from '../../components/Button/Button.jsx'

import styles from './SignUpPage.module.scss'

export default function SignUpPage () {
  const [account, setAccount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  return (
    <AuthPageContainer title='建立你的帳號'>
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
      <Button title='註冊' size='large' isAction></Button>
      <div className={styles.link}>
        <Link to="/login">
          <span className={styles.span}>取消</span>
        </Link>
      </div>
    </AuthPageContainer>
  );
}