import { Link } from 'react-router-dom';

import Header from 'components/Header/Header';
import styles from './UserFollowerPage.module.scss';
import NavBarContainer from 'components/Navbar/NavBarContainer/NavBarContainer';
import MainContainer from 'components/Main/MainContainer/MainContainer';
import UserToggleMenu from 'components/Main/UserToggleMenu/UserToggleMenu';
import SuggestUserContainer from 'components/SuggestUser/SuggestUserContainer/SuggestUserContainer';
import FollowTypeCard from 'components/Main/FollowTypeCard/FollowTypeCard';

export default function UserFollowerPage() {
    return (
        <div className={styles.container}>
            <NavBarContainer role="user" page="main" />       
                <MainContainer>
                    <Header title="John Doe" arrow tweetCount="25" />
                    <div className={styles.userToggleMenu}>
                        <UserToggleMenu linkName="追隨者" isActive />
                        <Link to="/following">
                          <UserToggleMenu linkName="正在追蹤" />
                        </Link>
                    </div>
                    <FollowTypeCard />
                    <FollowTypeCard />
                    <FollowTypeCard />
                    <FollowTypeCard />
                    <FollowTypeCard />
                    <FollowTypeCard />
                    <FollowTypeCard />
                    <FollowTypeCard />
                </MainContainer>    
            <SuggestUserContainer />
        </div>
    );
}
