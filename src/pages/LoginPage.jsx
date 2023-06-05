import { useState } from 'react';

import AuthInput from '../components/AuthInput/AuthInput.jsx'
import logo from '../assets/icons/logo.png'

export default function LoginPage () {
  const [account, setAccount] = useState("");

  return (
      <div>
        <img src={logo} alt='AC logo' />
        <h1>登入 Alphitter</h1>
        <AuthInput label='帳號' value={account} placeholder='請輸入帳號' onChange={(accountInputValue) => setAccount(accountInputValue)}
        notification='字數超出上限!'
        />
      </div>
  );
}