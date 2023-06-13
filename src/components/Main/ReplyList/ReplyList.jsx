import ReplyItem from '../ReplyItem/ReplyItem.jsx';

export default function ReplyList({ replies }) {
    return replies.map((reply) => {
        return (
            <ReplyItem
                key={reply.id}
                // replyId={reply.id}
                userId={reply.UserId}
                userName={reply.User.name}
                account={reply.User.account}
                avatar={reply.User.avatar}
                description={reply.comment}
                createdAt={reply.createdAt}
                // updatedAt={tweet.updatedAt}
            />
        );
    });
}
