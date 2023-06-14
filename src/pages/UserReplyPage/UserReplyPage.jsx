import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import CurrentUser from '../../components/Main/CurrentUser/CurrentUser.jsx';
import NavBarContainer from '../../components/Navbar/NavBarContainer/NavBarContainer.jsx';
import SuggestUserContainer from '../../components/SuggestUser/SuggestUserContainer/SuggestUserContainer.jsx';
import MainContainer from '../../components/Main/MainContainer/MainContainer.jsx';
import { getUser, getUserReplies } from '../../api/user.js'
import ReplyItem from '../../components/Main/ReplyItem/ReplyItem.jsx';
// import ReplyList from '../../components/Main/ReplyList/ReplyList.jsx';
import UserToggleMenu from '../../components/Main/UserToggleMenu/UserToggleMenu.jsx';
import Header from '../../components/Header/Header.jsx';
import { useAuth } from '../../context/AuthContext.jsx'
import { useDataStatus } from '../../context/DataContext.jsx'
import styles from './UserReplyPage.module.scss';

export default function UserReplyPage() {
  
  const URL = useParams();
  const[userReplies, setUserReplies] = useState([])
  const [userProfile, setUserProfile] = useState('')
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { isDataUpdate } = useDataStatus();

    useEffect(() => {
    const getUserInfo = async () => {
        try {
            const data = await getUser(URL.UserId);
            if (data.status === 'error') {
                console.log(data.message);
                return;
            }
            if (data) {
                // update data
                setUserProfile(data);
                console.log(data)
            }
        } catch (error) {
            console.log('獲取使用者資料失敗', error);
        }
        }
        getUserInfo();
    }, [URL.UserId, isDataUpdate]);

    useEffect(() => {
    const getUserReply = async () => {
        try {
            const data = await getUserReplies(URL.UserId);
            if (data.status === 'error') {
                console.log(data.message);
                return;
            }
            if (data) {
                // update data
                setUserReplies(data);
                console.log(data)
            }
        } catch (error) {
            console.log('獲取使用者回覆失敗', error);
        }
        }
        getUserReply();
    }, [URL.UserId, isDataUpdate]);

    const replyList = userReplies.map((reply) => {
        return (
        <ReplyItem
            key={reply.id}
            avatar={reply.User.avatar}
            account={reply.User.account}
            name={reply.User.name}
            createdAt={reply.createdAt}
            tweetId={reply.TweetId}
            userId={reply.User.id}
            tweetAccount={reply.Tweet.User.account}
            comment={reply.comment}
            // updatedAt={tweet.updatedAt}
        />
        );
    });

    useEffect(() => {
        if (!isAuthenticated) {
        navigate('/login');
        }
    }, [navigate, isAuthenticated]);


    return (
        <>
            <div className={styles.container}>
            
                <NavBarContainer role="user" page="userPage" />
             
                <MainContainer>
                    <Header title={userProfile.name} arrow tweetCount="66" />
                    
                        {userProfile&&<CurrentUser userInfo={userProfile} />}

                        <div className={styles.userToggleMenu}>
                          <Link to={`/user/${URL.UserId}/tweet`}>
                            <UserToggleMenu linkName="推文"  />
                          </Link>
                            <UserToggleMenu linkName="回覆" isActive/>
                          <Link to={`/user/${URL.UserId}/like`}>
                            <UserToggleMenu linkName="喜歡的內容" />
                          </Link>
                            
                        </div>
                        <div className={styles.replyList}>
                           {replyList}
                        </div>
                       
                      
                </MainContainer>
              
                <SuggestUserContainer />
            
            </div>
        </>
    );
}
