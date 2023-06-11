import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './TweetPage.module.scss';
import MainContainer from 'components/Main/MainContainer/MainContainer';
import NavBarContainer from 'components/Navbar/NavBarContainer/NavBarContainer';
import SuggestUserContainer from 'components/SuggestUser/SuggestUserContainer/SuggestUserContainer';
import Header from 'components/Header/Header';
import SingleTweet from 'components/Main/SingleTweet/SingleTweet';
import ReplyModal from 'components/Modal/ReplyModal/ReplyModal';

// import TweetList from 'components/Main/TweetList/TweetList';
import tweet from 'api/tweet';
import { getReplies } from 'api/reply';

export default function TweetPage() {
  const param = useParams();
    const navigate = useNavigate();
    const [tweet, setTweet] = useState({});
    const [user, setUser] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [replies, setReplies] = useState([]);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        tweet
            .getTweet(param.tweet_id)
            .then((res) => {
                const { data } = res;
                if (res.status !== 200) {
                    throw new Error(data.message);
                }
                setTweet(data);
                setUser(data.User);
            })
            .catch((error) => {
                console.error(error);
                navigate('/login');
            });
    }, [param.tweetId]);
  
  useEffect(() => {
      getReplies
          .getReplies(param.tweet_id)
          .then((res) => {
              const { data } = res;
              if (res.status !== 200) {
                  throw new Error(data.message);
              }
              setReplies(data.replies);
          })
          .catch((error) => {
              console.error(error);
              navigate('/login');
          });
  }, [param.tweetId]);



    return (
        <div className={styles.container}>
            {/* <div className={styles.navBarContainer}> */}
            <NavBarContainer role="user" page="main" />
            {/* </div> */}
            <div className={styles.mainContainer}>
                <MainContainer>
                    <Header title="推文" arrow />

                    {/* <SingleTweet tweets={tweets} onClick={handleOpenModal} /> */}
                </MainContainer>
            </div>
            {/* <div className={styles.suggestFollowContainer}> */}
            <SuggestUserContainer />
            {/* </div> */}
            {isModalOpen && <ReplyModal handleCloseModal={handleCloseModal} />}
        </div>
    );
}
