import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header.jsx';
import styles from './UserFollowerPage.module.scss';
import NavBarContainer from '../../components/Navbar/NavBarContainer/NavBarContainer.jsx';
import MainContainer from '../../components/Main/MainContainer/MainContainer.jsx';
import UserToggleMenu from '../../components/Main/UserToggleMenu/UserToggleMenu.jsx';
import SuggestUserContainer from '../../components/SuggestUser/SuggestUserContainer/SuggestUserContainer.jsx';
import FollowTypeCard from '../../components/Main/FollowTypeCard/FollowTypeCard.jsx';
import {getUserFollowers, getUser} from '../../api/user.js'
import { useAuth } from '../../context/AuthContext.jsx'
import { useDataStatus } from '../../context/DataContext.jsx'

export default function UserFollowerPage() {
    const [users, setUsers] = useState([]);
    const URL = useParams();
    const { isAuthenticated, isAuthChecked } = useAuth();
    const navigate = useNavigate();
    const { isDataUpdate } = useDataStatus();
    const [userProfile, setUserProfile] = useState('')

    useEffect(() => {
    const getUserFollower = async () => {
        try {
            const data = await getUserFollowers(URL.UserId);
            if (data.status === 'error') {
                console.log(data.message);
                return;
            }
            if (data) {
                // update data
                setUsers(data);
            }
        } catch (error) {
            console.log('獲取跟隨者失敗', error);
        }
        }
        getUserFollower();
    }, [URL.UserId, isDataUpdate]);

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
                    setUserProfile(data);
                    console.log(data);
                }
            } catch (error) {
                console.log('獲取使用者資料失敗', error);
            }
        };
        getUserInfo();
    }, [URL.UserId, isDataUpdate]);

    const followerList = users.map((user) => {
        return (
        <FollowTypeCard
            key={user.followerId}
            userId={user.followerId}
            avatar={user.avatar}
            name={user.name}
            account={user.account}
            introduction={user.introduction}
            isFollowed={user.isFollowed}
        />
        );
    });

    useEffect(() => {
        if (!isAuthenticated && isAuthChecked) {
        navigate('/login');
        }
    }, [navigate, isAuthenticated, isAuthChecked]);

    return (
        <div className={styles.container}>
            <NavBarContainer role="user" page="main" />       
                <MainContainer>

                 

                    <Header title={userProfile.name} arrow tweetCount="25" />

                    <div className={styles.userToggleMenu}>
                        <UserToggleMenu linkName="追隨者" isActive />
                        <Link to={`/user/${URL.UserId}/following`}>
                          <UserToggleMenu linkName="正在追蹤" />
                        </Link>
                    </div>
                    {followerList}
                </MainContainer>    
            <SuggestUserContainer />
        </div>
    );
}
