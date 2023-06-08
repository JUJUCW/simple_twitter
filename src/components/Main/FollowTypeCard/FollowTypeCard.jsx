import { useState } from 'react';
import Button from 'components/Button/Button';
import styles from './FollowTypeCard.module.scss';
import logo from 'assets/icons/logo_gray.png';

export default function FollowTypeCard() {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(!isClicked);
    };
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <div className={styles.userInfo}>
                    <img src={logo} alt="" className={styles.avatar} />
                    <div className={styles.userName}>Apple</div>
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
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate
                exercitation incididunt aliquip deserunt reprehenderit elit laborum.
            </div>
        </div>
    );
}
