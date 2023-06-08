import { useState } from 'react';

import styles from './MainPage.module.scss';

import MainContainer from '../../components/Main/MainContainer/MainContainer.jsx';
import NavBarContainer from '../../components/Navbar/NavBarContainer/NavBarContainer.jsx';
import SuggestUserContainer from '../../components/SuggestUser/SuggestUserContainer/SuggestUserContainer.jsx';
import Header from '../../components/Header/Header.jsx';
// import TweetInput from '../../components/Main/TweetInput/TweetInput.jsx';
import TweetItem from '../../components/Main/TweetItem/TweetItem.jsx';
import SingleTweet from 'components/Main/SingleTweet/SingleTweet';
import ReplyModal from '../../components/Modal/ReplyModal/ReplyModal.jsx'

export default function MainPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        console.log('123')
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        console.log('456')
        setIsModalOpen(false);
    };

    return (
        <div className={styles.container}>
            {/* <div className={styles.navBarContainer}> */}
            <NavBarContainer role="user" page="main" />
            {/* </div> */}

            <MainContainer>
                <Header title="首頁" />
                {/* <TweetInput /> */}
                <SingleTweet/>
                <TweetItem handleOpenModal={handleOpenModal}/>
                <TweetItem />
                <TweetItem />
                <TweetItem />
                <TweetItem />
                <TweetItem />
                <TweetItem />
                <TweetItem />
                <TweetItem />
            </MainContainer>

            {/* <div className={styles.suggestFollowContainer}> */}
            <SuggestUserContainer />
            {/* </div> */}
            { isModalOpen && <ReplyModal handleCloseModal={handleCloseModal}/>}
        </div>
    );
}
