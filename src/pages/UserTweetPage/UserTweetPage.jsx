import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getUserTweets } from '../../api/user.js';
import { useAuth } from '../../context/AuthContext.jsx';
import { useDataStatus } from '../../context/DataContext.jsx';
import TweetItem from '../../components/Main/TweetItem/TweetItem.jsx';
import UserToggleMenu from '../../components/Main/UserToggleMenu/UserToggleMenu.jsx';
import CurrentUser from '../../components/Main/CurrentUser/CurrentUser.jsx';
import NavBarContainer from '../../components/Navbar/NavBarContainer/NavBarContainer.jsx';
import SuggestUserContainer from '../../components/SuggestUser/SuggestUserContainer/SuggestUserContainer.jsx';
import MainContainer from '../../components/Main/MainContainer/MainContainer.jsx';

import styles from './UserTweetPage.module.scss';

export default function UserTweetPage() {
    const URL = useParams();
    const [ userTweets, setUserTweets ] = useState([]);
    const { isAuthenticated, isAuthChecked } = useAuth();
    const { isDataUpdate } = useDataStatus();
    const navigate = useNavigate();
    
    useEffect(() => {
        const getUserTweet = async () => {
            try {
                const data = await getUserTweets(URL.UserId);
                if (data.status === 'error') {
                    console.log(data.message);
                    return;
                }
                if (data) {
                    // update data
                    setUserTweets(data);
                    // console.log(data);
                }
            } catch (error) {
                console.log('獲取使用者推文失敗', error);
            }
        };
        getUserTweet();
    }, [URL.UserId, isDataUpdate]);

    const tweetList = userTweets.map((tweet) => {
        return (
            <TweetItem
                key={tweet.id}
                tweetId={tweet.id}
                userId={tweet.UserId}
                userName={tweet.User.name}
                account={tweet.User.account}
                avatar={tweet.User.avatar}
                description={tweet.description}
                likedCount={tweet.likeCount}
                replyCount={tweet.replyCount}
                isLiked={tweet.isLiked}
                createdAt={tweet.createdAt}
                // updatedAt={tweet.updatedAt}
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
            <NavBarContainer role="user" page="userPage" />
                <MainContainer>   
                    <CurrentUser />
                    <div className={styles.userToggleMenu}>
                        <UserToggleMenu linkName="推文" isActive />
                        <Link to={`/user/${URL.UserId}/reply`}>
                            <UserToggleMenu linkName="回覆" />
                        </Link>
                        <Link to={`/user/${URL.UserId}/like`}>
                            <UserToggleMenu linkName="喜歡的內容" />
                        </Link>
                    </div>
                    <div className={styles.tweetList}>{tweetList}</div>
                </MainContainer>
            <SuggestUserContainer />
        </div>
    );
}
