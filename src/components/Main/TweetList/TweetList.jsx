import TweetItem from "../TweetItem/TweetItem.jsx";



export default function tweetList ({tweets}) {
  return (
    tweets.map((tweet) => {
      return (
        <TweetItem
          key={tweet.id}
          tweetId={tweet.id}
          userId={tweet.UserId}
          userName={tweet.User.name}
          account={tweet.User.account}
          avatar={tweet.User.avatar}
          description={tweet.description}
          likedCount={tweet.likedCount}
          replyCount={tweet.replyCount}
          isLiked={tweet.isLiked}
          createdAt={tweet.createdAt}
          // updatedAt={tweet.updatedAt}
        />
      )
    })
  )
}
