import styles from './Header.module.scss';
import arrowIcon from '../../assets/icons/arrow.png';
import { useAuth } from '../../context/AuthContext.jsx'
import { Link } from 'react-router-dom';

export default function Header({ title, arrow, tweetCount }) {
    const { currentUser } = useAuth();
    return (
        <div className={styles.headerContainer}>
            {arrow && tweetCount ? (
                <div>
                    <div className={styles.container}>
                        <Link to="/main">
                            <div className={styles.arrow}>
                                <img src={arrowIcon} alt="arrow" />
                            </div>
                        </Link>
                        <div>
                            <h5 className={styles.smallTitle}>{title}</h5>
                            {currentUser && <p className={styles.tweetCount}>{currentUser.tweetCount} 推文</p>}
                            
                        </div>
                    </div>
                </div>
            ) : arrow ? (
                <div>
                    <div className={styles.container}>
                        <div className={styles.arrow}>
                            <img src={arrowIcon} alt="arrow" />
                        </div>

                        <div>
                            <h4 className={styles.title}>{title}</h4>
                        </div>
                    </div>
                </div>
            ) : (
                <h4 className={styles.title}>{title}</h4>
            )}
        </div>
    );
}
