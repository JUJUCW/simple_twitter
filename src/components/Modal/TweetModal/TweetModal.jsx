import { useState } from 'react'
import clsx from "clsx";
import { Toast } from '../../../utility/helper.js'

import Button from '../../Button/Button.jsx'
import {postTweet} from '../../../api/tweet.js'

import modal_esc from '../../../assets/icons/modal/modal_esc.png'
import logo_gray from '../../../assets/icons/logo_gray.png'
import styles from './TweetModal.module.scss'

export default function TweetModal ({ handleCloseModal }) {
  const [textInput, setTextInput] = useState('')

  const warningClassName = clsx(styles.waring, { [styles.active]: textInput.length > 140 })
  const headsUpClassName = clsx(styles.headsUp, { [styles.active]: textInput.length === 0 })
  const bodyClassName = clsx(styles.body, { [styles.active]: textInput.length > 0 })

  const handlePostTweet = async () => {
    if (textInput.trim().length === 0) {
      setTextInput("")
      return
    }
    if (textInput.length > 140) return

    try {
      const res = await postTweet(textInput.trim());
        if (res.id) {
          Toast.fire({
            title: "推文發送成功",
            icon: "success",
          });
          setTextInput("");
          handleCloseModal()
        } else {
          Toast.fire({
            title: "推文發送失敗",
            icon: "error",
          });
        }
        } catch (error) {
          console.error(error);
          Toast.fire({
            title: "推文發送失敗",
            icon: "error",
          });
        }
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <div className={styles.header} >
          <div className={styles.modalEsc} onClick={()=>handleCloseModal()}>
            <img  className={styles.modalEscImg} src={modal_esc} alt="modal esc" />
          </div>
        </div>
        <textarea className={bodyClassName} onChange={(event) => setTextInput(event.target.value)} >
        </textarea>
        <div className={styles.info}>
          <img className={styles.avatar} src={logo_gray} alt="logo_gray" />
          <span className={styles.placeHolder}>有什麼新鮮事？</span>
        </div>
        <div className={styles.footer}>
          <span className={warningClassName}>字數不可超過 140 字</span>
          <span className={headsUpClassName}>內容不可為空白</span>
          <div className={styles.btnContainer}>
            <Button title='推文' size='small' isAction onClick={handlePostTweet}></Button>
          </div>
        </div>
      </div>
    </div>
    
  )
}