import { NavLink } from 'react-router-dom';
import styles from './UserToggleMenu.module.scss';

export default function UserToggleMenu() {
    return (
        <div className={styles.container}>
            <NavLink to="/TweetListItem">
                {/* {({ isActive }) =>
                    isActive ? ( */}
                        <div className={styles.active}>
                            <div className={styles.tweet}>推文</div>
                        </div>
                    {/* ) : ( */}
                        {/* <div className={styles.inactive}>
                            <div className={styles.tweet}>推文</div>
                        </div> */}
                    {/* )
                } */}
            </NavLink>
            <NavLink to="/Reply">
                {/* {({ isActive }) =>
                    isActive ? ( */}
                        {/* <div className={styles.active}>
                            <div className={styles.tweet}>回覆</div>
                        </div> */}
                    {/* ) : ( */}
                        <div className={styles.inactive}>
                            <div className={styles.tweet}>回覆</div>
                        </div>
                    {/* )
                } */}
            </NavLink>
            <NavLink to="/Liked">
                {/* {({ isActive }) =>
                    isActive ? ( */}
                        {/* <div className={styles.active}>
                            <div className={styles.tweet}>喜歡的內容</div>
                        </div> */}
                    {/* ) : ( */}
                        <div className={styles.inactive}>
                            <div className={styles.tweet}>喜歡的內容</div>
                        </div>
                    {/* )
                } */}
            </NavLink>
        </div>
    );
}