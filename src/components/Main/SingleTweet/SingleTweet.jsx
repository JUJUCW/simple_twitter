import styles from './SingleTweet.module.scss';
import { useState } from 'react';
import clsx from 'clsx';
import { getFullTime } from 'utility/helper.js';
import { postTweetUnlike, postTweetLike } from 'api/like.js';
import replyIcon from 'assets/icons/tweet/tweet_reply.png';
import likeIcon from 'assets/icons/tweet/tweet_like.png';
import { Link } from 'react-router-dom';

export default function SingleTweet({ onClick, props, userParam }) {
    const TweetId = props.id;
    const userId = props.UserId;
    const userName = userParam.name;
    const account = userParam.account;
    const avatar = userParam.avatar;
    const description = props.description;
    const replyCount = props.replyCount;
    const createdAt = props.createdAt;
    const isLiked = props.isLiked;
    const preLikedCount = props.likedCount;
    const [showLiked, setShowLiked] = useState(isLiked);
    const [likedCount, setLikeCount] = useState(preLikedCount);
    const likeClassName = clsx(styles.likeBtn, { [styles.active]: showLiked });
    const fullTime = getFullTime(createdAt);

    const handleLike = async () => {
        try {
            if (showLiked === true) {
                await postTweetUnlike(TweetId);
                setShowLiked(false);
                setLikeCount(likedCount - 1);
            } else {
                await postTweetLike(TweetId);
                setShowLiked(true);
                setLikeCount(likedCount + 1);
            }
        } catch (error) {
            console.log('操作失敗', error);
        }
    };
    return (
        <div className={styles.tweet}>
            <Link to={`/user/${userId}/tweet`}>
                <div className={styles.userInfo}>
                    <div className={styles.userInfoAvatar}>
                        <img src={avatar} alt="avatar" className={styles.tweetAvatar} />
                    </div>
                    <div className={styles.userInfoCard}>
                        <div className={styles.userInfoName}>{userName}</div>
                        <div className={styles.userInfoAccount}>@{account}</div>
                    </div>
                </div>
            </Link>
            <div className={styles.tweetContent}>{description}</div>

            <span className={styles.time}>{fullTime}</span>
            <div className={styles.line}></div>
            <div className={styles.likeReplyBox}>
                <div className={styles.counts}>
                    <span className={styles.replyCount}>{replyCount}&nbsp;</span>
                    <span className={styles.count}>回覆</span>
                </div>

                <div className={styles.likeCount}>
                    {likedCount}&nbsp;
                    <span className={styles.like}>喜歡次數</span>
                </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.icons}>
                <div className={styles.iconReply} onClick={onClick}>
                    <img className={styles.replyBtn} src={replyIcon} alt="reply button" />
                </div>

                <div className={styles.iconLike} onClick={handleLike}>
                    <div className={styles.cursor}>
                        <img className={likeClassName} src={likeIcon} alt="like button" />
                    </div>
                </div>
            </div>
        </div>
    );
}
