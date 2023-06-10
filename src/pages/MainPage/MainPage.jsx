import { useState, useEffect } from 'react';

import styles from './MainPage.module.scss';

import MainContainer from '../../components/Main/MainContainer/MainContainer.jsx';
import NavBarContainer from '../../components/Navbar/NavBarContainer/NavBarContainer.jsx';
import SuggestUserContainer from '../../components/SuggestUser/SuggestUserContainer/SuggestUserContainer.jsx';
import Header from '../../components/Header/Header.jsx';
// import TweetInput from '../../components/Main/TweetInput/TweetInput.jsx';
import TweetInput from 'components/Main/TweetInput/TweetInput';
import TweetItem from '../../components/Main/TweetItem/TweetItem.jsx';
// import SingleTweet from 'components/Main/SingleTweet/SingleTweet';
import ReplyModal from '../../components/Modal/ReplyModal/ReplyModal.jsx';

import {getAllTweets} from '../../api/tweet.js'

export default function MainPage() {
    const [tweets, setTweets] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        async function getAllTweet() {
            const data = await getAllTweets();
            if (data.status ==="error") {
                console.log(data.message)
                return
            }
            if (data) {
            // update data
            setTweets(data);
            }
        }
        getAllTweet();
       
    }, []);

     const tweetList = tweets.map((tweet) => {
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
            updatedAt={tweet.updatedAt}
            handleOpenModal={handleOpenModal}
        />
        );
    });

    return (
        <div className={styles.container}>
            {/* <div className={styles.navBarContainer}> */}
            <NavBarContainer role="user" page="main" />
            {/* </div> */}
            <div className={styles.navBarContainer}>
                <MainContainer>
                    <Header title="首頁" />

                    <TweetInput />
                    {/* <SingleTweet /> */}
                    {tweetList}
                </MainContainer>
            </div>
            {/* <div className={styles.suggestFollowContainer}> */}
            <SuggestUserContainer />
            {/* </div> */}
            {isModalOpen && <ReplyModal handleCloseModal={handleCloseModal} />}
        </div>
    );
}
