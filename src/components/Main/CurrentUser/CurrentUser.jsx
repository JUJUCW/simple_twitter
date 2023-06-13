import { Link } from 'react-router-dom';
import { useState } from 'react';
// import Header from '../../Header/Header.jsx';
import Button from '../../Button/Button.jsx';
import UserEditModal from '../../Modal/UserEditModal/UserEditModal.jsx';

// import bgImg from '../../../assets/images/default_background.png';
// import logo from '../../../assets/icons/logo_gray.png';
import styles from './CurrentUser.module.scss';

export default function CurrentUser({userInfo}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const avatar = userInfo.avatar
    const name = userInfo.name
    const account = userInfo.account
    const userId = userInfo.id;
    const introduction = userInfo.introduction
    const followerCount = userInfo.followerCount
    const followingCount = userInfo.followingCount
    const coverImg = userInfo.coverPhoto
    // const isFollowed = userInfo.isFollowed

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };



    return (
        <div className={styles.container}>
            {/* 改參數帶入後再刪掉 Header */}
            {/* <div className={styles.header}>
                <Header title="John Doe" arrow tweetCount="25" />
            </div> */}
            <div className={styles.container_scroll}>
                <div className={styles.userCard}>
                    <div className={styles.cover}>
                        <img src={coverImg} alt="cover" className={styles.bgImg} />
                    </div>
                    <div className={styles.userInfo}>
                        <div className={styles.userInfoAvatar}>
                            <img src={avatar} alt="avatar" className={styles.img} />
                        </div>
                        <div className={styles.userInfoCard}>
                            <div className={styles.userInfoName}>{name}</div>
                            <div className={styles.userInfoAccount}>@{account}</div>
                        </div>
                    </div>
                    {/* <div className={styles.btnEdit}> */}
                    <div className={styles.btnContainer}>
                        <Button title="編輯個人資料" size="edit" onClick={handleOpenModal}/>
                        {/* </div> */}
                    </div>
                    <div className={styles.userDescription}>
                        <div className={styles.descriptionContext}>
                           {introduction}
                        </div>
                        <div className={styles.follows}>
                            <Link className={styles.routeLink} to={`/follower`}>
                                <div className={styles.followsFollower}>
                                    <span className={styles.followsCount}>{followingCount||0}位</span>
                                    <span className={styles.followsType}>跟隨中</span>
                                </div>
                            </Link>
                            <Link className={styles.routeLink} to={`/following`}>
                                <div className={styles.followingFollower}>
                                    <span className={styles.followingCount}>{followerCount||0}位</span>
                                    <span className={styles.followingType}>跟隨者</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                {isModalOpen && <UserEditModal handleCloseModal={handleCloseModal} id={userId} oriName={name} oriIntroduction={introduction} oriAvatar={avatar} oriCoverImg={coverImg}/>}
            </div>
        </div>
    );
}
