// import CurrentUser from '../../components/Main/CurrentUser/CurrentUser.jsx';

import OtherUser from '../../components/Main/OtherUser/OtherUser.jsx'


import NavBarContainer from '../../components/Navbar/NavBarContainer/NavBarContainer.jsx';
import SuggestUserContainer from '../../components/SuggestUser/SuggestUserContainer/SuggestUserContainer.jsx';
import MainContainer from '../../components/Main/MainContainer/MainContainer.jsx';

import TweetItemList from '../../components/Main/TweetItemList/TweetItemList.jsx';
import UserToggleMenu from '../../components/Main/UserToggleMenu/UserToggleMenu.jsx';
import Header from '../../components/Header/Header.jsx'
import styles from './CurrentUserTweetPage.module.scss';

export default function CurrentUserTweetPage() {
    return (
        <>
            <div className={styles.container}>
                {/* <div className={styles.navBarContainer}> */}
                <NavBarContainer role="user" page="userpage" />
                {/* </div> */}
                <MainContainer>
                    <Header title="Jane Cathy" arrow tweetCount="66" />
                    <div className={styles.currentContainer}>
                        {/* <CurrentUser /> */}
                        <OtherUser />
                        <div className={styles.userToggleMenu}>
                            <UserToggleMenu linkName="推文" isActive />
                            <UserToggleMenu linkName="回覆" />
                            <UserToggleMenu linkName="喜歡的內容" />
                        </div >
                        {/* <div className={styles.tweetItemList}> */}
                            <TweetItemList className={styles.tweetItemList}/>
                        {/* </div> */}
                        
                    </div>
                </MainContainer>
                {/* <div className={styles.suggestFollowContainer}> */}
                <SuggestUserContainer />
                {/* </div> */}
            </div>
        </>
    );
}
