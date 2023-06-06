import SuggestUserItem from 'components/UIComponents/SuggestUserItem/SuggestUserItem';
import style from './SuggestFollowContainer.module.scss';

export default function SuggestFollowContainer() {
    return (
        <div className={style.SuggestFollowContainer}>
            <div className={style.suggestUserTitle}>推薦跟隨</div>
            <div className={style.line}></div>
            <div className={style.suggestUserCard}>
                <SuggestUserItem />
                <SuggestUserItem />
                <SuggestUserItem />
                <SuggestUserItem />
            </div>
        </div>
    );
}
