import { useState } from 'react'
import clsx from "clsx";
import {Toast} from '../../../utility/helper.js'

import {postTweet} from '../../../api/tweet.js'

import styles from './TweetInput.module.scss';
import Button from '../../Button/Button.jsx';
import logo_gray from '../../../assets/icons/logo_gray.png'
// import Header from 'components/Header/Header';

export default function TweetInput() {
    const [textInput, setTextInput] = useState('')
    const warningClassName = clsx(styles.waring, { [styles.active]: textInput.length > 140 })
    // const headsUpClassName = clsx(styles.headsUp, { [styles.active]: textInput.length === 0 })
    const bodyClassName = clsx(styles.body, { [styles.active]: textInput.length > 0 })

    const handlePostTweet = async () => {
    if (textInput.trim().length === 0) {
      setTextInput("")
      Toast.fire({
            title: "內容不可為空白",
            icon: "error",
          });
      return
    }
    if (textInput.length > 140) return

    try {
      const res = await postTweet(textInput.trim());
        if (res.id) {
            setTextInput("");
            Toast.fire({
                title: "推文發送成功",
                icon: "success",
            });
          
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
        <div className={styles.modalContainer}>
            <textarea className={bodyClassName} onChange={(event) => setTextInput(event.target.value)} >
            </textarea>
            <div className={styles.info}>
                <img className={styles.avatar} src={logo_gray} alt="logo_gray" />
                <span className={styles.placeHolder}>有什麼新鮮事？</span>
            </div>
            <div className={styles.footer}>
                <span className={warningClassName}>字數不可超過 140 字</span>
                {/* <span className={headsUpClassName}>內容不可為空白</span> */}
                <div className={styles.btn}>
                    <Button title='推文' size='small' isAction onClick={handlePostTweet}></Button>
                </div>
                
            </div>
        </div>
        // <div className={styles.tweetInputContainer}>
            
        //     <div className={styles.inputContainer}>
        //         <div className={styles.inputContainerInput}>
        //             <div className={styles.avatarContainer}>
        //                 <div className={styles.avatar}>
        //                     <img className={styles.img} src={logo} alt="user" />
        //                 </div>
        //             </div>
        //         </div>
        //         <div className={styles.inputContainerContext}>
        //             <div className={styles.text}>有什麼新鮮事？</div>
        //             <div className={styles.btn}>
        //                 <Button title="推文" size="small" isAction></Button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}
