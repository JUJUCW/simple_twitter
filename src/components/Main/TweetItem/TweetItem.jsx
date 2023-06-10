// import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './TweetItem.module.scss';
import { postTweetLike, postTweetUnlike, getATweet } from 'api/like';

// import like from 'api/like';

import logo from '../../../assets/icons/logo_gray.png';
import replyIcon from '../../../assets/icons/tweet/tweet_reply.png';
import likeIcon from '../../../assets/icons/tweet/tweet_like.png';

export default function TweetItem({
    handleOpenModal,
    // tweetId
    // isLiked,
    // likeCount
}) {
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    useEffect(() => {
        console.log('useEffect');
        postTweetLike(4)
            .then((data) => {
                console.log('postTweetLike_data', data);
                setIsLiked(true);
            })
            .catch((error) => {
                console.error(error); // 處理錯誤
            });
    });



    const handleLike = () => {
        getATweet(4);

        if (isLiked === true) {
            postTweetUnlike(4)
                .then(() => {
                    setIsLiked(false);
                    setLikeCount(likeCount - 1);
                })
                .catch((error) => {
                    console.log('取消按讚失敗', error);
                });
        } else {
            postTweetLike(4)
                .then(() => {
                    setIsLiked(true);
                    setLikeCount(likeCount + 1);
                })
                .catch((error) => {
                    console.log('按讚失敗', error);
                });
        }
    };
    const likeClassName = clsx(styles.likeBtn, { [styles.active]: isLiked });
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
                            <img className={styles.replyBtn} src={replyIcon} alt="reply button" />
                        </div>
                        <span>13</span>
                    </div>
                    <div className={styles.iconLike}>
                        <div className={styles.cursor} onClick={handleLike}>
                            <img className={likeClassName} src={likeIcon} alt="like button" />
                        </div>
                        <span>{likeCount}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
