import { useState } from 'react';

import Button from '../../Button/Button.jsx';
import AuthInput from '../../Auth/AuthInput/AuthInput.jsx';
import EditInput from '../../EditInput/EditInput.jsx'
import { setUserProfile } from '../../../api/user.js'
import { Toast } from '../../../utility/helper.js'
import { useDataStatus } from '../../../context/DataContext.jsx'
import bgImg from '../../../assets/images/default_background.png';
import logo from '../../../assets/icons/logo_gray.png';
import modal_esc from '../../../assets/icons/modal/modal_esc.png'
import modal_upload from '../../../assets/icons/modal/modal_upload.png'
import modal_cancel from '../../../assets/icons/modal/modal_cancel.png'
import styles from './UserEditModal.module.scss';

export default function UserEditModal ({handleCloseModal, id, oriName, oriCoverImg, oriIntroduction, oriAvatar}) {
  const [coverPhoto, setCoverPhoto] = useState(oriCoverImg||bgImg)
  const [upCoverPhoto, setUpCoverPhoto] = useState(coverPhoto)
  const [avatar, setAvatar] = useState(oriAvatar||logo)
  const [upAvatar, setUpAvatar] = useState(avatar)
  const [name, setName] = useState(oriName);
  const [introduction, setIntroduction] = useState(oriIntroduction||'');
  const {isDataUpdate, setIsDataUpdate } = useDataStatus();

  const handleImgChange = (e, type) => {
    if (!e.target.files[0]) {
      return;
    }
    const selectedFile = e.target.files[0];
    const objectUrl = URL.createObjectURL(selectedFile);
    if (type === "cover") {
      setUpCoverPhoto(selectedFile)
      console.log(selectedFile)
      setCoverPhoto(objectUrl);
    } else if (type === "avatar") {
      setUpAvatar(selectedFile)
      console.log(selectedFile)
      setAvatar(objectUrl);
    }
  };

  const handleCancelImg = () => {
    setCoverPhoto(oriCoverImg);
  }

  const handleSubmit = async() => {
    if (introduction.trim().length > 160) {
      Toast.fire({
        title: "字數超出上限!",
        icon: "error",
      });
      return;
    }
    if (name.trim().length > 50) {
      Toast.fire({
        title: "字數超出上限!",
        icon: "error",
      });
      return;
    }
    if (name.trim().length === 0) {
      Toast.fire({
        title: "請輸入名稱!",
        icon: "error",
      });
      return;
    }
    const formData = new FormData();
          formData.append("coverPhoto", upCoverPhoto);
          formData.append("avatar", upAvatar);
          formData.append("name", name);
          formData.append("introduction", introduction);
    console.log(formData)

    const data = await setUserProfile(formData ,id)
    if (data.status==="error") {
      Toast.fire({
        title: "修改個人資料失敗",
        icon: "error",
      });
      return
    }
    
    Toast.fire({
      title: "修改個人資料成功",
      icon: "success",
    });
    setIsDataUpdate(!isDataUpdate)
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
            <Button title='儲存' size='small' isAction onClick={handleSubmit}></Button>
            </div>
            <div className={styles.userCard}>
              <div className={styles.cover}>
                  <img src={coverPhoto} alt="cover" className={styles.bgImg} />
              </div>
              <div className={styles.userInfoAvatar}>
                  <img src={avatar} alt="avatar" className={styles.img} />
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
