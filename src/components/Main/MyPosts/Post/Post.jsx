import React from 'react';
import c from './Post.module.css';

function Post(props) {
    return (
      <div>     
       <div className={c.post}>
          <img src="https://ani.best/uploads/posts/2017-10/1508532398_anime.png"/>
          {props.posts}
          </div>
        </div>   
    );
  }
  
export default Post;
