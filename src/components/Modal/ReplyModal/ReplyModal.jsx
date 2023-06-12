import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Toast } from '../../../utility/helper.js';
import { postReply } from 'api/reply.js';
import Button from '../../Button/Button.jsx';
import { getRelativeTime } from 'utility/helper.js';
import modal_esc from '../../../assets/icons/modal/modal_esc.png';
import styles from './ReplyModal.module.scss';
// import TweetItem from 'components/Main/TweetItem/TweetItem.jsx';

export default function ReplyModal({ handleCloseModal, props }) {
    const [textInput, setTextInput] = useState('');
    const warningClassName = clsx(styles.waring, { [styles.active]: textInput.length > 140 });
    const headsUpClassName = clsx(styles.headsUp, { [styles.active]: textInput.length === 0 });
    const bodyClassName = clsx(styles.body, { [styles.active]: textInput.length > 0 });
    const TweetId = props.TweetId;
    // const userId = props.userId;
    const userName = props.userName;
    const account = props.account;
    const avatar = props.avatar;
    const description = props.description;
    const createdAt = props.createdAt;

    const handlePostReply = async () => {
        if (textInput.trim().length === 0) {
            setTextInput('');
            Toast.fire({
                title: '內容不可為空白',
                icon: 'error',
            });
            return;
        }
        if (textInput.length > 140) return;
        try {
            console.log('tweetId', TweetId);
            const res = await postReply(textInput.trim());

            if (res.id) {
                setTextInput('');
                Toast.fire({
                    title: '回覆發送成功',
                    icon: 'success',
                });
            } else {
                Toast.fire({
                    title: '回覆發送失敗',
                    icon: 'error',
                });
            }
        } catch (error) {
            console.error(error);
            Toast.fire({
                title: '回覆發送失敗',
                icon: 'error',
            });
        }
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContainer}>
                <div className={styles.header}>
                    <div onClick={handleCloseModal}>
                        <img className={styles.modalEsc} src={modal_esc} alt="modal esc" />
                    </div>
                </div>
                <div className={styles.tweet}>
                    <div className={styles.left}>
                        <img className={styles.avatar} src={avatar} alt="avatar" />
                        <span className={styles.line}></span>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.tweetUserInfo}>
                            <span className={styles.tweetUserName}>{userName}</span>
                            <span className={styles.tweetUserAccount}>
                                @{account}
                                &#xb7;
                                <span className={styles.time}>&#xb7;{getRelativeTime(createdAt)}</span>
                            </span>
                        </div>
                        <div className={styles.tweetContent}>{description}</div>
                        <div className={styles.replyAddress}>
                            <span className={styles.replyWord}>回覆給</span>
                            <span className={styles.replyAccount}>@{account}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.positionAnchor}>
                    <div className={styles.info}>
                        <img className={styles.avatar} src={avatar} alt="avatar" />

                        <div className={styles.replyContainer}>
                            <textarea
                                className={bodyClassName}
                                onChange={(event) => setTextInput(event.target.value)}
                                placeholder="推你的回覆"
                                value={textInput}
                            />
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <span className={warningClassName}>字數不可超過 140 字</span>
                        <span className={headsUpClassName}>內容不可為空白</span>
                        <Button title="回覆" size="small" isAction onClick={handlePostReply}></Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
