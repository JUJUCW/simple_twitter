import { useState } from 'react';
import Button from 'components/Button/Button';
import styles from './FollowTypeCard.module.scss';
import logo from 'assets/icons/logo_gray.png';
import { useDataStatus } from '../../../context/DataContext.jsx';
import { followUser, unFollowUser } from '../../../api/followship.js';
import { Link } from 'react-router-dom';

export default function FollowTypeCard(props) {
    const userId = props && props.userId;
    const avatar = props && props.avatar;
    const name = props && props.name;
    // const account=props.account
    const introduction = props && props.introduction;
    const isFollowed = props && props.isFollowed;

    const [isClicked, setIsClicked] = useState(isFollowed);
    const { isDataUpdate, setIsDataUpdate } = useDataStatus();

    const handleClick = async () => {
        try {
            if (isClicked === false) {
                const data = await followUser(userId);
                if (data.followingId) {
                    // console.log(data.followingId);
                    setIsClicked(true);
                    setIsDataUpdate(!isDataUpdate);
                }
            }
            if (isClicked === true) {
                const data = await unFollowUser(userId);
                if (data.followingId) {
                    // console.log(data.followingId);
                    setIsClicked(false);
                    setIsDataUpdate(!isDataUpdate);
                }
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Link to={`/user/${userId}/tweet`}>
                    <div className={styles.userInfo}>
                        <div className={styles.avatarContainer}>
                            <img src={avatar || logo} alt="" className={styles.avatar} />
                        </div>

                        <div className={styles.userName}>{name}</div>
                    </div>
                </Link>
                <div className={styles.btn} onClick={handleClick}>
                    {isClicked ? (
                        <Button title="正在跟隨" size="middle" isAction />
                    ) : (
                        <Button title="跟隨" size="small" />
                    )}
                </div>
            </div>

            <div className={styles.tweetContent}>{introduction}</div>
        </div>
    );
}
