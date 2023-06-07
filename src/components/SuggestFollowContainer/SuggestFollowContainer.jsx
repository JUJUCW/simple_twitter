import SuggestUserItem from 'components/UIComponents/SuggestUserItem/SuggestUserItem';
import styles from './SuggestFollowContainer.module.scss';

export default function SuggestFollowContainer() {
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
