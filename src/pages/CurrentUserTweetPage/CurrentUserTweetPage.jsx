// import CurrentUser from 'components/CurrentUser/CurrentUser';
import OtherUser from 'components/CurrentUser/OtherUser'
import styles from './CurrentUserTweetPage.module.scss';
import NavBarContainer from 'components/NavBarContainer/NavBarContainer';
import SuggestFollowContainer from 'components/SuggestFollowContainer/SuggestFollowContainer';

export default function CurrentUserTweetPage() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.navBarContainer}>
                    <NavBarContainer />
                </div>
                <div className={styles.mainContainer}>
                    {/* <CurrentUser /> */}
                    <OtherUser/>
                </div>
                <div className={styles.suggestFollowContainer}>
                    <SuggestFollowContainer />
                </div>
            </div>
        </>
    );
}
