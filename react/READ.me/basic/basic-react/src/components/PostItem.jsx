import React from 'react'

function PostItem (props) {
    return (
        <div className='post'>
            <div > 
                <strong>{props.number}{props.post.title}</strong>
                <div>{props.post.body} </div> 
            </div>
            <div className='post_btns'>
                <button>Удалить</button>
            </div>
      </div>
    )
}

export default PostItem;