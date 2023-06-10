import { Link } from 'react-router-dom';

import CurrentUser from '../../components/Main/CurrentUser/CurrentUser.jsx';
import NavBarContainer from '../../components/Navbar/NavBarContainer/NavBarContainer.jsx';
import SuggestUserContainer from '../../components/SuggestUser/SuggestUserContainer/SuggestUserContainer.jsx';
import MainContainer from '../../components/Main/MainContainer/MainContainer.jsx';

// import ReplyItem from '../../components/Main/ReplyItem/ReplyItem.jsx';
import UserToggleMenu from '../../components/Main/UserToggleMenu/UserToggleMenu.jsx';
import Header from '../../components/Header/Header.jsx';
import styles from './UserReplyPage.module.scss';

export default function UserReplyPage() {
    return (
        <>
            <div className={styles.container}>
            
                <NavBarContainer role="user" page="userpage" />
             
                <MainContainer>
                    <Header title="Jane Cathy" arrow tweetCount="66" />
                    <div className={styles.currentContainer}>
                        <CurrentUser />

                        <div className={styles.userToggleMenu}>
                          <Link to="/userPage">
                            <UserToggleMenu linkName="推文"  />
                          </Link>
                            <UserToggleMenu linkName="回覆" isActive/>
                            <UserToggleMenu linkName="喜歡的內容" />
                        </div>
                        {/* <ReplyItem/>
                        <ReplyItem/>
                        <ReplyItem/>
                        <ReplyItem/>
                        <ReplyItem/>
                        <ReplyItem/>
                        <ReplyItem/> */}
                        
                    </div>
                </MainContainer>
              
                <SuggestUserContainer />
            
            </div>
        </>
    );
}
