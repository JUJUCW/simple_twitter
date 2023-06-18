import { useState } from 'react';

import {  NavLink } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext.jsx'
import NavItem from '../NavItem/NavItem.jsx';
import Button from '../../Button/Button.jsx';
import TweetModal from '../../../components/Modal/TweetModal/TweetModal.jsx';

import logo from '../../../assets/icons/logo.png';
import logoutImg from '../../../assets/icons/nav/nav_signout.png';
import tweetIcon from '../../../assets/icons/nav/nav_btn.png'
import styles from './NavBarContainer.module.scss';


export default function NavBarContainer({ role, page }) {
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const { logout, currentUser } = useAuth();

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    
    return (
        <>
            <div className={styles.navBarContainer}>
                <img className={styles.img} src={logo} alt="logo" />
                <div className={styles.main}>
                    {role === 'user' && (
                        <>
                            {page === 'main' && (
                                <>
                                    <NavLink to="/main">
                                        <NavItem iconStyle={'iconHome'} altName="main" title="首頁" isActive />
                                    </NavLink>

                                    <div className={styles.tweetBtn}>
                                        <img
                                            className={styles.tweetIcon}
                                            src={tweetIcon}
                                            alt="tweetIcon"
                                            onClick={handleOpenModal}
                                        />
                                    </div>

                                    <NavLink to={`/user/${currentUser?.id}/tweet`}>
                                        <NavItem iconStyle={'iconUser'} altName="user" title="個人資料" />
                                    </NavLink>

                                    <NavLink to="/setting">
                                        <NavItem iconStyle={'iconSetting'} altName="setting" title="設定" />
                                    </NavLink>
                                </>
                            )}
                            {page === 'userPage' && (
                                <>
                                    <NavLink to="/main">
                                        <NavItem iconStyle={'iconHome'} altName="main" title="首頁" />
                                    </NavLink>

                                    <div className={styles.tweetBtn}>
                                        <img
                                            className={styles.tweetIcon}
                                            src={tweetIcon}
                                            alt="tweetIcon"
                                            onClick={handleOpenModal}
                                        />
                                    </div>

                                    <NavLink to={`/user/${currentUser?.id}/tweet`}>
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

                                    <div className={styles.tweetBtn}>
                                        <img
                                            className={styles.tweetIcon}
                                            src={tweetIcon}
                                            alt="tweetIcon"
                                            onClick={handleOpenModal}
                                        />
                                    </div>

                                    <NavLink to={`/user/${currentUser?.id}/tweet`}>
                                        <NavItem iconStyle={'iconUser'} altName="user" title="個人資料" />
                                    </NavLink>

                                    <NavLink to="/setting">
                                        <NavItem iconStyle={'iconSetting'} altName="setting" title="設定" isActive />
                                    </NavLink>
                                </>
                            )}
                            <div className={styles.btn}>
                                <Button title="推文" size="navTweet" isAction onClick={handleOpenModal}></Button>
                            </div>
                        </>
                    )}
                    {role === 'admin' && (
                        <>
                            {page === 'admintweet' && (
                                <>
                                    <NavLink to="/admin/tweets">
                                        <NavItem iconStyle={'iconHome'} altName="main" title="推文清單" isActive />
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
                                        <NavItem iconStyle={'iconUser'} altName="user" title="使用者列表" isActive />
                                    </NavLink>
                                </>
                            )}
                        </>
                    )}
                </div>
                <div className={styles.logOut} onClick={() => logout()}>
                    <img className={styles.img} src={logoutImg} alt="log-out" />
                    <h5 className={styles.btnName}>登出</h5>
                </div>
                {isModalOpen && <TweetModal handleCloseModal={handleCloseModal} />}
            </div>
        </>
    );
}
