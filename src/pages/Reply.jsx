// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// import tweet from 'api/tweet.js';
// import reply from 'api/reply.js';

// export default function Reply() {
//     const [atweet, setATweet] = useState({});
//     const [replies, setReplies] = useState([]);
//     const param = useParams();
//     const navigate = useNavigate();

//     useEffect(() => {
//         tweet
//             .getTweet(param.TweetId)
//             .then((res) => {
//                 const { data } = res;
//                 if (data.status !== 200) {
//                     throw new Error(data.message);
//                 }
//                 setATweet(data.tweet);
//             })
//             .catch((err) => {
//                 console.log(err);
//                 navigate('/login');
//             });
//     }, []);
//     return <div></div>;
// }
