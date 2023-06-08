

import styles from './AdminTweetItem.module.scss';
import logo from '../../assets/icons/logo_gray.png';
import admin_delete from '../../assets/icons/admin/admin_delete.png'


export default function AdminTweetItem () {
  
    return (
        <div className={styles.container}>
            <div className={styles.avatar}>
                <img className={styles.avatarImg} src={logo} alt="avatar" />
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.userInfo}>
                    <h5 className={styles.name}>Apple</h5>
                    <span className={styles.account}>@apple</span>
                    <span className={styles.tweetTime}>&#xb7;3 小時</span>
                </div>
                <div className={styles.tweetContent}>
                    Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate
                    exercitation incididunt aliquip deserunt reprehenderit elit laborumexercitation incididunt 
                </div>
            </div>
            <div className={styles.adminDelete}>
              <img className={styles.deleteImg} src={admin_delete} alt="admin_delete" />
            </div>
        </div>
    );
}
