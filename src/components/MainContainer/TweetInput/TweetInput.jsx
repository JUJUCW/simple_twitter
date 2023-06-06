import style from './TweetInput.module.scss';
import Button from 'components/Button/Button';
import logo from 'assets/icons/nav/nav_home.png';

export default function TweetInput() {
    return (
        <div className={style.tweetInputContainer}>
            <div className={style.title}>
                <p className={style.p}>首頁</p>
            </div>
            <div className={style.inputContainer}>
                <div className={style.inputContainerInput}>
                    <div className={style.avatarContainer}>
                        <div className={style.avatar}>
                            <img className={style.img} src={logo} alt="user" />
                        </div>
                    </div>
                </div>
                <div className={style.inputContainerContext}>
                    <div className={style.text}>有什麼新鮮事？</div>
                    <div className={style.btn}>
                        <Button title="推文" size="small" isAction></Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
