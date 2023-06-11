import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import styles from './TweetPage.module.scss';
import MainContainer from 'components/Main/MainContainer/MainContainer';
import NavBarContainer from 'components/Navbar/NavBarContainer/NavBarContainer';
import SuggestUserContainer from 'components/SuggestUser/SuggestUserContainer/SuggestUserContainer';
import Header from 'components/Header/Header';
import SingleTweet from 'components/Main/SingleTweet/SingleTweet';
import ReplyModal from 'components/Modal/ReplyModal/ReplyModal';
// import ATweet from 'components/Main/TweetList/ATweet';

// import TweetList from 'components/Main/TweetList/TweetList';
import { getTweet } from 'api/tweet';
// import { getReplies } from 'api/reply';

export default function TweetPage() {
    const param = useParams();
    const [tweet, setTweet] = useState({});
    const [user, setUser] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const [replies, setReplies] = useState([]);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getTweet(param.tweetId);
                const data = res.data;
                setTweet(data);
                setUser(data.User);
            } catch (error) {
                throw new Error(error);
            }
        };

        fetchData();
    }, []);

    // useEffect(() => {
    //     const fetchReplies = async () => {
    //         try {
    //             const res = await getReplies(param.tweetId);
    //             const data = res.data;
            
    //             setReplies(data.replies);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     fetchReplies();
    // }, []);

    return (
        <div className={styles.container}>
            {/* <div className={styles.navBarContainer}> */}
            <NavBarContainer role="user" page="main" />
            {/* </div> */}
            <div className={styles.mainContainer}>
                <MainContainer>
                    <Header title="推文" arrow />
                    <SingleTweet props={tweet} onClick={handleOpenModal} userName={user.name} />
                </MainContainer>
            </div>
            {/* <div className={styles.suggestFollowContainer}> */}
            <SuggestUserContainer />
            {/* </div> */}
            {isModalOpen && <ReplyModal handleCloseModal={handleCloseModal} />}
        </div>
    );
}
