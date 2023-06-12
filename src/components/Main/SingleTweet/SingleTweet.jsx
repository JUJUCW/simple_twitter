import styles from './SingleTweet.module.scss';
import { useState } from 'react';
import clsx from 'clsx';
import { getRelativeTime } from 'utility/helper.js';
import { postTweetUnlike, postTweetLike } from 'api/like.js';

import { Link } from 'react-router-dom';
import replyIcon from 'assets/icons/tweet/tweet_reply.png';
import likeIcon from 'assets/icons/tweet/tweet_like.png';
import ReplyModal from 'components/Modal/ReplyModal/ReplyModal';

export default function SingleTweet({ props }) {
    // const [isClicked, setIsClicked] = useState(false);
    // const handleClick = () => {
    //     setIsClicked(!isClicked);
    // };
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    const { id, User, description, replyCount, createdAt, isLiked, likedCount } = props;

    const tweetId = id;
    const userName = User?.name || '';
    const account = User?.account || '';
    const avatar = User?.avatar || '';


    // const handleOpenModal = props.onClick;
    const [showLiked, setShowLiked] = useState(isLiked);
    const [likedCounts, setLikeCounts] = useState(likedCount);

    const likeClassName = clsx(styles.likeBtn, { [styles.active]: showLiked });

    const handleLike = async () => {
        try {
            if (showLiked === true) {
                await postTweetUnlike(tweetId);
                setShowLiked(false);
                setLikeCounts(likedCount - 1);
            } else {
                await postTweetLike(tweetId);
                setShowLiked(true);
                setLikeCounts(likedCount + 1);
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
                    {likedCounts}
                    <span className={styles.like}>喜歡次數</span>
                </div>
                {/* </Link> */}
            </div>
            <div className={styles.line}></div>
            <div className={styles.icons}>
                <div className={styles.iconReply} onClick={handleOpenModal}>
                    <img className={styles.replyBtn} src={replyIcon} alt="reply button" />
                </div>
                
                <div className={styles.iconLike} onClick={() => handleLike(showLiked)}>
                    <div className={styles.cursor}>
                        <img className={likeClassName} src={likeIcon} alt="like button" />
                    </div>
                </div>
            </div>
            {isModalOpen && <ReplyModal handleCloseModal={handleCloseModal} />}
            <div className={styles.lineBottom}></div>
        </div>
    );
}
