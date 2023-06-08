import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import NavItem from '../NavItem/NavItem.jsx';
import Button from '../../Button/Button.jsx';
import TweetModal from '../../../components/Modal/TweetModal/TweetModal.jsx';

import styles from './NavBarContainer.module.scss';

import logo from '../../../assets/icons/logo.png';
import logout from '../../../assets/icons/nav/nav_signout.png';

export default function NavBarContainer({ role, page }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        console.log('123')
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        console.log('456')
        setIsModalOpen(false);
    };
    return (
        <>
            <div className={styles.navBarContainer}>
                <Link to="/homePage">
                    <img className={styles.img} src={logo} alt="logo" />
                </Link>
                <div className={styles.main}>
                    {role === 'user' && (
                        <>
                            {page === 'main' && (
                                <>
                                    <NavLink to="/main">
                                        <NavItem iconStyle={'iconHome'} altName="main" title="首頁" isActive />
                                    </NavLink>

                                    <NavLink to="/userpage">
                                        <NavItem iconStyle={'iconUser'} altName="user" title="個人資料" />
                                    </NavLink>

                                    <NavLink to="/setting">
                                        <NavItem iconStyle={'iconSetting'} altName="setting" title="設定" />
                                    </NavLink>
                                </>
                            )}
                            {page === 'userpage' && (
                                <>
                                    <NavLink to="/main">
                                        <NavItem iconStyle={'iconHome'} altName="main" title="首頁" />
                                    </NavLink>

                                    <NavLink to="/userpage">
                                        <NavItem iconStyle={'iconUser'} altName="user" title="個人資料" isActive />
                                    </NavLink>

                                    <NavLink to="/setting">
                                        <NavItem iconStyle={'iconSetting'} altName="setting" title="設定" />
                                    </NavLink>
                                </>
                            )}
                            {page === 'setting' && (
                                <>
                                    <NavLink to="/main">
                                        <NavItem iconStyle={'iconHome'} altName="main" title="首頁" />
                                    </NavLink>

                                    <NavLink to="/userpage">
                                        <NavItem iconStyle={'iconUser'} altName="user" title="個人資料" />
                                    </NavLink>

                                    <NavLink to="/setting">
                                        <NavItem iconStyle={'iconSetting'} altName="setting" title="設定" isActive />
                                    </NavLink>
                                </>
                            )}

                            <Button title="推文" size="navTweet" isAction onClick={handleOpenModal}></Button>
                        </>
                    )}
                    {role === 'admin' && (
                        <>
                            {page === 'admintweet' && (
                                <>
                                    <NavLink to="/admin/tweets">
                                        <NavItem iconStyle={'iconHome'} altName="main" title="推文清單" isActive/>
                                    </NavLink>

                                    <NavLink to="/admin/users">
                                        <NavItem iconStyle={'iconUser'} altName="user" title="使用者列表" />
                                    </NavLink>
                                </>
                            )}
                            {page === 'adminuser' && (
                                <>
                                    <NavLink to="/admin/tweets">
                                        <NavItem iconStyle={'iconHome'} altName="main" title="推文清單" />
                                    </NavLink>

                                    <NavLink to="/admin/users">
                                        <NavItem iconStyle={'iconUser'} altName="user" title="使用者列表" isActive/>
                                    </NavLink>
                                </>
                            )}
                        </>
                    )}
                </div>
                <div className={styles.logOut}>
                    <img className={styles.img} src={logout} alt="log-out" />
                    <h5 className={styles.btnName}>登出</h5>
                </div>
                {isModalOpen && 
                    // <div className={styles.modalContainer}>
                        <TweetModal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal}/>
                    // </div>
                }
            </div>
        </>
    );
}
