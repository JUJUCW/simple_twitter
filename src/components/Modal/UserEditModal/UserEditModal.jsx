import { useState } from 'react';

import Button from '../../Button/Button.jsx';
import AuthInput from '../../Auth/AuthInput/AuthInput.jsx';
import EditInput from '../../EditInput/EditInput.jsx'

import bgImg from '../../../assets/images/default_background.png';
import logo from '../../../assets/icons/logo_gray.png';
import modal_esc from '../../../assets/icons/modal/modal_esc.png'
import styles from './UserEditModal.module.scss';

export default function UserEditModal () {
  const [name, setName] = useState("");
  const [introduction, setIntroduction] = useState("");
    return (
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.left}>
              <img className={styles.modalEsc} src={modal_esc} alt="modal esc" />
              <h5>編輯個人資料</h5>
            </div>
            <Button title='推文' size='small' isAction></Button>
          </div>
          <div className={styles.userCard}>
            <div className={styles.cover}>
                <img src={bgImg} alt="cover" className={styles.bgImg} />
            </div>
            <div className={styles.userInfoAvatar}>
                <img src={logo} alt="avatar" className={styles.img} />
            </div>
          </div> 
          <div className={styles.infoEdit}>
            <AuthInput label='名稱' value={name} onChange={(nameInputValue) => setName(nameInputValue)} notification='字數超出上限!' wordsLimit={50}
            />
            <EditInput label='自我介紹' value={introduction} onChange={(introInputValue) => setIntroduction(introInputValue)} notification='字數超出上限!' wordsLimit={160}
            />
          </div>       
      </div>
    );
}
