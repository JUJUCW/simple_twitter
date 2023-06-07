import styles from './TweetInput.module.scss';
import Button from 'components/Button/Button';
import logo from 'assets/icons/nav/nav_home.png';
// import Header from 'components/Header/Header';

export default function TweetInput() {
    return (
        <div className={styles.tweetInputContainer}>
            {/* <div className={styles.title}>
                <Header title="首頁"/>
            </div> */}
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
