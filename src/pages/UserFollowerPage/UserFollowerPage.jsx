import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getUserFollowers } from '../../api/user.js'
import { useAuth } from '../../context/AuthContext.jsx'
import { useDataStatus } from '../../context/DataContext.jsx'
import UserForFollowPage from '../../components/Main/UserForFollowPage/UserForFollowPage.jsx'
import NavBarContainer from '../../components/Navbar/NavBarContainer/NavBarContainer.jsx';
import MainContainer from '../../components/Main/MainContainer/MainContainer.jsx';
import UserToggleMenu from '../../components/Main/UserToggleMenu/UserToggleMenu.jsx';
import SuggestUserContainer from '../../components/SuggestUser/SuggestUserContainer/SuggestUserContainer.jsx';
import FollowTypeCard from '../../components/Main/FollowTypeCard/FollowTypeCard.jsx';

import styles from './UserFollowerPage.module.scss';

export default function UserFollowerPage() {
    const URL = useParams();
    const [ users, setUsers ] = useState([]);
    const { isAuthenticated, isAuthChecked } = useAuth();
    const { isDataUpdate } = useDataStatus();
    const navigate = useNavigate();

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
                    <UserForFollowPage/>
                    <div className={styles.userToggleMenu}>
                        <UserToggleMenu linkName="追隨者" isActive />
                        <Link to={`/user/${URL.UserId}/following`}>
                          <UserToggleMenu linkName="正在追蹤" />
                        </Link>
                    </div>
                    <div className={styles.navBarContainer}>
                        {followerList}
                    </div>
                </MainContainer>    
            <SuggestUserContainer />
        </div>
    );
}
