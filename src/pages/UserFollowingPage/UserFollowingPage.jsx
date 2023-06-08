import Header from 'components/Header/Header';
import styles from './UserFollowingPage.module.scss';
import NavBarContainer from 'components/Navbar/NavBarContainer/NavBarContainer';
import MainContainer from 'components/Main/MainContainer/MainContainer';
import UserToggleMenu from 'components/Main/UserToggleMenu/UserToggleMenu';

import SuggestUserContainer from 'components/SuggestUser/SuggestUserContainer/SuggestUserContainer';
import FollowTypeCard from 'components/Main/FollowTypeCard/FollowTypeCard';

export default function UserFollowingPage() {
    return (
        <div className={styles.container}>
            <NavBarContainer role="user" page="main" />
            <MainContainer>
                <Header title="John Doe" arrow tweetCount="25" />
                <div className={styles.userToggleMenu}>
                    <UserToggleMenu linkName="追隨者"  />
                    <UserToggleMenu linkName="正在追蹤" isActive/>
                </div>
                <FollowTypeCard />
            </MainContainer>
            <SuggestUserContainer />
        </div>
    );
}