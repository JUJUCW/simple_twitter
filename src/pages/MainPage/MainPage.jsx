import styles from './MainPage.module.scss';

import MainContainer from '../../components/MainContainer/MainContainer.jsx';
import NavBarContainer from '../../components/NavBarContainer/NavBarContainer.jsx';
import SuggestFollowContainer from '../../components/SuggestFollowContainer/SuggestFollowContainer.jsx';

export default function MainPage() {
    return (

        <div className={styles.container}>
            <div className={styles.navBarContainer}>
                <NavBarContainer role='user'page='main'/>
            </div>
            <div className={styles.mainContainer}>
                <MainContainer />
            </div>
            <div className={styles.suggestFollowContainer}>
                <SuggestFollowContainer />
            </div>
        </div>
    );
}
