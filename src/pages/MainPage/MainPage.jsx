import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext.jsx';
import { getAllTweets } from '../../api/tweet.js';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDataStatus } from '../../context/DataContext.jsx';
import MainContainer from '../../components/Main/MainContainer/MainContainer.jsx';
import NavBarContainer from '../../components/Navbar/NavBarContainer/NavBarContainer.jsx';
import SuggestUserContainer from '../../components/SuggestUser/SuggestUserContainer/SuggestUserContainer.jsx';
import Header from '../../components/Header/Header.jsx';
import TweetInput from '../../components/Main/TweetInput/TweetInput.jsx';
import TweetItem from '../../components/Main/TweetItem/TweetItem.jsx';

import styles from './MainPage.module.scss';

export default function MainPage() {
    const { isAuthenticated, isAuthChecked } = useAuth();
    const [tweets, setTweets] = useState([]);
    const navigate = useNavigate();
    const { isDataUpdate } = useDataStatus();
    const { pathname } = useLocation()

    useEffect(() => {
        const getAllTweet = async () => {
            try {
                const data = await getAllTweets();
                if (data.status === 'error') {
                    console.log(data.message);
                    return;
                }
                if (data) {
                    // update data
                    setTweets(data);
                }
            } catch (error) {
                console.log('獲取推文失敗', error);
            }
        };
        getAllTweet();
    }, [isDataUpdate]);

    const tweetList = tweets.length > 0 ?tweets.map((tweet) => {
        return (
            <TweetItem
                key={tweet.id}
                tweetId={tweet.id}
                userId={tweet.UserId}
                userName={tweet.User.name}
                account={tweet.User.account}
                avatar={tweet.User.avatar}
                description={tweet.description}
                likedCount={tweet.likedCount}
                replyCount={tweet.replyCount}
                isLiked={tweet.isLiked}
                createdAt={tweet.createdAt}
            />
        );
    }): null;

    useEffect(() => {
        if (!isAuthenticated && isAuthChecked) {
            navigate('/login');
        }
    }, [pathname, navigate, isAuthenticated, isAuthChecked]);

    return (
        <div className={styles.container}>
            <NavBarContainer role="user" page="main" />

            <MainContainer>
                <Header title="首頁" />
                <TweetInput />
                <div className={styles.navBarContainer}>{tweets && tweetList}</div>
            </MainContainer>

            <SuggestUserContainer />
        </div>
    );
}
