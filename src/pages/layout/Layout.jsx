import style from './Layout.module.scss';

import MainContainer from 'components/MainContainer/MainContainer';
import NavBarContainer from 'components/NavBarContainer/NavBarContainer';
import SuggestFollowContainer from 'components/SuggestFollowContainer/SuggestFollowContainer';

export default function Layout() {
    return (
        <div className={style.mainContainer}>
            <NavBarContainer />
            <MainContainer />
            <SuggestFollowContainer />
        </div>
    );
}
