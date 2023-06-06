import { Link, NavLink } from 'react-router-dom';
import NavItem from 'components/UIComponents/NavItem/NavItem';
import Button from 'components/Button/Button';

import style from './NavBarContainer.module.scss';

import logo from '../../assets/icons/logo.png';
import logout from '../../assets/icons/nav/nav_signout.png';

export default function NavBarContainer() {
    return (
        <>
            <div className={style.navBarContainer}>
                <div className={style.main}>
                    <Link to="/homePage">
                        <div className={style.logo}>
                            <img src={logo} alt="logo" />
                        </div>
                    </Link>
                    <div className={style.menu}>
                        <NavLink to="/homePage" className={style.btnLink}>
                            <NavItem iconStyle={'iconHomeAction'} altName="home" title="首頁" />
                        </NavLink>
                        <NavLink to="/TweetPage" className={style.btnLink}>
                            <NavItem iconStyle={'iconUser'} altName="user" title="個人資料" />
                        </NavLink>
                        <NavLink to="/SettingPage" className={style.btnLink}>
                            <NavItem iconStyle={'iconSetting'} altName="setting" title="個人資料" />
                        </NavLink>
                    </div>
                    <div className={style.tweet}>
                        {/* <img alt="tweet" /> */}
                        <div className={style.btnTweet}>
                            <Button title="推文" size="navTweet" isAction></Button>
                        </div>
                    </div>
                </div>
                <div className={style.logOut}>
                    <img src={logout} alt="log-out" />
                    <h5 className={style.btnName}>登出</h5>
                </div>
            </div>
        </>
    );
}
