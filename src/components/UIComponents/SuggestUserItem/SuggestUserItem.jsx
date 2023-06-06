import style from './SuggestUserItem.module.scss';
import Button from 'components/Button/Button';
import logo from 'assets/icons/logo.png';

export default function SuggestUserItem() {
    return (
        <>
            <div className={style.userItem}>
                <div className={style.userAvatar}>
                    <img className={style.img} src={logo} alt="avatar" />
                </div>
                <div className={style.userInfo}>
                    <p className={style.userInfoName}>PizzaHut</p>
                    <p className={style.userInfoAccount}>{`@pizzahut`}</p>
                </div>
                <div className={style.btnFollow}>
                    <div className={style.btn}>
                        <Button title="正在跟隨" size="middle" isAction></Button>
                    </div>
                </div>
            </div>
        </>
    );
}
