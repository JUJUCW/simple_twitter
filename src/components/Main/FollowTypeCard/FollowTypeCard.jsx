import { useState } from 'react';
import Button from 'components/Button/Button';
import styles from './FollowTypeCard.module.scss';
import logo from 'assets/icons/logo_gray.png';

export default function FollowTypeCard(props) {
            // const userId=props.userId
            const avatar=props.avatar
            const name=props.name
            // const account=props.account
            const introduction=props.introduction
            const isFollowed=props.isFollowed
    const [isClicked, setIsClicked] = useState(isFollowed);
    const handleClick = () => {
        setIsClicked(!isClicked);
    };
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <div className={styles.userInfo}>
                    <div className={styles.avatarContainer}>
                        <img src={avatar||logo} alt="" className={styles.avatar} />
                    </div>
                    
                    <div className={styles.userName}>{name}</div>
                </div>
                <div className={styles.btn} onClick={handleClick}>
                    {isClicked ? (
                        <Button title="正在跟隨" size="middle" isAction />
                    ) : (
                        <Button title="跟隨" size="small" />
                    )}
                </div>
            </div>

            <div className={styles.tweetContent}>
                {introduction}
            </div>
        </div>
    );
}
