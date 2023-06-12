import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header.jsx';
import styles from './UserFollowerPage.module.scss';
import NavBarContainer from '../../components/Navbar/NavBarContainer/NavBarContainer.jsx';
import MainContainer from '../../components/Main/MainContainer/MainContainer.jsx';
import UserToggleMenu from '../../components/Main/UserToggleMenu/UserToggleMenu.jsx';
import SuggestUserContainer from '../../components/SuggestUser/SuggestUserContainer/SuggestUserContainer.jsx';
import FollowTypeCard from '../../components/Main/FollowTypeCard/FollowTypeCard.jsx';
import {getUserFollowers} from '../../api/user.js'

export default function UserFollowerPage() {
    const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUserFollower = async () => {
        try {
            const data = await getUserFollowers();
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
    }, []);

    const followerList = users.map((user) => {
        return (
        <FollowTypeCard
            key={user.id}
            avatar={user.avatar}
            name={user.name}
            coverPhoto={user.coverPhoto}
            account={user.account}
            followerCount={user.followerCounts}
            followingCount={user.followingCounts}
            tweetCount={user.tweetCounts}
            likeCount={user.likeCounts}
        />
        );
    });


    return (
        <div className={styles.container}>
            <NavBarContainer role="user" page="main" />       
                <MainContainer>
                    <Header title="John Doe" arrow tweetCount="25" />
                    <div className={styles.userToggleMenu}>
                        <UserToggleMenu linkName="追隨者" isActive />
                        <Link to="/following">
                          <UserToggleMenu linkName="正在追蹤" />
                        </Link>
                    </div>
                    {followerList}
                </MainContainer>    
            <SuggestUserContainer />
        </div>
    );
}
