import { Link, NavLink } from 'react-router-dom';
import NavItem from 'components/UIComponents/NavItem/NavItem';
import Button from 'components/Button/Button';

import styles from './NavBarContainer.module.scss';

import logo from '../../assets/icons/logo.png';
import logout from '../../assets/icons/nav/nav_signout.png';

export default function NavBarContainer({role}) {
    return (
        <>
            <div className={styles.navBarContainer}>
                <Link to="/homePage">
                    
                    <img className={styles.img} src={logo} alt="logo" />
                  
                </Link>
                <div className={styles.main}>
                    {role ==='user' && 
                    <>
                        <NavLink to="/main">
                            <NavItem iconStyle={'iconHome'} altName="main" title="首頁" />
                        </NavLink>

                        <NavLink to="/TweetPage" >
                            <NavItem iconStyle={'iconUser'} altName="user" title="個人資料" />
                        </NavLink>

                        <NavLink to="/setting" >
                            <NavItem iconStyle={'iconSetting'} altName="setting" title="設定" />
                        </NavLink>
                    
                        <Button title="推文" size="navTweet" isAction></Button>
                       
                    </>
                    }
                    {role ==='admin' && 
                    <>
                        <NavLink to="/admin/tweets" >
                            <NavItem iconStyle={'iconHome'} altName="home" title="推文清單" />
                        </NavLink>

                        <NavLink to="/admin/users" >
                            <NavItem iconStyle={'iconUser'} altName="user" title="使用者列表" />
                        </NavLink>
                    </>
                    }
                </div>
                <div className={styles.logOut}>
                    <img className={styles.img} src={logout} alt="log-out" />
                    <h5 className={styles.btnName}>登出</h5>
                </div>
            </div>
        </>
    );
}
