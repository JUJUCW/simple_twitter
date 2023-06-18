import { useState } from 'react'
import { Toast } from '../../../utility/helper.js'
import { useAuth } from "../../../context/AuthContext.jsx";
import { useDataStatus } from '../../../context/DataContext.jsx'
import clsx from "clsx";
import Button from '../../Button/Button.jsx'
import usePostTweet from '../../../hooks/usePostTweet.js'

import modal_esc from '../../../assets/icons/modal/modal_esc.png'
import logo_gray from '../../../assets/icons/logo_gray.png'
import styles from './TweetModal.module.scss'

export default function TweetModal ({ handleCloseModal }) {
  const [textInput, setTextInput] = useState('')
  const {isDataUpdate, setIsDataUpdate } = useDataStatus();
  const { currentUser } = useAuth();
  const { isUpdating, postTweetHook } = usePostTweet()

  const warningClassName = clsx(styles.waring, { [styles.active]: textInput.length > 140 })
  const headsUpClassName = clsx(styles.headsUp, { [styles.active]: textInput.length === 0 })
  const bodyClassName = clsx(styles.body, { [styles.active]: textInput.length > 0 })

  const handlePostTweet = async () => {
    if (textInput.trim().length === 0) {
      setTextInput("")
      Toast.fire({
          title: '內容不可空白',
          icon: 'error',
      });
      return
    }
    if (textInput.length > 140) return
    await postTweetHook(textInput)
    await setTextInput("");
    await setIsDataUpdate(!isDataUpdate)
    await handleCloseModal()

  }

  const handleCloseModalAtBg = (e) => {
    if (isUpdating) return
    if (e.target.classList.contains(styles.modalOverlay)) {
        handleCloseModal()
    }
  }

  return (
    <div className={styles.modalOverlay} onClick={handleCloseModalAtBg}>
      <div className={styles.modalContainer}>
        <div className={styles.header} >
          <div className={styles.modalEsc} onClick={()=>handleCloseModal()}>
            <img  className={styles.modalEscImg} src={modal_esc} alt="modal esc" />
          </div>
          <div className={styles.headerBtn}>
            <Button title='推文' size='small' isAction onClick={handlePostTweet}></Button>
          </div>
        </div>
        <textarea className={bodyClassName} onChange={(event) => setTextInput(event.target.value)} value={textInput}>
        </textarea>
        <div className={styles.info}>
          <div className={styles.avatarContainer}>
            <img className={styles.avatar} src={currentUser.avatar||logo_gray} alt="avatar" />
          </div>
          <span className={styles.placeHolder}>有什麼新鮮事？</span>
        </div>
        <div className={styles.footer}>
          <span className={warningClassName}>字數不可超過 140 字</span>
          <span className={headsUpClassName}>內容不可空白</span>
          <div className={styles.btnContainer}>
            <Button title='推文' size='small' isAction onClick={handlePostTweet}></Button>
          </div>
        </div>
      </div>
    </div>
    
  )
}