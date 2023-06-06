

import Button from '../../components/Button/Button.jsx'
import styles from './ButtonShowCasePage.module.scss'
import TweetModal from '../../components/Modal/TweetModal/TweetModal.jsx'

export default function ButtonShowCasePage () {

  return (
    <div>
      <div className={styles.container}>
        <Button title='登入' size='large' isAction></Button>
      </div>
      <div className={styles.container}>
        <Button title='推文' size='navTweet' isAction></Button>
      </div>
      <div className={styles.container}>
        <Button title='正在跟隨' size='middle' isAction></Button>
      </div>
      <div className={styles.container}>
        <Button title='跟隨' size='small'></Button>
      </div>
      <div className={styles.container}>
        <Button title='推文' size='small' isAction></Button>
      </div>

      <TweetModal/>
    </div>
  );
}