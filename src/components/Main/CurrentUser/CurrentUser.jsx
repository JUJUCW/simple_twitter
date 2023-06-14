import { Link } from 'react-router-dom';
import { useState } from 'react';
// import Header from '../../Header/Header.jsx';
import Button from '../../Button/Button.jsx';
import UserEditModal from '../../Modal/UserEditModal/UserEditModal.jsx';
import msg from '../../../assets/icons/user/user_msg.png';
import notify from '../../../assets/icons/user/user_notfi.png';
import { useAuth } from '../../../context/AuthContext.jsx'
import { followUser, unFollowUser } from '../../../api/followship.js';
import { useDataStatus } from '../../../context/DataContext.jsx'
// import bgImg from '../../../assets/images/default_background.png';
// import logo from '../../../assets/icons/logo_gray.png';
import styles from './CurrentUser.module.scss';

export default function CurrentUser({userInfo}) {
    const avatar = userInfo.avatar
    const name = userInfo.name
    const account = userInfo.account
    const userId = userInfo.id;
    const introduction = userInfo.introduction
    const followerCount = userInfo.followerCount
    const followingCount = userInfo.followingCount
    const coverImg = userInfo.coverPhoto
    const isFollowed = userInfo.isFollowed
    const { currentUser } = useAuth();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isClicked, setIsClicked] = useState(isFollowed);
    const {isDataUpdate, setIsDataUpdate } = useDataStatus();

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleClick = async () => {
        try {
            if (isClicked === false) {
                const data = await followUser(userId);
                if (data.followingId) {
                    // console.log(data.followingId);
                    setIsClicked(true);
                    setIsDataUpdate(!isDataUpdate)
                }
            }
            if (isClicked === true) {
                const data = await unFollowUser(userId);
                if (data.followingId) {
                    // console.log(data.followingId);
                    setIsClicked(false);
                    setIsDataUpdate(!isDataUpdate)
                }
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.userCard}>
                <div className={styles.cover}>
                    <img src={coverImg} alt="cover" className={styles.bgImg} />
                </div>
                <div className={styles.userInfoAvatar}>
                    <img src={avatar} alt="avatar" className={styles.img} />
                </div>
                {userId !== currentUser.id ? (
                <div className={styles.btnContainer}>
                    <div className={styles.msgIcon}>
                        <img src={msg} alt="msg" className={styles.msgImg} />
                    </div>
                    <div className={styles.notifyIcon}>
                        <img src={notify} alt="" className={styles.notifyImg} />
                    </div>
                    <div className={styles.btnContainer} onClick={handleClick}>
                        {isClicked ? (
                            <Button title="正在跟隨" size="middle" isAction />
                        ) : (
                            <Button title="跟隨" size="small" />
                        )}
                    </div>
                </div>
                ) : (
                    <div className={styles.btnContainer}>
                        <Button title="編輯個人資料" size="edit" onClick={handleOpenModal} />
                    </div>
                )}
                <div className={styles.userInfoCard}>
                    <div className={styles.userInfoName}>{name}</div>
                    <div className={styles.userInfoAccount}>@{account}</div>
                </div>

                <div className={styles.userDescription}>
                    <div className={styles.descriptionContext}>
                        {introduction}
                    </div>
                    <div className={styles.follows}>
                        <Link className={styles.routeLink} to={`/user/${userId}/following`}>
                            <div className={styles.followsFollower}>
                                <span className={styles.followsCount}>{followingCount||0}位</span>
                                <span className={styles.followsType}>跟隨中</span>
                            </div>
                        </Link>
                        <Link className={styles.routeLink} to={`/user/${userId}/follower`}>
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
    );
}
