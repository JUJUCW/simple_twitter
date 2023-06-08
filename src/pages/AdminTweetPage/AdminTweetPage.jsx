import Header from '../../components/Header/Header.jsx'
import AdminTweetItem from '../../components/AdminTweetItem/AdminTweetItem.jsx'
import NavBarContainer from '../../components/Navbar/NavBarContainer/NavBarContainer.jsx'
import styles from './AdminTweetPage.module.scss'

export default function AdminTweetPage () {
  return (
    <div className={styles.adminContainer}>
      <NavBarContainer role='admin' page="admintweet"/>
      <div className={styles.middleContainer}>
        <Header title='推文清單' />
        <div className={styles.cardContainer}>
          <AdminTweetItem/>
          <AdminTweetItem/>
          <AdminTweetItem/>
          <AdminTweetItem/>
          <AdminTweetItem/>
          <AdminTweetItem/>
          <AdminTweetItem/>
          <AdminTweetItem/>
          <AdminTweetItem/>
          <AdminTweetItem/>
          <AdminTweetItem/>
          <AdminTweetItem/>
          <AdminTweetItem/>
          <AdminTweetItem/>
        </div>
      </div>
    </div>
  )
}