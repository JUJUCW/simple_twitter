import TweetListItem from 'components/UIComponents/NavItem/ListItem/TweetListItem';
import styles from './MainContainer.module.scss';
import TweetInput from './TweetInput/TweetInput';

export default function MainContainer() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.position}>
                <div className={styles.tweetInput}>
                    <TweetInput />
                </div>
            </div>
            <div className={styles.tweetItem}>
                <TweetListItem />
            </div>
        </div>
    );
}
