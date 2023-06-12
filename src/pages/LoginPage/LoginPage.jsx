import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import AuthInput from '../../components/Auth/AuthInput/AuthInput.jsx'
import AuthPageContainer from '../../components/Auth/AuthPageContainer/AuthPageContainer.jsx'
import Button from '../../components/Button/Button.jsx'
import {Toast} from '../../utility/helper.js'
import {userLogin} from '../../api/user.js'

import styles from './LoginPage.module.scss'

export default function LoginPage () {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClick = async () => {
    if (account.trim().length === 0) {
      Toast.fire({
        title: "請輸入帳號!",
        icon: "error",
      });
      return;
    }
    if (password.trim().length === 0) {
      Toast.fire({
        title: "請輸入密碼!",
        icon: "error",
      });
      return;
    }
    const data = await userLogin({
      account,
      password,
    });
    // login success
    if (data.success) {
      localStorage.setItem("token", data.token);
      Toast.fire({
        title: "登入成功",
        icon: "success",
      });
      navigate("/main");
      return;
    // login fail
    } 
    Toast.fire({
        title: "帳號不存在",
        icon: "error",
      });
  }

  return (
    <AuthPageContainer title='登入 Alphitter'>
        <AuthInput label='帳號' value={account} placeholder='請輸入帳號' onChange={(accountInputValue) => setAccount(accountInputValue)}
        notification='字數超出上限!' wordsLimit={20}
        />
        <AuthInput label='密碼' value={password} placeholder='請輸入密碼' onChange={(passwordInputValue) => setPassword(passwordInputValue)}
        notification='字數超出上限!' wordsLimit={20} type='password'
        />
        <Button title='登入' size='large' isAction onClick={handleClick}></Button>
        <div className={styles.link}>
          <Link to="/signup">
            <span className={styles.span}>註冊</span>
          </Link>
          <span>・</span>
          <Link to="/admin/login">
            <span className={styles.span}>後台登入</span>
          </Link>
        </div>
    </AuthPageContainer>
  );
}