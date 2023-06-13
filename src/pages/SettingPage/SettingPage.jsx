import { useState, useEffect } from 'react';

import Header from '../../components/Header/Header.jsx'
import AuthInput from '../../components/Auth/AuthInput/AuthInput.jsx'
import Button from '../../components/Button/Button.jsx'
import NavBarContainer from '../../components/Navbar/NavBarContainer/NavBarContainer.jsx'
import { setUserAccount } from '../../api/user.js'
import { Toast } from '../../utility/helper.js'
import styles from './SettingPage.module.scss'
import { useAuth } from '../../context/AuthContext.jsx'
import { useNavigate } from 'react-router-dom';

export default function SettingPage () {
  const { currentUser, isAuthenticated } = useAuth();
  const [account, setAccount] = useState(currentUser.account);
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const navigate = useNavigate();
  

  const handleClick = async () => {
    if (account.trim().length === 0) {
      Toast.fire({
        title: "請輸入帳號!",
        icon: "error",
      });
      return;
    }
    if (name.trim().length === 0) {
      Toast.fire({
        title: "請輸入名稱!",
        icon: "error",
      });
      return;
    }
    if (email.trim().length === 0) {
      Toast.fire({
        title: "請輸入email!",
        icon: "error",
      });
      return;
    }
    if (checkPassword !== password) {
      Toast.fire({
        title: "密碼與確認密碼不一致!",
        icon: "error",
      });
      return;
    }
    if (!email.includes("@")) {
      Toast.fire({
        title: "email格式不正確!",
        icon: "error",
      });
      return;
    }
    const data = await setUserAccount({
      name,
      account,
      email,
      password,
      checkPassword,
      userId: currentUser.id,
    });
    
    if (data.status==="error") {
      Toast.fire({
        title: data.message,
        icon: "error",
      });
      return;
    } 
    Toast.fire({
        title: "修改成功",
        icon: "success",
      });
  }

    useEffect(() => {
        if (!isAuthenticated) {
        navigate('/login');
        }
    }, [navigate, isAuthenticated]);


  return (
    <div className={styles.adminContainer}>
      <NavBarContainer role='user'page='setting'/>
      <div className={styles.middleContainer}>
        <Header title='帳戶設定'/>
        <div className={styles.inputContainer}>
          {account &&<AuthInput label='帳號' value={account} placeholder='請輸入帳號' onChange={(accountInputValue) => setAccount(accountInputValue)}
          notification='字數超出上限!' wordsLimit={20}/>}
          {name && <AuthInput label='名稱' value={name} placeholder='請輸入使用者名稱' onChange={(nameInputValue) => setName(nameInputValue)}
          notification='字數超出上限!' wordsLimit={20}/>}
          {email && <AuthInput label='Email' value={email} placeholder='請輸入Email' onChange={(emailInputValue) => setEmail(emailInputValue)}
          notification='字數超出上限!' wordsLimit={20}/>}
          
          <AuthInput label='密碼' type='password' value={password} placeholder='請設定密碼' onChange={(passwordInputValue) => setPassword(passwordInputValue)}
          notification='字數超出上限!' wordsLimit={20}
          />
          <AuthInput label='密碼確認' type='password' value={checkPassword} placeholder='請再次輸入密碼' onChange={(checkPasswordInputValue) => setCheckPassword(checkPasswordInputValue)}
          notification='字數超出上限!' wordsLimit={20}
          />
          <Button title='儲存' size='small' isAction onClick={handleClick}></Button>
        </div>
      </div>
      <div className={styles.placeHolder}></div>
    </div>
  )
}