import CurrentUser from 'components/CurrentUser/CurrentUser';
import styles from './CurrentUserTweetPage.module.scss';
import OtherUser from 'components/CurrentUser/OtherUser';

import NavBarContainer from 'components/NavBarContainer/NavBarContainer';
import SuggestFollowContainer from 'components/SuggestFollowContainer/SuggestFollowContainer';
import MainContainer from 'components/MainContainer/MainContainer';
import Header from 'components/Header/Header';

import TweetListItem from 'components/UIComponents/NavItem/ListItem/TweetListItem';
import UserToggleMenu from 'components/UIComponents/ToggleMenu/UserToggleMenu';

export default function CurrentUserTweetPage() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.navBarContainer}>
                    <NavBarContainer role="user" page="main" />
                </div>
                <MainContainer>
                    <Header title="Jane Cathy" arrow tweetCount="66" />
                    <div className={styles.currentContainer}>
                        <CurrentUser />
                        {/* <OtherUser /> */}
                        <div className={styles.userToggleMenu}>
                            <UserToggleMenu linkName="推文" isActive />
                            <UserToggleMenu linkName="回覆" />
                            <UserToggleMenu linkName="喜歡的內容" />
                        </div>
                        <TweetListItem />
                    </div>
                </MainContainer>
                <div className={styles.suggestFollowContainer}>
                    <SuggestFollowContainer />
                </div>
            </div>
        </>
    );
}
