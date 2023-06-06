import styles from './TweetInput.module.scss';
import Button from 'components/Button/Button';
import logo from 'assets/icons/nav/nav_home.png';

export default function TweetInput() {
    return (
        <div className={styles.tweetInputContainer}>
            <div className={styles.title}>
                <p className={styles.p}>首頁</p>
            </div>
            <div className={styles.inputContainer}>
                <div className={styles.inputContainerInput}>
                    <div className={styles.avatarContainer}>
                        <div className={styles.avatar}>
                            <img className={styles.img} src={logo} alt="user" />
                        </div>
                    </div>
                </div>
                <div className={styles.inputContainerContext}>
                    <div className={styles.text}>有什麼新鮮事？</div>
                    <div className={styles.btn}>
                        <Button title="推文" size="small" isAction></Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
