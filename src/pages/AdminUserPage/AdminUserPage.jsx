

import Header from '../../components/Header/Header.jsx'
import AdminUserCard from '../../components/AdminUserCard/AdminUserCard.jsx'
import styles from './AdminUserPage.module.scss'

export default function AdminUserPage () {
  return (
    <div className={styles.adminContainer}>
      <div className={styles.navBar}>NavBar</div>
      <div className={styles.middleContainer}>
        <Header title='使用者列表' />
        <div className={styles.cardContainer}>
          <AdminUserCard/>
        </div>
      </div>
    </div>
  )
}