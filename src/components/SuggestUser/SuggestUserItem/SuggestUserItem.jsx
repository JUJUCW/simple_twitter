import { useState } from 'react';
import styles from './SuggestUserItem.module.scss';
import Button from '../../Button/Button.jsx';
import logo from '../../../assets/icons/logo.png';

export default function SuggestUserItem() {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(!isClicked);
    };
    return (
        <>
            <div className={styles.userItem}>
                <div className={styles.container}>
                    <img className={styles.userAvatar} src={logo} alt="avatar" />
                    <div className={styles.userInfo}>
                        {/* When text becomes too long, it automatically turns into "..."" */}
                        <p className={styles.userInfoName}>Pizza HutPizza Hut</p>
                        <p className={styles.userInfoAccount}>{`@pizzahut`}</p>
                    </div>
                </div>

                <div className={styles.btn} onClick={handleClick}>
                    {isClicked ? (
                        <Button title="正在跟隨" size="middle" isAction />
                    ) : (
                        <Button title="跟隨" size="small" />
                    )}
                </div>
            </div>
        </>
    );
}
