import React, { useEffect, useState } from 'react';
import { postTweetLike, getATweet, postTweetUnlike } from 'api/like';
import styles from './TweetItem.module.scss';
import likeIcon from '../../../assets/icons/tweet/tweet_like.png';
// const App = () => {
//     const [likedTweets, setLikedTweets] = useState([]);

//     useEffect(() => {
//         // 在組件載入時，呼叫 API 取得使用者喜歡的推文資料
//         const fetchLikedTweets = async () => {
//             try {
//                 const response = await postTweetLike(4); // 替換為實際的使用者 ID
//                 console.log('response.data', response.data);
//                 setLikedTweets(response.data);
//             } catch (error) {
//                 console.error('error', error);
//             }
//         };

//         fetchLikedTweets();
//     }, []);

//     return (
//         <div>
//             <h1>喜歡的推文</h1>
//             <ul>
//                 {likedTweets.map((tweet) => (
//                     <li key={tweet.id}>{tweet.content}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default App;

export default function Test() {
    const [aTweet, setATweet] = useState('');
    const [preLike, setPreLike] = useState(0);

    // const handleGetTweet = () => {};
    const handleLike = () => {};
    const handleUnlike = () => {};

    useEffect(() => {
        const promise = getATweet(4);

        promise
            .then((data) => {
                // 成功處理
                console.log(data.isLiked);
                console.log(data.likedCount);
            })
            .catch((error) => {
                // 非 200 的錯誤處理
                console.log('非 200 的錯誤:', error.response.status);
            });
    });

    return (
        <div>
            <div className={styles.iconLike}>
                <div
                    className={styles.cursor}
                    // onClick={handleLike}
                >
                    <img
                        // className={likeClassName}
                        src={likeIcon}
                        alt="like button"
                    />
                </div>
                <span>0</span>
            </div>
        </div>
    );
}
