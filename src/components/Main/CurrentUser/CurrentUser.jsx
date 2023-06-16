import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Button from '../../Button/Button.jsx';
import Header from "../../../components/Header/Header.jsx"
import UserEditModal from '../../Modal/UserEditModal/UserEditModal.jsx';
import msg from '../../../assets/icons/user/user_msg.png';
import notify from '../../../assets/icons/user/user_notfi.png';
import { useAuth } from '../../../context/AuthContext.jsx'
import { getUser } from '../../../api/user.js'
import { followUser, unFollowUser } from '../../../api/followship.js';
import { useDataStatus } from '../../../context/DataContext.jsx'
import styles from './CurrentUser.module.scss';

export default function CurrentUser() {
    const [userProfile, setUserProfile] = useState('');
    const URL = useParams();
    const userId = userProfile?.id;
    const isFollowed = userProfile?.isFollowed
    const { currentUser } = useAuth();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isClicked, setIsClicked] = useState(isFollowed);
    const {isDataUpdate, setIsDataUpdate } = useDataStatus();
    
    
    
    useEffect(() => {
        const getUserInfo = async () => {
            try {
                const data = await getUser(URL.UserId);
                if (data.status === 'error') {
                    console.log(data.message);
                    return;
                }
                if (data) {
                    // update data
                    await setUserProfile(data);
                    await setIsClicked (data.isFollowed)
                    // console.log(data);
                }
            } catch (error) {
                console.log('獲取使用者資料失敗', error);
            }
        };
        getUserInfo();
    }, [URL.UserId, isDataUpdate]);


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
                    await setIsClicked(true);
                    await setIsDataUpdate(!isDataUpdate)
                }
            }
            if (isClicked === true) {
                const data = await unFollowUser(userId);
                if (data.followingId) {
                    await setIsClicked(false);
                    await setIsDataUpdate(!isDataUpdate)
                }
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={styles.container}>
            <Header title={userProfile?.name} arrow tweetCount UserId={userId}/>
            <div className={styles.userCard}>
                <div className={styles.cover}>
                    <img src={userProfile?.coverPhoto} alt="cover" className={styles.bgImg} />
                </div>
                <div className={styles.userInfoAvatar}>
                    <img src={userProfile?.avatar} alt="avatar" className={styles.img} />
                </div>
                {userId !== currentUser?.id ? (
                <div className={styles.btnContainer}>
                    <div className={styles.msgIcon}>
                        <img src={msg} alt="msg" className={styles.msgImg} />
                    </div>
                    <div className={styles.notifyIcon}>
                        <img src={notify} alt="" className={styles.notifyImg} />
                    </div>
                    <div onClick={handleClick}>
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
                    <div className={styles.userInfoName}>{userProfile?.name}</div>
                    <div className={styles.userInfoAccount}>@{userProfile?.account}</div>
                </div>

                <div className={styles.userDescription}>
                    <div className={styles.descriptionContext}>
                        {userProfile?.introduction}
                    </div>
                    <div className={styles.follows}>
                        <Link className={styles.routeLink} to={`/user/${userId}/following`}>
                            <div className={styles.followsFollower}>
                                <span className={styles.followsCount}>{userProfile?.followingCount||0}位</span>
                                <span className={styles.followsType}>跟隨中</span>
                            </div>
                        </Link>
                        <Link className={styles.routeLink} to={`/user/${userId}/follower`}>
                            <div className={styles.followingFollower}>
                                <span className={styles.followingCount}>{userProfile?.followerCount||0}位</span>
                                <span className={styles.followingType}>跟隨者</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            {isModalOpen && <UserEditModal handleCloseModal={handleCloseModal} id={userId} oriName={userProfile?.name} oriIntroduction={userProfile?.introduction} oriAvatar={userProfile?.avatar} oriCoverImg={userProfile?.coverPhoto}/>}
        </div>
    );
}
