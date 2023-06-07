import { useState } from 'react'
import clsx from "clsx";

import Button from '../../Button/Button.jsx'

import modal_esc from '../../../assets/icons/modal/modal_esc.png'
import logo_gray from '../../../assets/icons/logo_gray.png'
import styles from './ReplyModal.module.scss'

export default function ReplyModal () {
  const [textInput, setTextInput] = useState('')

  const warningClassName = clsx(styles.waring, { [styles.active]: textInput.length > 140 })
  const headsUpClassName = clsx(styles.headsUp, { [styles.active]: textInput.length === 0 })
  const bodyClassName = clsx(styles.body, { [styles.active]: textInput.length > 0 })
  return (
    <div className={styles.modalContainer}>
      <div className={styles.header}>
        <img className={styles.modalEsc} src={modal_esc} alt="modal esc" />
      </div>
      <div className={styles.tweet}>
        <div className={styles.left}>
          <img className={styles.tweetAvatar} src={logo_gray} alt="logo_gray" />
          <span className={styles.line}></span>
        </div>
        <div className={styles.right}>
          <div className={styles.tweetUserInfo}>
            <span className={styles.tweetUserName}>Apple</span>
            <span className={styles.tweetUserAccount}>@apple&#xb7;3小時</span>
          </div>
          <div className={styles.tweetContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, expedita? Amet corporis vel quisquam illo consequuntur? 
          </div >
          <div className={styles.replyAddress}>
            <span className={styles.replyWord}>回覆給</span>
            <span className={styles.replyAccount}>@apple</span>
          </div>
        </div>
      </div>
      <div className={styles.positionAnchor}>
        <textarea className={bodyClassName} onChange={(event) => setTextInput(event.target.value)} >
        </textarea>
        <div className={styles.info}>
          <img className={styles.avatar} src={logo_gray} alt="logo_gray" />
          <span className={styles.placeHolder}>有什麼新鮮事？</span>
        </div>
        <div className={styles.footer}>
          <span className={warningClassName}>字數不可超過 140 字</span>
          <span className={headsUpClassName}>內容不可為空白</span>
          <Button title='推文' size='small' isAction></Button>
        </div>
      </div>
    </div>
  )
}