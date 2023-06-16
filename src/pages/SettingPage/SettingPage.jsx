import { useState, useEffect, useMemo } from 'react';

import Header from '../../components/Header/Header.jsx'
import AuthInput from '../../components/Auth/AuthInput/AuthInput.jsx'
import Button from '../../components/Button/Button.jsx'
import NavBarContainer from '../../components/Navbar/NavBarContainer/NavBarContainer.jsx'
import { setUserAccount, getUser } from '../../api/user.js'
import { Toast } from '../../utility/helper.js'
import styles from './SettingPage.module.scss'
import { useAuth } from '../../context/AuthContext.jsx'
import { useNavigate } from 'react-router-dom';
import { useDataStatus } from '../../context/DataContext.jsx'

export default function SettingPage () {
  const { logout, currentUser, isAuthenticated, isAuthChecked } = useAuth();
  
  const userId = currentUser && currentUser.id
  const navigate = useNavigate();
  const [account, setAccount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const { isDataUpdate, setIsDataUpdate } = useDataStatus();
 
  
  useEffect(() => {
        const getUserInfo = async () => {
            try {
                const data = await getUser(userId);
                if (data.status === 'error') {
                    console.log(data.message);
                    return;
                }
                if (data) {
                    // update data
                    await setAccount(data.account);
                    await setName(data.name)
                    await setEmail(data.email)
                    // console.log(data);
                }
            } catch (error) {
                console.log('獲取使用者資料失敗', error);
            }
        };
        getUserInfo();
    }, [userId, isDataUpdate]);

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
    if (password.length > 50) {
        return false;
    }
    if (checkPassword.length > 50 ||checkPassword !== password) {
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
   
    const data = await setUserAccount({
      name,
      account,
      email,
      password,
      checkPassword,
      userId
    });
   
    if (data.status==="error") {
      Toast.fire({
        title: data.message,
        icon: "error",
      });
      return;
    } 
    if (data.status==="操作成功") {
      Toast.fire({
        title: "修改成功",
        icon: "success",
      });
    }
    await setIsDataUpdate(!isDataUpdate)
  }

    useEffect(() => {
        if (!isAuthenticated && isAuthChecked) {
        navigate('/login');
        }
    }, [navigate, isAuthenticated, isAuthChecked]);

  
  return (
    <div className={styles.adminContainer}>
      <NavBarContainer role='user'page='setting'/>
      <div className={styles.middleContainer}>
        <Header title='帳戶設定'/>
        <div className={styles.inputContainer}>
          <AuthInput label='帳號' value={account} placeholder='請輸入帳號' onChange={(accountInputValue) => setAccount(accountInputValue)}
          notification='字數超出上限!' wordsLimit={20}/>
          <AuthInput label='名稱' value={name} placeholder='請輸入使用者名稱' onChange={(nameInputValue) => setName(nameInputValue)}
          notification='字數超出上限!' wordsLimit={20}/>
          <AuthInput label='Email' value={email} placeholder='請輸入Email' onChange={(emailInputValue) => setEmail(emailInputValue)}
          notification='字數超出上限!' wordsLimit={20}/>
          <AuthInput label='密碼' type='password' value={password} placeholder='請設定密碼' onChange={(passwordInputValue) => setPassword(passwordInputValue)}
          notification='字數超出上限!' wordsLimit={20}
          />
          <AuthInput label='密碼確認' type='password' value={checkPassword} placeholder='請再次輸入密碼' onChange={(checkPasswordInputValue) => setCheckPassword(checkPasswordInputValue)}
          notification='字數超出上限!' wordsLimit={20}
          />
          <Button title='儲存' size='small' isAction onClick={handleClick}></Button>
          <div className={styles.rwdBtn} onClick={()=>logout()}>
            <span className={styles.span}>登出</span>
          </div>
        </div>
      </div>
      <div className={styles.placeHolder}></div>
    </div>
  )
}