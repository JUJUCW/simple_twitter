import styles from './MainPage.module.scss';

import MainContainer from 'components/MainContainer/MainContainer';
import NavBarContainer from 'components/NavBarContainer/NavBarContainer';
import SuggestFollowContainer from 'components/SuggestFollowContainer/SuggestFollowContainer';

export default function MainPage() {
    return (
        <div className={styles.container}>
            <div className={styles.navBarContainer}>
                <NavBarContainer />
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
