import SuggestUserItem from '../SuggestUserItem/SuggestUserItem.jsx';
import styles from './SuggestUserContainer.module.scss';

export default function SuggestUserContainer() {
    return (
        <div className={styles.SuggestFollowContainer}>
            <h4 className={styles.suggestUserTitle}>推薦跟隨</h4>
            {/* <div className={styles.line}></div> */}
            <div className={styles.suggestUserCard}>
                <SuggestUserItem />
                <SuggestUserItem />
                <SuggestUserItem />
                <SuggestUserItem />
            </div>
        </div>
    );
}
