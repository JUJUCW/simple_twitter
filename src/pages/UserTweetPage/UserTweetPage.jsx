import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import CurrentUser from '../../components/Main/CurrentUser/CurrentUser.jsx';

// import OtherUser from '../../components/Main/OtherUser/OtherUser.jsx'

import NavBarContainer from '../../components/Navbar/NavBarContainer/NavBarContainer.jsx';
import SuggestUserContainer from '../../components/SuggestUser/SuggestUserContainer/SuggestUserContainer.jsx';
import MainContainer from '../../components/Main/MainContainer/MainContainer.jsx';
import {getUser} from '../../api/user.js'
import TweetItem from '../../components/Main/TweetItem/TweetItem.jsx';
import UserToggleMenu from '../../components/Main/UserToggleMenu/UserToggleMenu.jsx';
import Header from '../../components/Header/Header.jsx';
import styles from './UserTweetPage.module.scss';


export default function UserTweetPage() {
    const URL = useParams();
    const [userProfile, setUserProfile] = useState('')

    useEffect(() => {
    const getUserInfo = async () => {
        try {
            const data = await getUser(URL.UserId);
            if (data.status === 'error') {
                console.log(data.message);
                return;
            }
            if (data) {
                // update data
                setUserProfile(data);
                console.log(data)
            }
        } catch (error) {
            console.log('獲取使用者資料失敗', error);
        }
        }
        getUserInfo();
    }, [URL.UserId]);

    return (
        <>
            <div className={styles.container}>
                {/* <div className={styles.navBarContainer}> */}
                <NavBarContainer role="user" page="userpage" />
                {/* </div> */}
                <MainContainer>
                    <Header title={userProfile.name} arrow tweetCount="66" />
                    <div className={styles.currentContainer}>
                        <CurrentUser userInfo={userProfile}/>

                        {/* <OtherUser /> */}
                        <div className={styles.userToggleMenu}>
                            <UserToggleMenu linkName="推文" isActive />
                        <Link to="/userReply">
                            <UserToggleMenu linkName="回覆" />
                        </Link>
                        <Link to="/userLike">
                            <UserToggleMenu linkName="喜歡的內容" />
                        </Link>
                            
                        </div>
                        <TweetItem className={styles.tweetItemList} />
 
                    </div>
                </MainContainer>
                {/* <div className={styles.suggestFollowContainer}> */}
                <SuggestUserContainer />
                {/* </div> */}
            </div>
        </>
    );
}
