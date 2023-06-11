import { useState } from 'react';

import Button from '../../Button/Button.jsx';
import AuthInput from '../../Auth/AuthInput/AuthInput.jsx';
import EditInput from '../../EditInput/EditInput.jsx'

import bgImg from '../../../assets/images/default_background.png';
import logo from '../../../assets/icons/logo_gray.png';
import modal_esc from '../../../assets/icons/modal/modal_esc.png'
import modal_upload from '../../../assets/icons/modal/modal_upload.png'
import modal_cancel from '../../../assets/icons/modal/modal_cancel.png'
import styles from './UserEditModal.module.scss';

export default function UserEditModal ({handleCloseModal}) {
  const [coverImg, setCoverImg] = useState(bgImg)
  const [avatarImg, setAvatarImg] = useState(logo)
  const [name, setName] = useState("");
  const [introduction, setIntroduction] = useState("");

  const handleImgChange = (e, type) => {
    if (!e.target.files[0]) {
      return;
    }
    const selectedFile = e.target.files[0];
    const objectUrl = URL.createObjectURL(selectedFile);
    console.log(objectUrl);
    if (type === "cover") {
      setCoverImg(objectUrl);
    } else if (type === "avatar") {
      setAvatarImg(objectUrl);
    }
  };

  const handleCancelImg = () => {
    setCoverImg(bgImg);
  }

    return (
      <div className={styles.modalOverlay}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.left}>
              <div onClick={handleCloseModal}>
                <img className={styles.modalEsc} src={modal_esc} alt="modal esc" />
              </div>
              <h5>編輯個人資料</h5>
            </div>
            <Button title='推文' size='small' isAction></Button>
            </div>
            <div className={styles.userCard}>
              <div className={styles.cover}>
                  <img src={coverImg} alt="cover" className={styles.bgImg} />
              </div>
              <div className={styles.userInfoAvatar}>
                  <img src={avatarImg} alt="avatar" className={styles.img} />
              </div>
              <label className={styles.upload} htmlFor="coverInput">
                <img className={styles.uploadImg} src={modal_upload} alt="modal_upload" />
                <input className={styles.fileInput} type="file" id="coverInput" onChange={(e) => handleImgChange(e, "cover")}/>
              </label>
              <div className={styles.cancel} onClick={handleCancelImg}>
                <img className={styles.cancelImg} src={modal_cancel} alt="modal_cancel" />
              </div>
              <label className={styles.avatarUpload} htmlFor="avatarInput">
                <img className={styles.uploadImg} src={modal_upload} alt="modal_upload" />
                <input className={styles.fileInput} type="file" id="avatarInput"  onChange={(e) => handleImgChange(e, "avatar")}/>
              </label>
            </div> 
            <div className={styles.infoEdit}>
              <AuthInput label='名稱' value={name} onChange={(nameInputValue) => setName(nameInputValue)} notification='字數超出上限!' wordsLimit={50}
              />
              <EditInput label='自我介紹' value={introduction} onChange={(introInputValue) => setIntroduction(introInputValue)} notification='字數超出上限!' wordsLimit={160}
              />
            </div>       
        </div>
      </div>
    );
}
