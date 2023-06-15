import { useState, useEffect } from 'react';
import { Toast } from '../../utility/helper.js'
import Header from '../../components/Header/Header.jsx'
import AdminTweetItem from '../../components/AdminTweetItem/AdminTweetItem.jsx'
import NavBarContainer from '../../components/Navbar/NavBarContainer/NavBarContainer.jsx'
import { adminGetAllTweets, deleteTweet } from '../../api/admin.js'
import { useAuth } from '../../context/AuthContext.jsx'
import { useNavigate } from 'react-router-dom';
import styles from './AdminTweetPage.module.scss'

export default function AdminTweetPage () {
  const [tweets, setTweets] = useState([]);
  const { isAuthenticated, isAuthChecked } = useAuth();
  const navigate = useNavigate();
  
  const handleDeleteTweet = async (id) => {
    try {
      await deleteTweet(id)
      setTweets((preTweets) => {
        return preTweets.filter((tweet) => tweet.id !== id);
      });
      Toast.fire({
        title: "刪除推文成功",
        icon: "success",
      });
      
    } catch (error) {
      console.error(error);
    }
  }

    useEffect(() => {
    const adminGetAllTweet = async () => {
        try {
            const data = await adminGetAllTweets();
            if (data.status === 'error') {
                console.log(data.message);
                return;
            }
            if (data) {
                // update data
                setTweets(data);
            }
        } catch (error) {
            console.log('獲取推文失敗', error);
        }
        }
        adminGetAllTweet();
    }, []);

    useEffect(() => {
        if (!isAuthenticated && isAuthChecked) {
        navigate('/admin/login');
        }
    }, [navigate, isAuthenticated, isAuthChecked]);

    const tweetList = tweets.map((tweet) => {
        return (
        <AdminTweetItem
            key={tweet.id}
            tweetId={tweet.id}
            avatar={tweet.User.avatar}
            userName={tweet.User.name}
            account={tweet.User.account}
            createdAt={tweet.createdAt}
            description={tweet.description}
            onClick={handleDeleteTweet}
        />
        );
    });

  return (
    <div className={styles.adminContainer}>
      <NavBarContainer role='admin' page="admintweet"/>
      <div className={styles.middleContainer}>
        <Header title='推文清單' />
        <div className={styles.cardContainer}>
          {tweetList}
        </div>
      </div>
    </div>
  )
}