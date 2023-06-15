import React, { useEffect, useState } from 'react';
import {  useParams, useNavigate } from 'react-router-dom';

import styles from './TweetPage.module.scss';
import MainContainer from '../../components/Main/MainContainer/MainContainer.jsx';
import NavBarContainer from '../../components/Navbar/NavBarContainer/NavBarContainer.jsx';
import SuggestUserContainer from '../../components/SuggestUser/SuggestUserContainer/SuggestUserContainer.jsx';
import Header from '../../components/Header/Header.jsx';
import SingleTweet from '../../components/Main/SingleTweet/SingleTweet.jsx';
import SingleTweetReplyModal from '../../components/Modal/SingleTweetReplyModal/SingleTweetReplyModal.jsx';
import ReplyItem from '../../components/Main/ReplyItem/ReplyItem.jsx';
import { useAuth } from '../../context/AuthContext.jsx'
import { getTweet } from '../../api/tweet.js';
import { getTweetReplies } from '../../api/reply.js'
import { useDataStatus } from '../../context/DataContext.jsx'

export default function TweetPage() {
    const param = useParams();
    const [tweet, setTweet] = useState('');
    const [user, setUser] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { isAuthenticated, isAuthChecked } = useAuth();
    const navigate = useNavigate();
    const [replies, setReplies] = useState([]);
    const { isDataUpdate } = useDataStatus();


    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const fetchTweet = async () => {
            try {
                const data = await getTweet(param.tweetId);

                if (data.id) {
                    setTweet(data);
                    setUser(data.User);
                }
                // console.log(data)
                // console.log(data.User.name)
                setTweet(data);
            } catch (error) {
                throw new Error(error);
            }
        };
        fetchTweet();
    }, [param.tweetId, isDataUpdate]);

    useEffect(() => {
        
        const fetchReplies = async () => {
            try {
                const data = await getTweetReplies(param.tweetId);
                if (data) {
                    setReplies(data);
                }
            } catch (error) {
                throw new Error(error);
            }
        };
        fetchReplies();
    }, [param.tweetId, isDataUpdate]);


    const repliesList = replies.map((reply) => {
        return (
            <ReplyItem
                key={reply.id}
                userId={reply.User.id}
                avatar={reply.User.avatar}
                account={reply.User.account}
                name={reply.User.name}
                createdAt={reply.createdAt}
                comment={reply.comment}
                tweetAccount={reply.repliesAccount}
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
            <div className={styles.mainContainer}>
                <MainContainer>
                    <Header title="推文" arrow />
                    {tweet && <SingleTweet props={tweet} userParam={user} onClick={handleOpenModal} />}
                    <div className={styles.listContainer}>
                        {replies && repliesList}
                    </div>
                </MainContainer>
            </div>
            <SuggestUserContainer />
            {isModalOpen && <SingleTweetReplyModal handleCloseModal={handleCloseModal} props={tweet}/>}
        </div>
    );
}
