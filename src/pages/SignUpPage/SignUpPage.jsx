import { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { userSignup } from '../../api/user.js'
import { Toast } from '../../utility/helper.js'
import AuthInput from '../../components/Auth/AuthInput/AuthInput.jsx'
import AuthPageContainer from '../../components/Auth/AuthPageContainer/AuthPageContainer.jsx'
import Button from '../../components/Button/Button.jsx'

import styles from './SignUpPage.module.scss'

export default function SignUpPage () {
  const [ account, setAccount ] = useState("");
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ checkPassword, setCheckPassword ] = useState("");
  const navigate = useNavigate();

  const isValid = useMemo(() => {
    if (!account || account.length > 50) {
        return false;
    }
    if (!name || name.length > 50) {
        return false;
    }
    if (!email || email.length > 100 || !email.includes("@")) {
        return false;
    }
    if (!password || password.length > 50) {
        return false;
    }
    if (!checkPassword || checkPassword.length > 50 ||checkPassword !== password) {
        return false;
    }
    return true;
  }, [account, name, email, password, checkPassword]);

  const handleClick = async () => {
    if (!isValid) {
        Toast.fire({
            title: '請填入正確資訊!',
            icon: 'error',
        });
        return;
    }
    const data = await userSignup({
      name,
      account,
      email,
      password,
      checkPassword,
    });
    // signup success
    if (data==="註冊成功") {
      Toast.fire({
        title: "註冊成功請登入",
        icon: "success",
      });
      navigate("/login");
      return;
    // signup fail
    } 
    
    Toast.fire({
      title: data.response.data.message,
      icon: "error",
    });

  }

  return (
    <AuthPageContainer title='建立你的帳號'>
      <AuthInput label='帳號' value={account} placeholder='請輸入帳號' onChange={(accountInputValue) => setAccount(accountInputValue)}
      notification='字數超出上限!' wordsLimit={50}
      />
      <AuthInput label='名稱' value={name} placeholder='請輸入使用者名稱' onChange={(nameInputValue) => setName(nameInputValue)}
      notification='字數超出上限!' wordsLimit={50}
      />
      <AuthInput label='Email' value={email} placeholder='請輸入Email' onChange={(emailInputValue) => setEmail(emailInputValue)}
      notification='字數超出上限!' wordsLimit={100}
      />
      <AuthInput label='密碼' type='password' value={password} placeholder='請設定密碼' onChange={(passwordInputValue) => setPassword(passwordInputValue)}
      notification='字數超出上限!' wordsLimit={50}
      />
      <AuthInput label='密碼確認' type='password' value={checkPassword} placeholder='請再次輸入密碼' onChange={(checkPasswordInputValue) => setCheckPassword(checkPasswordInputValue)}
      notification='字數超出上限!' wordsLimit={50}
      />
      <Button title='註冊' size='large' isAction onClick={handleClick}></Button>
      <div className={styles.link} >
        <Link to="/login">
          <span className={styles.span}>取消</span>
        </Link>
      </div>
    </AuthPageContainer>
  );
}