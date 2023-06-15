import { useState } from 'react'
import clsx from "clsx";
import {Toast} from '../../../utility/helper.js'
import { useAuth } from "../../../context/AuthContext.jsx";
import {postTweet} from '../../../api/tweet.js'
import { useDataStatus } from '../../../context/DataContext.jsx'
import styles from './TweetInput.module.scss';
import Button from '../../Button/Button.jsx';
import logo_gray from '../../../assets/icons/logo_gray.png'


export default function TweetInput() {
    const [textInput, setTextInput] = useState('')
    const {isDataUpdate, setIsDataUpdate } = useDataStatus();
     const { currentUser } = useAuth();

    const warningClassName = clsx(styles.waring, { [styles.active]: textInput.length > 140 })
   
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
            setIsDataUpdate(!isDataUpdate)
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
            <div className={styles.avatarContainer}>
              <img className={styles.avatar} src={currentUser?.avatar||logo_gray} alt="avatar" />
            </div>
            <textarea className={bodyClassName} onChange={(event) => setTextInput(event.target.value)} value={textInput} placeholder="有什麼新鮮事？">
            </textarea>
            
            <div className={styles.footer}>
                <span className={warningClassName}>字數不可超過 140 字</span>
          
                <div className={styles.btn}>
                    <Button title='推文' size='small' isAction onClick={handlePostTweet}></Button>
                </div>
            </div>
        </div>
       
    );
}
