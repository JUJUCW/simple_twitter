import styles from './SingleTweet.module.scss';
import { useState } from 'react';
import clsx from 'clsx';
import { getRelativeTime } from 'utility/helper.js';
import { postTweetUnlike, postTweetLike } from 'api/like.js';

// import { Link } from 'react-router-dom';
import replyIcon from 'assets/icons/tweet/tweet_reply.png';
import likeIcon from 'assets/icons/tweet/tweet_like.png';
// import likeIconAction from 'assets/icons/tweet/tweet_like_action.png';
import ReplyModal from 'components/Modal/ReplyModal/ReplyModal';

export default function SingleTweet(tweet) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const TweetId = tweet.id;
    const userName = tweet.userParam.name;
    const account = tweet.userParam.account;
    const avatar = tweet.userParam.avatar;
    const description = tweet.props.description;
    const replyCount = tweet.props.replyCount;
    const createdAt = tweet.props.createdAt;
    const isLiked = tweet.props.isLiked;
    const preLikedCount = tweet.props.likedCount;
    const [showLiked, setShowLiked] = useState(isLiked);
    const [likedCount, setLikeCount] = useState(preLikedCount);
    const likeClassName = clsx(styles.likeBtn, { [styles.active]: showLiked });

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
            <div className={styles.userInfo}>
                <div className={styles.userInfoAvatar}>
                    <img src={avatar} alt="avatar" className={styles.tweetAvatar} />
                </div>
                <div className={styles.userInfoCard}>
                    <div className={styles.userInfoName}>{userName}</div>
                    <div className={styles.userInfoAccount}>@{account}</div>
                </div>
            </div>
            <div className={styles.tweetContent}>{description}</div>
            <span className={styles.time}>&#xb7;{getRelativeTime(createdAt)}</span>
            <div className={styles.line}></div>
            <div className={styles.likeReplyBox}>
                {/* <Link className={styles.routeLink} to={`/`}> */}
                <div className={styles.counts}>
                    <span className={styles.replyCount}>{replyCount}&nbsp;</span>
                    <span className={styles.count}>回覆</span>
                </div>
                {/* </Link> */}
                {/* <Link className={styles.routeLink}
                    // to={`/`}
                > */}
                <div className={styles.likeCount}>
                    {likedCount}&nbsp;
                    <span className={styles.like}>喜歡次數</span>
                </div>
                {/* </Link> */}
            </div>
            <div className={styles.line}></div>
            <div className={styles.icons}>
                <div className={styles.iconReply} onClick={handleOpenModal}>
                    <img className={styles.replyBtn} src={replyIcon} alt="reply button" />
                </div>

                <div className={styles.iconLike} onClick={handleLike}>
                    <div className={styles.cursor}>
                        <img className={likeClassName} src={likeIcon} alt="like button" />
                    </div>
                </div>
            </div>
            {isModalOpen && <ReplyModal handleCloseModal={handleCloseModal} TweetId={TweetId} />}
            <div className={styles.lineBottom}></div>
        </div>
    );
}
