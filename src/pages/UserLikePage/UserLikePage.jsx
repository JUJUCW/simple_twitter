import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getUserLikes } from '../../api/user.js';
import { useAuth } from '../../context/AuthContext.jsx';
import { useDataStatus } from '../../context/DataContext.jsx';
import CurrentUser from '../../components/Main/CurrentUser/CurrentUser.jsx';
import NavBarContainer from '../../components/Navbar/NavBarContainer/NavBarContainer.jsx';
import SuggestUserContainer from '../../components/SuggestUser/SuggestUserContainer/SuggestUserContainer.jsx';
import MainContainer from '../../components/Main/MainContainer/MainContainer.jsx';
import TweetItem from '../../components/Main/TweetItem/TweetItem.jsx';
import UserToggleMenu from '../../components/Main/UserToggleMenu/UserToggleMenu.jsx';

import styles from './UserLikePage.module.scss';

export default function UserLikePage() {
    const URL = useParams();
    const [ userLikes, setUserLikes ] = useState([]);
    const { isAuthenticated, isAuthChecked } = useAuth();
    const { isDataUpdate } = useDataStatus();
    const navigate = useNavigate();

    useEffect(() => {
        const getUserLike = async () => {
            try {
                const data = await getUserLikes(URL.UserId);
                if (data.status === 'error') {
                    console.log(data.message);
                    return;
                }
                if (data) {
                    // update data
                    setUserLikes(data);
                }
            } catch (error) {
                console.log('獲取使用者推文失敗', error);
            }
        };
        getUserLike();
    }, [URL.UserId, isDataUpdate]);

    const likeTweetList = userLikes.map((tweet) => {
        return (
            <TweetItem
                key={tweet.TweetId}
                tweetId={tweet.TweetId}
                userId={tweet.Tweet.UserId}
                userName={tweet.Tweet.User.name}
                account={tweet.Tweet.User.account}
                avatar={tweet.Tweet.User.avatar}
                description={tweet.Tweet.description}
                likedCount={tweet.Tweet.likeCount}
                replyCount={tweet.Tweet.replyCount}
                isLiked={tweet.isLiked}
                createdAt={tweet.createdAt}
            />
        );
    });

    useEffect(() => {
        if (!isAuthenticated && isAuthChecked) {
            navigate('/login');
        }
    }, [navigate, isAuthenticated, isAuthChecked]);

    return (
        <>
            <div className={styles.container}>
                <NavBarContainer role="user" page="userPage" />
                <MainContainer>
                    <CurrentUser />
                    <div className={styles.userToggleMenu}>
                        <Link to={`/user/${URL.UserId}/tweet`}>
                            <UserToggleMenu linkName="推文" />
                        </Link>
                        <Link to={`/user/${URL.UserId}/reply`}>
                            <UserToggleMenu linkName="回覆" />
                        </Link>
                        <UserToggleMenu linkName="喜歡的內容" isActive />
                    </div>
                    <div className={styles.tweetList}>{likeTweetList}</div>
                </MainContainer>

                <SuggestUserContainer />
            </div>
        </>
    );
}
