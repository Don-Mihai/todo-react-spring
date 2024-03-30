const Post = ({ post }) => {
    return (
        <div className="post">
            <h2 className="post__title">{post.title}</h2>
            <div className="post__content">{post.content}</div>
        </div>
    );
};

export default Post;
