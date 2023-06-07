import Header from 'components/Header/Header';
import styles from './CurrentUser.module.scss';
import bgImg from 'assets/images/default_background.png';
import logo from 'assets/icons/logo_gray.png';
import Button from 'components/Button/Button';
import { Link } from 'react-router-dom';
import TweetListItem from 'components/UIComponents/NavItem/ListItem/TweetListItem';
import UserToggleMenu from 'components/UIComponents/ToggleMenu/UserToggleMenu';

export default function CurrentUser() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Header title="John Doe" arrow tweetCount="25" />
            </div>
            <div className={styles.userCard}>
                <div className={styles.cover}>
                    <img src={bgImg} alt="cover" className={styles.bgImg} />
                </div>
                <div className={styles.userInfo}>
                    <div className={styles.userInfoAvatar}>
                        <img src={logo} alt="avatar" className={styles.img} />
                    </div>
                    <div className={styles.userInfoCard}>
                        <div className={styles.userInfoName}>John Doe</div>
                        <div className={styles.userInfoAccount}>{`@johndoe`}</div>
                    </div>
                </div>
                {/* <div className={styles.btnEdit}> */}
                    <div className={styles.btnContainer}>
                        <Button title="編輯個人資料" size="edit" />
                    {/* </div> */}
                </div>
                <div className={styles.userDescription}>
                    <div className={styles.descriptionContext}>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                    </div>
                    <div className={styles.follows}>
                        <Link className={styles.routeLink} to={`/:UserId/following`}>
                            <div className={styles.followsFollower}>
                                <span className={styles.followsCount}>34個</span>
                                <span className={styles.followsType}>跟隨中</span>
                            </div>
                        </Link>
                        <Link className={styles.routeLink} to={`/:UserId/following`}>
                            <div className={styles.followingFollower}>
                                <span className={styles.followingCount}>59位</span>
                                <span className={styles.followingType}>跟隨者</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.userToggleMenu}>
                <UserToggleMenu />
            </div>
            <div className={styles.tweetListItem}>
                <TweetListItem />
            </div>
        </div>
    );
}
