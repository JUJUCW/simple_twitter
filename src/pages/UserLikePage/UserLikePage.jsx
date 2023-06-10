import { Link } from 'react-router-dom';

import CurrentUser from '../../components/Main/CurrentUser/CurrentUser.jsx';
import NavBarContainer from '../../components/Navbar/NavBarContainer/NavBarContainer.jsx';
import SuggestUserContainer from '../../components/SuggestUser/SuggestUserContainer/SuggestUserContainer.jsx';
import MainContainer from '../../components/Main/MainContainer/MainContainer.jsx';

import TweetItem from '../../components/Main/TweetItem/TweetItem.jsx';
import UserToggleMenu from '../../components/Main/UserToggleMenu/UserToggleMenu.jsx';
import Header from '../../components/Header/Header.jsx';
import styles from './UserLikePage.module.scss';

export default function UserLikePage() {
    return (
        <>
            <div className={styles.container}>
            
                <NavBarContainer role="user" page="userPage" />
             
                <MainContainer>
                    <Header title="Jane Cathy" arrow tweetCount="66" />
                    <div className={styles.currentContainer}>
                        <CurrentUser />

                        <div className={styles.userToggleMenu}>
                          <Link to="/userPage">
                            <UserToggleMenu linkName="推文"  />
                          </Link>
                          <Link to="/userReply">
                            <UserToggleMenu linkName="回覆" />
                          </Link>                
                            <UserToggleMenu linkName="喜歡的內容" isActive/>
                        </div>
                        <TweetItem/>
                        
                    </div>
                </MainContainer>
              
                <SuggestUserContainer />
            
            </div>
        </>
    );
}
