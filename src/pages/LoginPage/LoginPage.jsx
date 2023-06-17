import { useState, useEffect, useCallback, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Toast } from '../../utility/helper.js';
import { useAuth } from '../../context/AuthContext.jsx';
import AuthInput from '../../components/Auth/AuthInput/AuthInput.jsx';
import AuthPageContainer from '../../components/Auth/AuthPageContainer/AuthPageContainer.jsx';
import Button from '../../components/Button/Button.jsx';

import styles from './LoginPage.module.scss';

export default function LoginPage() {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const { login, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const isValid = useMemo(() => {
        if (!account || account.length > 50) {
            return false;
        }
        if (!password || password.length > 50) {
            return false;
        }
        return true;
    }, [account, password]);

    const handleClick = useCallback(async () => {
        if (!isValid) {
            Toast.fire({
                title: '請確認帳號密碼!',
                icon: 'error',
            });
            return;
        }
        const success = await login({
            account,
            password,
        });
        // login success
        if (success) {
            Toast.fire({
                title: '登入成功',
                icon: 'success',
            });
            return;
        }
        // login fail
        Toast.fire({
            title: '帳號不存在',
            icon: 'error',
        });
        await setPassword('');
    }, [account, password, login, isValid]);

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/main');
        }
        const keyDownHandler = (event) => {
            // console.log('User pressed: ', event.key);

            if (event.key === 'Enter') {
                event.preventDefault();
                handleClick();
            }
        };
        document.addEventListener('keydown', keyDownHandler);
        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, [handleClick, navigate, isAuthenticated]);

    return (
        <AuthPageContainer title="登入 Alphitter">
            <AuthInput
                label="帳號"
                value={account}
                placeholder="請輸入帳號"
                onChange={(accountInputValue) => setAccount(accountInputValue)}
                notification="字數超出上限!"
                wordsLimit={50}
            />
            <AuthInput
                label="密碼"
                value={password}
                placeholder="請輸入密碼"
                onChange={(passwordInputValue) => setPassword(passwordInputValue)}
                notification="字數超出上限!"
                wordsLimit={50}
                type="password"
                // onInputKeyDown={handleInputKeyDown}
            />
            <Button title="登入" size="large" isAction onClick={handleClick}></Button>
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
