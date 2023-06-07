import styles from './SuggestUserItem.module.scss';
import Button from 'components/Button/Button';
import logo from 'assets/icons/logo.png';

export default function SuggestUserItem() {
    return (
        <>
            <div className={styles.userItem}>
                <div className={styles.userAvatar}>
                    <img className={styles.img} src={logo} alt="avatar" />
                </div>
                <div className={styles.userInfo}>
                    <p className={styles.userInfoName}>PizzaHut</p>
                    <p className={styles.userInfoAccount}>{`@pizzahut`}</p>
                </div>
                <div className={styles.btnFollow}>
                    <div className={styles.btn}>
                        <Button title="正在跟隨" size="middle" isAction></Button>
                    </div>
                </div>
            </div>
        </>
    );
}
