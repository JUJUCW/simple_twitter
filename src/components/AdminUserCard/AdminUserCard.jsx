import admin_background from '../../assets/images/admin_background.png'
import logo_gray from '../../assets/icons/logo_gray.png'
import admin_reply from '../../assets/icons/admin/admin_reply.png'
import admin_like from '../../assets/icons/admin/admin_like.png'
import styles from './AdminUserCard.module.scss'

export default function AdminUserCard () {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <img
          className={styles.coverImg}
          src={admin_background}
          alt="Cover img"
        />
        <div className={styles.avatarContainer}>
          <img
            className={styles.avatar}
            src={logo_gray}
            alt="Avatar"
          />
        </div>
      </div>
      <div className={styles.infoContainer}>
        <h5 className={styles.name}>John Doe</h5>
        <h5 className={styles.account}>@heyjohn</h5>
        <div className={styles.counts}>
          <img className={styles.icon} src={admin_reply} alt="Pen icon"/>
          <span className={styles.number}>1.5k</span>
          <img className={styles.icon} src={admin_like} alt="Pen icon"/>
          <span className={styles.number}>20k</span>
        </div>
        <div className={styles.follows}>
          <span className={styles.followCount}>34個</span>
          <span className={styles.followInfo}>跟隨中</span>
          <span className={styles.break}></span>
          <span className={styles.followCount}>59位</span>
          <span className={styles.followInfo}>跟隨者</span>
        </div>
      </div>
    </div>
  );
}