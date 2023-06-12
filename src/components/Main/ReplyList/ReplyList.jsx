import ReplyItem from '../ReplyItem/ReplyItem.jsx';

export default function ReplyList({ replies }) {
    return replies.map((reply) => {
        return (
            <ReplyItem
                key={reply.id}
                replyId={reply.id}
                userId={reply.UserId}
                userName={reply.name}
                account={reply.User.account}
                avatar={reply.avatar}
                description={reply.description}
                createdAt={reply.createdAt}
                // updatedAt={tweet.updatedAt}
            />
        );
    });
}
