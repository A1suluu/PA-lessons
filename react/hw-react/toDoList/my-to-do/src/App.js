import './App.css';
import React from 'react'
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  const [posts, setPosts] = React.useState([
    { id:1, title: "To Do", body: "lorem inpuem lorem inpuemlorem inpuem" }
  ])

  function createPost(newPost) {
    setPosts([...posts, newPost])
  }

  function removePost (post) {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div className='App'>
      <PostForm create={createPost}/>
      <PostList  remove={removePost} posts={posts} title=""/>
    </div>
  )
}


export default App;
