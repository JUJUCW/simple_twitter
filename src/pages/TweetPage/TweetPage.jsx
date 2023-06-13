import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './TweetPage.module.scss';
import MainContainer from 'components/Main/MainContainer/MainContainer';
import NavBarContainer from 'components/Navbar/NavBarContainer/NavBarContainer';
import SuggestUserContainer from 'components/SuggestUser/SuggestUserContainer/SuggestUserContainer';
import Header from 'components/Header/Header';
import SingleTweet from 'components/Main/SingleTweet/SingleTweet';
import ReplyModal from 'components/Modal/ReplyModal/ReplyModal';
import ReplyItem from 'components/Main/ReplyItem/ReplyItem';

import { getTweet, getTweetReplies } from 'api/tweet';

export default function TweetPage() {
    const param = useParams();
    const [tweet, setTweet] = useState({});
    const [user, setUser] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [replies, setReplies] = useState([]);

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
            } catch (error) {
                throw new Error(error);
            }
        };
        const fetchReplies = async () => {
            try {
                const replies = await getTweetReplies(param.tweetId);
                if (replies) {
                    setReplies(replies);
                }
            } catch (error) {
                throw new Error(error);
            }
        };
        fetchTweet();
        fetchReplies();
    }, [param.tweetId]);

    const repliesList = replies.map((reply) => {
        return (
            <ReplyItem
                key={reply.id}
                avatar={reply.User.avatar}
                account={reply.User.account}
                userName={reply.User.name}
                createdAt={reply.createdAt}
                comment={reply.comment}
                tweetAccount={reply.repliesAccount}
            />
        );
    });

    return (
        <div className={styles.container}>
            {/* <div className={styles.navBarContainer}> */}
            <NavBarContainer role="user" page="main" />
            {/* </div> */}
            <div className={styles.mainContainer}>
                <MainContainer>
                    <Header title="推文" arrow />
                    <SingleTweet props={tweet} userParam={user} onClick={handleOpenModal} />
                    {repliesList}
                </MainContainer>
            </div>
            {/* <div className={styles.suggestFollowContainer}> */}
            <SuggestUserContainer />
            {/* </div> */}
            {isModalOpen && <ReplyModal handleCloseModal={handleCloseModal} />}
        </div>
    );
}
