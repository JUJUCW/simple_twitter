import style from './TweetInput.module.scss';

import logo from 'assets/icons/nav/nav_home@2x.png';

export default function TweetInput() {
    return (
        <div className={style.tweetInputContainer}>
            <div className={style.title}>
                <p>首頁</p>
            </div>
            <div className={style.inputContainer}>
                <div className={style.inputContainerInput}>
                    <div className={style.avatarContainer}>
                        <div className={style.avatar}>
                            <img src={logo} alt="user" />
                        </div>
                    </div>
                </div>
                <div className={style.inputContainerContext}>
                    <div className={style.text}>有什麼新鮮事？</div>
                    <div className={style.btn}>
                        <button>推文</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
