import styles from './ReplyItem.module.scss';
import { getRelativeTime } from '../../../utility/helper.js';

export default function ReplyItem(props) {
    const avatar = props.avatar;
    const account = props.account;
    const userName = props.name;
    const createdAt = props.createdAt;
    const tweetAccount=props.tweetAccount

    // const tweetId=props.id
    // const userId=props.UserId
    // const tweetAccount = props.tweetAccount;

    const comment = props.comment;

    return (
        <div className={styles.modalContainer}>
                <div className={styles.left}>
                    <div className={styles.avatarContainer}>
                        <img className={styles.tweetAvatar} src={avatar} alt="logo_gray" />
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.tweetUserInfo}>
                        <span className={styles.tweetUserName}>{userName}</span>
                        <span className={styles.tweetUserAccount}>
                            @{account}&#xb7;{getRelativeTime(createdAt)}
                        </span>
                    </div>
                    <div className={styles.replyAddress}>
                        <span className={styles.replyWord}>回覆給</span>

                        <span className={styles.replyAccount}> @{tweetAccount}</span>
                    </div>
                    <div className={styles.tweetContent}>{comment}</div>
                </div>
        </div>
    );
}
