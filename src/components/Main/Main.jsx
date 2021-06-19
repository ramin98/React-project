import React from 'react';
import c from './Main.module.css';
import MyPosts from './MyPosts/MyPosts';

function Main(props) {
    return (
        <div className={c.main}>     
        <div className={c.img_conteiner}>
           <img src="https://lumiere-a.akamaihd.net/v1/images/sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg"/>
        </div>
        <div className={c.my_page_inf}>
        <div className={c.ava_des}>
          <img src="https://ani.best/uploads/posts/2017-10/1508532398_anime.png" className={c.ava}/>
          <div className={c.description}>
               Description
          </div>
        </div>         
        <div className={c.my_posts}>
        <MyPosts posts={props.state.posts} addNewPost={props.addNewPost}/> 
        </div>
        </div>
        </div>
    );
  }
  
export default Main;