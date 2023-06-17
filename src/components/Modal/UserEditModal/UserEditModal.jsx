import { useState, useMemo } from 'react';
import { Toast } from '../../../utility/helper.js';
import { useDataStatus } from '../../../context/DataContext.jsx';
import Button from '../../Button/Button.jsx';
import AuthInput from '../../Auth/AuthInput/AuthInput.jsx';
import EditInput from '../../EditInput/EditInput.jsx';
import useChangeProfile from '../../../hooks/useChangeProfile.js';

import bgImg from '../../../assets/images/default_background.png';
import logo from '../../../assets/icons/logo_gray.png';
import modal_esc from '../../../assets/icons/modal/modal_esc.png';
import modal_upload from '../../../assets/icons/modal/modal_upload.png';
import modal_cancel from '../../../assets/icons/modal/modal_cancel.png';
import styles from './UserEditModal.module.scss';

export default function UserEditModal({ handleCloseModal, id, oriName, oriCoverImg, oriIntroduction, oriAvatar }) {
    const [coverPhoto, setCoverPhoto] = useState(oriCoverImg || bgImg);
    const [upCoverPhoto, setUpCoverPhoto] = useState(coverPhoto);
    const [avatar, setAvatar] = useState(oriAvatar || logo);
    const [upAvatar, setUpAvatar] = useState(avatar);
    const [name, setName] = useState(oriName);
    const [introduction, setIntroduction] = useState(oriIntroduction || '');
    const { isDataUpdate, setIsDataUpdate } = useDataStatus();
    const { isUpdating, updateUser } = useChangeProfile();

    const handleImgChange = (e, type) => {
        if (!e.target.files[0]) {
            return;
        }
        if (isUpdating) return;
        const selectedFile = e.target.files[0];
        const objectUrl = URL.createObjectURL(selectedFile);
        if (type === 'cover') {
            setUpCoverPhoto(selectedFile);

            setCoverPhoto(objectUrl);
        } else if (type === 'avatar') {
            setUpAvatar(selectedFile);
            setAvatar(objectUrl);
        }
    };

    const handleCancelImg = () => {
        if (isUpdating) return;
        setCoverPhoto(oriCoverImg);
    };

    const handleSubmit = async () => {
        if (!isValid) {
            Toast.fire({
                title: '請確認名稱及自我介紹字數',
                icon: 'error',
            });
            return;
        }
        await updateUser({ upCoverPhoto, upAvatar, name, introduction, id });
        await setIsDataUpdate(!isDataUpdate);
    };

    const isValid = useMemo(() => {
        if (!name || name.length > 50) {
            return false;
        }
        if (introduction.length > 160) {
            return false;
        }
        return true;
    }, [introduction, name]);

    const handleCloseModalAtBg = (e) => {
        if (isUpdating) return;
        if (e.target.classList.contains(styles.modalOverlay)) {
            handleCloseModal()
        }
    }

    return (
        <div className={styles.modalOverlay} onClick={handleCloseModalAtBg}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.left}>
                        <div onClick={handleCloseModal}>
                            <img className={styles.modalEsc} src={modal_esc} alt="modal esc" />
                        </div>
                        <h5>編輯個人資料</h5>
                    </div>
                    <Button title="儲存" size="small" isAction onClick={handleSubmit}></Button>
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
                        <input
                            className={styles.fileInput}
                            type="file"
                            id="coverInput"
                            onChange={(e) => handleImgChange(e, 'cover')}
                        />
                    </label>
                    <div className={styles.cancel} onClick={handleCancelImg}>
                        <img className={styles.cancelImg} src={modal_cancel} alt="modal_cancel" />
                    </div>
                    <label className={styles.avatarUpload} htmlFor="avatarInput">
                        <img className={styles.uploadImg} src={modal_upload} alt="modal_upload" />
                        <input
                            className={styles.fileInput}
                            type="file"
                            id="avatarInput"
                            onChange={(e) => handleImgChange(e, 'avatar')}
                        />
                    </label>
                </div>
                <div className={styles.infoEdit}>
                    <AuthInput
                        label="名稱"
                        value={name}
                        onChange={(nameInputValue) => setName(nameInputValue)}
                        notification="字數超出上限!"
                        wordsLimit={50}
                    />
                    <EditInput
                        label="自我介紹"
                        value={introduction}
                        onChange={(introInputValue) => setIntroduction(introInputValue)}
                        notification="字數超出上限!"
                        wordsLimit={160}
                    />
                </div>
            </div>
        </div>
    );
}
