import styles from './MainPage.module.scss';

import MainContainer from '../../components/Main/MainContainer/MainContainer.jsx';
import NavBarContainer from '../../components/Navbar/NavBarContainer/NavBarContainer.jsx';
import SuggestUserContainer from '../../components/SuggestUser/SuggestUserContainer/SuggestUserContainer.jsx';
import Header from '../../components/Header/Header.jsx';
import TweetInput from '../../components/Main/TweetInput/TweetInput.jsx';
import TweetItemList from '../../components/Main/TweetItemList/TweetItemList.jsx';

export default function MainPage() {
    return (
        <div className={styles.container}>
            {/* <div className={styles.navBarContainer}> */}
            <NavBarContainer role="user" page="main" />
            {/* </div> */}

            <MainContainer>
                <Header title="首頁" />
                <TweetInput />
                <TweetItemList />
            </MainContainer>

            {/* <div className={styles.suggestFollowContainer}> */}
            <SuggestUserContainer />
            {/* </div> */}
        </div>
    );
}
