import logo from './logo.svg';
import './App.css';
import React, { useRef } from 'react'
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {
  const [posts, setPosts] = React.useState([
    { id:3, title: ". JavaScript", body: "JavaScript  - язык программирования" }
  ])

  const [posts2, setPosts2] = React.useState([
    { id:1, title: ". Python", body: "Python  - язык программирования" }
  ])


  const [tittle, setTittle] = React.useState("skdcn")
  const bodyInputRef = useRef()

  function addNewPost (e) {
    e.preventDefault() 
    console.log(tittle)
    console.log(bodyInputRef.current.value)
  }

  return (
    <div className="App">
      <ClassCounter />
      <Counter/>
      <br/><br/>
      <div>
        {/* <MyInput  value={tittle}
        onChange={e => setTittle(e.target.value)}
        type="text" placeholder="название поста"/> */}
        <input type="text" ref={bodyInputRef}></input>
        {/* <MyInput 
        ref={bodyInputRef}
        type="text"
        placeholder="описание поста"/> */}
        <MyButton  onClick={addNewPost}>Создать пост</MyButton>
      </div>
      <PostList posts={posts} title={"Список постов 1"}/>
      {/* <PostList posts={posts2} title={"Список постов 2"}/> */}
    </div>
  );
}

export default App;











// const [value, setValue] = React.useState('Text in input')


// function changeInput (event) {
//   setValue(event.target.value)
// }