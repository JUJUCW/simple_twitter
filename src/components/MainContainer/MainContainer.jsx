import TweetListItem from 'components/UIComponents/NavItem/ListItem/TweetListItem';
import style from './MainContainer.module.scss';
import TweetInput from './TweetInput/TweetInput';

export default function MainContainer() {
    return (
        <div className={style.mainContainer}>
            <div className={style.position}>
                <div className={style.tweetInput}>
                    <TweetInput />
                </div>
            </div>
            <div className={style.tweetItem}>
                <TweetListItem />
            </div>
        </div>
    );
}
