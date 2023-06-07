
import styles from './MainContainer.module.scss';


export default function MainContainer({children}) {
    return (
        
        <div className={styles.middleContainer}>
            {children}
        </div>
        
        // <div className={styles.mainContainer}>
        //     <div className={styles.position}>
        //         <div className={styles.tweetInput}>
        //             <TweetInput />
        //         </div>
        //     </div>
        //     <div className={styles.tweetItem}>
        //         <TweetListItem />
        //     </div>
        // </div>
    );
}
