import { useState } from 'react';

import { followUser, unFollowUser } from '../../../api/followship.js'
// import {Toast} from '../../../utility/helper.js'
import styles from './SuggestUserItem.module.scss';
import Button from '../../Button/Button.jsx';
import logo from '../../../assets/icons/logo.png';

export default function SuggestUserItem(props) {
    const avatar=props.avatar
    const name=props.name
    const account=props.account
    const userId=props.userId
    const isFollowed=props.isFollowed
    const [isClicked, setIsClicked] = useState(isFollowed);

    const handleClick = async() => {
        try{
            if (isClicked === false) {
                const data = await followUser(userId)
                if (data.followingId) {
                console.log(data.followingId)
                setIsClicked(true)
            }
        }
            if (isClicked === true) {
                const data = await unFollowUser(userId)
                if (data.followingId) {
                console.log(data.followingId)
                setIsClicked(false)
            }
        } 
        } catch (error){
            console.error(error)
        }
        
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
