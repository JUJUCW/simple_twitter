import styles from './SingleTweet.module.scss';
import { useState } from 'react';

import { Link } from 'react-router-dom';
import logo_gray from 'assets/icons/logo_gray.png';
import replyIcon from 'assets/icons/tweet/tweet_reply.png';
import likeIcon from 'assets/icons/tweet/tweet_like.png';
import likeIconAction from 'assets/icons/tweet/tweet_like_action.png';
// import ReplyModal from 'components/Modal/ReplyModal/ReplyModal';

export default function SingleTweet() {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(!isClicked);
    };
    return (
        <div className={styles.tweet}>
            <div className={styles.userInfo}>
                <div className={styles.userInfoAvatar}>
                    <img src={logo_gray} alt="avatar" className={styles.tweetAvatar} />
                </div>
                <div className={styles.userInfoCard}>
                    <div className={styles.userInfoName}>Apple</div>
                    <div className={styles.userInfoAccount}>{`@apple`}</div>
                </div>
            </div>

            <div className={styles.tweetContent}>
                Amet minim mollit non deserunt ullamco est sit aliq dolor do amet sint.
            </div>
            <span className={styles.time}>上午 10:05・2021年11月10日</span>
            <div className={styles.line}></div>
            <div className={styles.follows}>
                <Link className={styles.routeLink} to={`/`}>
                    <div className={styles.followsFollower}>
                        <span className={styles.followsCount}>34 </span>
                        <span className={styles.followsType}>回覆</span>
                    </div>
                </Link>
                <Link className={styles.routeLink} to={`/`}>
                    <div className={styles.followingFollower}>
                        <span className={styles.followingCount}>808 </span>
                        <span className={styles.followingType}>喜歡次數</span>
                    </div>
                </Link>
            </div>
            <div className={styles.line}></div>
            <div className={styles.icons}>
                <div className={styles.iconReply} onClick={handleClick}>
                    {/* {isClicked ? (
                        <ReplyModal />
                    ) : ( */}
                        <img className={styles.replyBtn} src={replyIcon} alt="reply button" />
                    {/* )} */}
                </div>
                <div className={styles.iconLike} onClick={handleClick}>
                    {isClicked ? (
                        <img className={styles.likeBtn} src={likeIconAction} alt="like button" />
                    ) : (
                        <img className={styles.likeBtn} src={likeIcon} alt="like button" />
                    )}
                </div>
            </div>
            <div className={styles.lineBottom}></div>
        </div>
    );
}
