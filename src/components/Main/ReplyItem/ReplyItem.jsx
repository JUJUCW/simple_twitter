import logo_gray from '../../../assets/icons/logo_gray.png'
import styles from './ReplyItem.module.scss'

export default function ReplyItem () {

  return (
    
      <div className={styles.modalContainer}>
        <div className={styles.tweet}>
          <div className={styles.left}>
            <img className={styles.tweetAvatar} src={logo_gray} alt="logo_gray" />
          </div>
          <div className={styles.right}>
            <div className={styles.tweetUserInfo}>
              <span className={styles.tweetUserName}>Apple</span>
              <span className={styles.tweetUserAccount}>@apple&#xb7;3小時</span>
            </div>
            <div className={styles.replyAddress}>
              <span className={styles.replyWord}>回覆給</span>
              <span className={styles.replyAccount}> @apple</span>
            </div>
            <div className={styles.tweetContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, expedita? Amet corporis vel quisquam illo consequuntur? 
            </div >
            
          </div>
        </div>
      </div>
  )
}