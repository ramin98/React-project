import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {

let postsElements = props.posts.map( p => <Post posts={p.posts}/>)

let newPost = React.createRef();

function addPost() {
let text = newPost.current.value;
props.addNewPost(text)
}

    return (
      <div>
        <p>My Posts</p>     
        <div className={c.my_posts}>          
           <textarea ref={newPost}></textarea>
           <button onClick={ addPost } className={c.post_but}>Send</button>
        </div>
        <div className={c.posts}>
          {postsElements}
        </div>
        </div>   
    );
  }
  
export default MyPosts;