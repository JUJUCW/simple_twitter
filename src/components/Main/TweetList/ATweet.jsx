import SingleTweet from '../SingleTweet/SingleTweet.jsx';
export default function ATweet({ tweet, onClick }) {
    const { id, UserId, User, description, likedCount, replyCount, isLiked, createdAt } = tweet;

    return (
        <SingleTweet
            key={id}
            tweetId={id}
            userId={UserId}
            userName={User.name}
            account={User.account}
            avatar={User.avatar}
            description={description}
            likedCount={likedCount}
            replyCount={replyCount}
            isLiked={isLiked}
            createdAt={createdAt}
            onClick={onClick}
        />
    );
}
