import { useState } from 'react';
import styles from './SuggestUserItem.module.scss';
import Button from '../../Button/Button.jsx';
import logo from '../../../assets/icons/logo.png';

export default function SuggestUserItem(props) {
    const avatar=props.avatar
    const name=props.name
    const account=props.account
    const isFollowed=props.isFollowed
    const [isClicked, setIsClicked] = useState(isFollowed);
    const handleClick = () => {
        setIsClicked(!isClicked);
    };
    return (
        <>
            <div className={styles.userItem}>
                <div className={styles.container}>
                    <img className={styles.userAvatar} src={avatar||logo} alt="avatar" />
                    <div className={styles.userInfo}>
                        {/* When text becomes too long, it automatically turns into "..."" */}
                        <p className={styles.userInfoName}>{name}</p>
                        <p className={styles.userInfoAccount}>@{account}</p>
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
