import { useState, useEffect } from 'react';
import { adminGetAllUsers } from '../../api/admin.js'
import Header from '../../components/Header/Header.jsx'
import AdminUserCard from '../../components/AdminUserCard/AdminUserCard.jsx'
import NavBarContainer from '../../components/Navbar/NavBarContainer/NavBarContainer.jsx'
import styles from './AdminUserPage.module.scss'

export default function AdminUserPage () {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const adminGetAllUser = async () => {
        try {
            const data = await adminGetAllUsers();
            if (data.status === 'error') {
                console.log(data.message);
                return;
            }
            if (data) {
                // update data
                setUsers(data);
            }
        } catch (error) {
            console.log('獲取推文失敗', error);
        }
        }
        adminGetAllUser();
    }, []);

    const userList = users.map((user) => {
        return (
        <AdminUserCard
            key={user.id}
            avatar={user.avatar}
            name={user.name}
            coverPhoto={user.coverPhoto}
            account={user.account}
            followerCount={user.followerCount}
            followingCount={user.followingCount}
            tweetCount={user.tweetCount}
            likeCount={user.likedCount}
        />
        );
    });



  return (
    <div className={styles.adminContainer}>
      <NavBarContainer role='admin' page="adminuser"/>
      <div className={styles.middleContainer}>
        <Header title='使用者列表' />
        <div className={styles.cardContainer}>
          {userList}
        </div>
      </div>
    </div>
  )
}