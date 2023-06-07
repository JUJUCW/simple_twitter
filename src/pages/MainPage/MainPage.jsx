import styles from './MainPage.module.scss';

import MainContainer from '../../components/MainContainer/MainContainer.jsx';
import NavBarContainer from '../../components/NavBarContainer/NavBarContainer.jsx';
import SuggestFollowContainer from '../../components/SuggestFollowContainer/SuggestFollowContainer.jsx';
import Header from '../../components/Header/Header.jsx';
import TweetInput from '../../components/MainContainer/TweetInput/TweetInput.jsx';
import TweetListItem from '../../components/UIComponents/NavItem/ListItem/TweetListItem.jsx';

export default function MainPage() {
    return (
        <div className={styles.container}>
            {/* <div className={styles.navBarContainer}> */}
            <NavBarContainer role="user" page="main" />
            {/* </div> */}

            <MainContainer>
                <Header title="首頁" />
                <TweetInput />
                <TweetListItem />
            </MainContainer>

            {/* <div className={styles.suggestFollowContainer}> */}
            <SuggestFollowContainer />
            {/* </div> */}
        </div>
    );
}
