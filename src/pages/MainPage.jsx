import style from './MainPage.module.scss';

import MainContainer from 'components/MainContainer/MainContainer';
import NavBarContainer from 'components/NavBarContainer/NavBarContainer';
import SuggestFollowContainer from 'components/SuggestFollowContainer/SuggestFollowContainer';

export default function MainPage() {
    return (
        <div className={style.container}>
            <div className={style.navBarContainer}>
                <NavBarContainer />
            </div>
            <div className={style.mainContainer}>
                <MainContainer />
            </div>
            <div className={style.suggestFollowContainer}>
                <SuggestFollowContainer />
            </div>
        </div>
    );
}
