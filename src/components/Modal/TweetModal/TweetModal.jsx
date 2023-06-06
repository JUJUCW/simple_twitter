import modal_esc from '../../../assets/icons/modal/modal_esc.png'
import logo_gray from '../../../assets/icons/logo_gray.png'
import Button from '../../Button/Button.jsx'
import styles from './TweetModal.module.scss'

export default function TweetModal () {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.header}>
        <img className={styles.modalEsc} src={modal_esc} alt="modal esc" />
      </div>
      <textarea className={styles.body}>
      </textarea>
      <div className={styles.info}>
        <img className={styles.avatar} src={logo_gray} alt="logo_gray" />
        <span className={styles.placeHolder}>有什麼新鮮事？</span>
      </div>
      <div className={styles.button}>
        <Button title='推文' size='small' isAction></Button>
      </div>
    </div>
  )
}