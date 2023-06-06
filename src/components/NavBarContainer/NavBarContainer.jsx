import { Link, NavLink } from 'react-router-dom';
import NavItem from 'components/UIComponents/NavItem/NavItem';
import Button from 'components/Button/Button';

import styles from './NavBarContainer.module.scss';

import logo from '../../assets/icons/logo.png';
import logout from '../../assets/icons/nav/nav_signout.png';

export default function NavBarContainer() {
    return (
        <>
            <div className={styles.navBarContainer}>
                <div className={styles.main}>
                    <Link to="/homePage">
                        <div className={styles.logo}>
                            <img className={styles.img} src={logo} alt="logo" />
                        </div>
                    </Link>
                    <div className={styles.menu}>
                        <NavLink to="/homePage" className={styles.btnLink}>
                            <NavItem iconStyle={'iconHomeAction'} altName="home" title="首頁" />
                        </NavLink>

                        <NavLink to="/TweetPage" className={styles.btnLink}>
                            <NavItem iconStyle={'iconUser'} altName="user" title="個人資料" />
                        </NavLink>

                        <NavLink to="/SettingPage" className={styles.btnLink}>
                            <NavItem iconStyle={'iconSetting'} altName="setting" title="設定" />
                        </NavLink>
                    </div>
                    <div className={styles.tweet}>
                        <div className={styles.btnTweet}>
                            <Button title="推文" size="navTweet" isAction></Button>
                        </div>
                    </div>
                </div>
                <div className={styles.logOut}>
                    <img className={styles.img} src={logout} alt="log-out" />
                    <h5 className={styles.btnName}>登出</h5>
                </div>
            </div>
        </>
    );
}
