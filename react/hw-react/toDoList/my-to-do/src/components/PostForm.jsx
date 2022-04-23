import React, {useState} from 'react';

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})


    function addNewPost (e) {
        const newPost = {
            ...post
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <div>
            <input
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})} 
                type="text" placeholder="Название задания" />
            <input
                value={post.body} 
                onChange={e => setPost({...post, body: e.target.value})}
                type="text" placeholder="Описание задания"
                 />
            <button onClick={addNewPost}>Создать список дел</button>
        </div>
    );
};

export default PostForm;