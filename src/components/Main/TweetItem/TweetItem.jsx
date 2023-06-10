// import { Link } from 'react-router-dom';
import {useState} from 'react'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import styles from './TweetItem.module.scss';
import reply from '../../../assets/icons/tweet/tweet_reply.png'
import like from '../../../assets/icons/tweet/tweet_like.png'
import {getRelativeTime} from '../../../utility/helper.js'

export default function TweetItem (props) {
    const tweetId = props.tweetId;
    const userId = props.userId
    const userName = props.userName
    const account = props.account;
    const avatar = props.avatar;
    const description = props.description;
    const likedCount = props.likedCount;
    const replyCount = props.replyCount;
    const isLiked = props.isLiked;
    const createdAt = props.createdAt;
    // const updatedAt = props.updatedAt;
    const handleOpenModal = props.handleOpenModal;

    const [showLiked, setShowLiked] = useState(isLiked)

    const likeClassName = clsx(styles.likeBtn, { [styles.active]: showLiked })

    const handleLike = () => {
        setShowLiked(!showLiked);
    };

    return (
        <div className={styles.container}>
            <Link to={`/${userId}/tweet`}>
                <div className={styles.avatar}>
                    <img className={styles.avatarImg} src={avatar} alt="avatar" />
                </div>
            </Link>
            <div className={styles.infoContainer}>
                <Link to={`/${userId}/tweet`}>
                    <div className={styles.userInfo}>
                        <h5 className={styles.name}>{userName}</h5>
                        <span className={styles.account}>@{account}</span>
                        <span className={styles.tweetTime}>&#xb7;{getRelativeTime(createdAt)}</span>
                    </div>
                </Link>
                <Link to={`/${tweetId}`}>
                    <div className={styles.tweetContent}>
                        {description}
                    </div>
                </Link>
                <div className={styles.icons}>
                    <div className={styles.iconReply}>
                        <div className={styles.cursor} onClick={handleOpenModal}>
                            <img className={styles.replyBtn} src={reply} alt="reply button" />
                        </div>
                        <span>{replyCount}</span>
                    </div>
                    <div className={styles.iconLike}>
                        <div className={styles.cursor} onClick={handleLike}>
                            <img className={likeClassName} src={like} alt="like button" />
                        </div>
                        <span>{likedCount}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
