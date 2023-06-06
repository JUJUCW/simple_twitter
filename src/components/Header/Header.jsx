import styles from './Header.module.scss'

export default function Header ({title, arrow, tweetCount}) {
  return (
    <div className={styles.headerContainer}>
      {arrow ? (
      <div >
        <div className={styles.container}>
          <div className={styles.arrow}>
            <img src={arrow} alt="arrow" />
          </div>
          <div >
            <h5 className={styles.smallTitle}>{title}</h5>
            <p className={styles.tweetCount}>{tweetCount} 推文</p>
          </div>
        </div>
      </div>
      ) : (
      <h4 className={styles.title}>{title}</h4>
      )}
    </div>
  );
}