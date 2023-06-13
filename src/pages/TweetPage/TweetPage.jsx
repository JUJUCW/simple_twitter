import React, { useEffect, useState } from 'react';
import {  useParams, useNavigate } from 'react-router-dom';
import styles from './TweetPage.module.scss';
import MainContainer from 'components/Main/MainContainer/MainContainer';
import NavBarContainer from 'components/Navbar/NavBarContainer/NavBarContainer';
import SuggestUserContainer from 'components/SuggestUser/SuggestUserContainer/SuggestUserContainer';
import Header from 'components/Header/Header';
import SingleTweet from 'components/Main/SingleTweet/SingleTweet';
import ReplyModal from 'components/Modal/ReplyModal/ReplyModal';
import { useAuth } from '../../context/AuthContext.jsx'
// import ATweet from 'components/Main/TweetList/ATweet';

// import TweetList from 'components/Main/TweetList/TweetList';
import { getTweet } from 'api/tweet';
// import { getReplies } from 'api/reply';

export default function TweetPage() {
    const param = useParams();
    const [tweet, setTweet] = useState('');
    // const [user, setUser] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();
    // const [replies, setReplies] = useState([]);

    // const handleOpenModal = () => {
    //     setIsModalOpen(true);
    // };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getTweet(param.tweetId);
                console.log(data)
                console.log(data.User.name)
                setTweet(data);
                
            } catch (error) {
                throw new Error(error);
            }
        };

        fetchData();
    }, [param.tweetId]);
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

    useEffect(() => {
        if (!isAuthenticated) {
        navigate('/login');
        }
    }, [navigate, isAuthenticated]);

    return (
        <div className={styles.container}>
            {/* <div className={styles.navBarContainer}> */}
            <NavBarContainer role="user" page="main" />
            {/* </div> */}
            <div className={styles.mainContainer}>
                <MainContainer>
                    <Header title="推文" arrow />
                    {tweet && <SingleTweet  tweetInfo={tweet}/>}
                </MainContainer>
            </div>
            {/* <div className={styles.suggestFollowContainer}> */}
            <SuggestUserContainer />
            {/* </div> */}
            {isModalOpen && <ReplyModal handleCloseModal={handleCloseModal} />}
        </div>
    );
}
