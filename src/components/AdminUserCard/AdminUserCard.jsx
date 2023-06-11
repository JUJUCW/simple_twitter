import admin_background from '../../assets/images/admin_background.png'
import logo_gray from '../../assets/icons/logo_gray.png'
import admin_reply from '../../assets/icons/admin/admin_reply.png'
import admin_like from '../../assets/icons/admin/admin_like.png'
import styles from './AdminUserCard.module.scss'

export default function AdminUserCard (props) {
  const avatar=props.avatar
  const name=props.name
  const coverPhoto=props.coverPhoto
  const account=props.account
  const followerCount=props.followerCount
  const followingCount=props.followingCount
  const tweetCount=props.tweetCount
  const likeCount=props.likeCount
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <img
          className={styles.coverImg}
          src={coverPhoto||admin_background}
          alt="Cover img"
        />
        <div className={styles.avatarContainer}>
          <img
            className={styles.avatar}
            src={avatar||logo_gray}
            alt="Avatar"
          />
        </div>
      </div>
      <div className={styles.infoContainer}>
        <h5 className={styles.name}>{name}</h5>
        <h5 className={styles.account}>@{account}</h5>
        <div className={styles.counts}>
          <img className={styles.icon} src={admin_reply} alt="Pen icon"/>
          <span className={styles.number}>{tweetCount||0}</span>
          <img className={styles.icon} src={admin_like} alt="Pen icon"/>
          <span className={styles.number}>{likeCount||0}</span>
        </div>
        <div className={styles.follows}>
          <span className={styles.followCount}>{followingCount||0}位</span>
          <span className={styles.followInfo}>跟隨中</span>
          <span className={styles.break}></span>
          <span className={styles.followCount}>{followerCount||0}位</span>
          <span className={styles.followInfo}>跟隨者</span>
        </div>
      </div>
    </div>
  );
}