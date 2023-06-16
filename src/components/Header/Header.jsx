import styles from './Header.module.scss';
import arrowIcon from '../../assets/icons/arrow.png';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getUser } from '../../api/user.js'
import { useDataStatus } from '../../context/DataContext.jsx'

export default function Header({ title, arrow, tweetCount, UserId }) {
    const [ userProfile, setUserProfile] = useState('');
    const { isDataUpdate } = useDataStatus();

    useEffect(() => {
        const getUserInfo = async () => {
            try {
                const data = await getUser(UserId);
                if (data.status === 'error') {
                    console.log(data.message);
                    return;
                }
                if (data) {
                    // update data
                    await setUserProfile(data);
                    // console.log(data);
                }
            } catch (error) {
                console.log('獲取使用者資料失敗', error);
            }
        };
        getUserInfo();
    }, [UserId, isDataUpdate]);

    return (
        <div className={styles.headerContainer}>
            {arrow && tweetCount ? (
                <div>
                    <div className={styles.container}>
                        <Link to="/main">
                            <div className={styles.arrow}>
                                <img src={arrowIcon} alt="arrow" />
                            </div>
                        </Link>
                        <div>
                            <h5 className={styles.smallTitle}>{title}</h5>
                            {userProfile && <p className={styles.tweetCount}>{userProfile.tweetCount} 推文</p>}
                            
                        </div>
                    </div>
                </div>
            ) : arrow ? (
                <div>
                    <div className={styles.container}>
                        <Link to="/main">
                            <div className={styles.arrow}>
                            <img src={arrowIcon} alt="arrow" />
                        </div>
                        </Link>
                
                        <div>
                            <h4 className={styles.title}>{title}</h4>
                        </div>
                    </div>
                </div>
            ) : (
                <h4 className={styles.title}>{title}</h4>
            )}
        </div>
    );
}
