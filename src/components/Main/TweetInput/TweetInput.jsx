import { useState, useEffect } from 'react';
import { Toast } from '../../../utility/helper.js';
import { useAuth } from '../../../context/AuthContext.jsx';
import { useDataStatus } from '../../../context/DataContext.jsx';
import { getUser } from '../../../api/user.js';
import usePostTweet from '../../../hooks/usePostTweet.js'
import clsx from 'clsx';

import Button from '../../Button/Button.jsx';
import logo_gray from '../../../assets/icons/logo_gray.png';
import styles from './TweetInput.module.scss';

export default function TweetInput() {
    const [ textInput, setTextInput ] = useState('');
    const { isDataUpdate, setIsDataUpdate } = useDataStatus();
    const { currentUser } = useAuth();
    const [ userProfile, setUserProfile ] = useState('');
    const { postTweetHook } = usePostTweet()
    const userId = currentUser && currentUser.id

    const warningClassName = clsx(styles.waring, { [styles.active]: textInput.length > 140 });
    const bodyClassName = clsx(styles.body, { [styles.active]: textInput.length > 0 });

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
                    setUserProfile(data);
                    // console.log(data);
                }
            } catch (error) {
                console.log('獲取使用者資料失敗', error);
            }
        };
        getUserInfo();
    }, [userId, isDataUpdate]);

    const handlePostTweet = async () => {
        if (textInput.trim().length === 0) {
            setTextInput('');
            Toast.fire({
                title: '內容不可為空白',
                icon: 'error',
            });
            return;
        }
        if (textInput.length > 140) return;
        await postTweetHook(textInput)
        await setTextInput("");
        await setIsDataUpdate(!isDataUpdate)

    };

    return (
        <div className={styles.modalContainer}>
            <div className={styles.avatarContainer}>
                <img className={styles.avatar} src={userProfile?.avatar || logo_gray} alt="avatar" />
            </div>
            <textarea
                className={bodyClassName}
                onChange={(event) => setTextInput(event.target.value)}
                value={textInput}
                placeholder="有什麼新鮮事？"
            ></textarea>

            <div className={styles.footer}>
                <span className={warningClassName}>字數不可超過 140 字</span>
                <div className={styles.btn}>
                    <Button title="推文" size="small" isAction onClick={handlePostTweet}></Button>
                </div>
            </div>
        </div>
    );
}
