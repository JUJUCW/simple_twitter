import Button from '../../../components/Button/Button.jsx'
import styles from './AdminDeleteModal.module.scss';

export default function AdminDeleteModal ( props ) {
   
    const avatar = props&&props.avatar;
    const description = props&&props.description;
    const tweetId = props&&props.tweetId
    const handleCloseModal = props&&props.handleCloseModal
    const handleDeleteTweet = props&&props.handleDeleteTweet

    const handleCloseModalAtBg = (e) => {
        // if (isUpdating) return
        if (e.target.classList.contains(styles.modalOverlay)) {
            handleCloseModal()
        }
    }

    return (
        <div className={styles.modalOverlay} onClick={handleCloseModalAtBg}>
          <div className={styles.modalContainer}>
            <h4 className={styles.title}>是否要刪除此推文?</h4>
            <div className={styles.tweet}>
                <div className={styles.avatarContainer}>
                    <img className={styles.avatar} src={avatar} alt="avatar" />
                </div>                  
                <div className={styles.tweetContent}>{description}</div>
            </div>
            <div className={styles.btnContainer}>
              <Button title="確認" size="small" isAction onClick={()=>handleDeleteTweet(tweetId)}/>
              <Button title="取消" size="small" isAction onClick={handleCloseModal}/>
            </div>
          </div>
        </div>
       
    );
}
