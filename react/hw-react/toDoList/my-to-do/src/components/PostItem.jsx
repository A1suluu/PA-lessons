import React from 'react';

const PostItem = (props) => {

    return (
        <div >
            <div className="post__content">
                <strong>{props.number}. {props.post.title}</strong>
                <div>{props.post.body}</div>
            </div>
            <div >
                <button onClick={() => props.remove(props.post)}> Удалить</button>
            </div>
        </div>
    );
};

export default PostItem;