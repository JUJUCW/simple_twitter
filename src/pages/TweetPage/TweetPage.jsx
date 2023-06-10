import React, { useEffect, useState } from 'react';
import styles from './TweetPage.module.scss';
import MainContainer from 'components/Main/MainContainer/MainContainer';
import NavBarContainer from 'components/Navbar/NavBarContainer/NavBarContainer';
import SuggestUserContainer from 'components/SuggestUser/SuggestUserContainer/SuggestUserContainer';
import Header from 'components/Header/Header';
import SingleTweet from 'components/Main/SingleTweet/SingleTweet';
import ReplyModal from 'components/Modal/ReplyModal/ReplyModal';

// import TweetList from 'components/Main/TweetList/TweetList';
import { getTweet } from 'api/tweet';

export default function TweetPage() {
    const [tweets, setTweets] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        async function getATweet() {
            const data = await getTweet();
            if (data.status === 'error') {
                console.log(data.message);
                return;
            }
            if (data) {
                // update data
                setTweets(data);
            }
        }
        getATweet();
    }, []);

    return (
        <div className={styles.container}>
            {/* <div className={styles.navBarContainer}> */}
            <NavBarContainer role="user" page="main" />
            {/* </div> */}
            <div className={styles.mainContainer}>
                <MainContainer>
                    <Header title="推文" arrow />

                    <SingleTweet tweets={tweets} onClick={handleOpenModal} />
                </MainContainer>
            </div>
            {/* <div className={styles.suggestFollowContainer}> */}
            <SuggestUserContainer />
            {/* </div> */}
            {isModalOpen && <ReplyModal handleCloseModal={handleCloseModal} />}
        </div>
    );
}
