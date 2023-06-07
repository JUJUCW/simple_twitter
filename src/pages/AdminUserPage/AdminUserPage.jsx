

import Header from '../../components/Header/Header.jsx'
import AdminUserCard from '../../components/AdminUserCard/AdminUserCard.jsx'
import NavBarContainer from '../../components/Navbar/NavBarContainer/NavBarContainer.jsx'
import styles from './AdminUserPage.module.scss'

export default function AdminUserPage () {
  return (
    <div className={styles.adminContainer}>
      <NavBarContainer role='admin'/>
      <div className={styles.middleContainer}>
        <Header title='使用者列表' />
        <div className={styles.cardContainer}>
          <AdminUserCard/>
          <AdminUserCard/>
          <AdminUserCard/>
          <AdminUserCard/>
          <AdminUserCard/>
          <AdminUserCard/>
          <AdminUserCard/>
          <AdminUserCard/>
          <AdminUserCard/>
          <AdminUserCard/>
          <AdminUserCard/>
          <AdminUserCard/>
          <AdminUserCard/>
          <AdminUserCard/>
          <AdminUserCard/>
          <AdminUserCard/>
          <AdminUserCard/>
          <AdminUserCard/>
          <AdminUserCard/>
          <AdminUserCard/>
          <AdminUserCard/>
          <AdminUserCard/>
          <AdminUserCard/>
          <AdminUserCard/>
          <AdminUserCard/>
          <AdminUserCard/>
          <AdminUserCard/>
          <AdminUserCard/>
          <AdminUserCard/>
          <AdminUserCard/>

        </div>
      </div>
    </div>
  )
}