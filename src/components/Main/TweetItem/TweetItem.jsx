// import { Link } from 'react-router-dom';
import {useState} from 'react'
import clsx from 'clsx'
import styles from './TweetItem.module.scss';
import logo from '../../../assets/icons/logo_gray.png';
import reply from '../../../assets/icons/tweet/tweet_reply.png'
import like from '../../../assets/icons/tweet/tweet_like.png'

export default function TweetItem ({handleOpenModal}) {
    const [isLiked, setIsLiked] = useState(false)
    const likeClassName = clsx(styles.likeBtn, { [styles.active]: isLiked })
    const handleLike = () => {
        console.log('123')
        setIsLiked(!isLiked);
    };

    return (
        <div className={styles.container}>
            <div className={styles.avatar}>
                <img className={styles.avatarImg} src={logo} alt="avatar" />
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.userInfo}>
                    <h5 className={styles.name}>Apple</h5>
                    <span className={styles.account}>@apple</span>
                    <span className={styles.tweetTime}>&#xb7;3 小時</span>
                </div>
                <div className={styles.tweetContent}>
                    Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate
                    exercitation incididunt aliquip deserunt reprehenderit elit laborumexercitation incididunt 
                </div>
                <div className={styles.icons}>
                    <div className={styles.iconReply}>
                        <div className={styles.cursor} onClick={handleOpenModal}>
                            <img className={styles.replyBtn} src={reply} alt="reply button" />
                        </div>
                        <span>13</span>
                    </div>
                    <div className={styles.iconLike}>
                        <div className={styles.cursor} onClick={handleLike}>
                            <img className={likeClassName} src={like} alt="like button" />
                        </div>
                        <span>76</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
