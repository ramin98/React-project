import {renderPage} from '../render'

let state = {
    messagesPage: {
    friends : [ 
        {name: "Alex", id: 1},
        {name: "Ravi", id: 2},
        {name: "Mira", id: 3},
        {name: "Kim", id: 4},
        {name: "Sam", id: 5} 
      ]
    ,  
    message : [
        {message: "Hi", id: 1},
        {message: "Hello", id: 2},
        {message: "Good luck", id: 3},
        {message: "Have a good day", id: 4},
        {message: "Salut", id: 5}
      ]
    }
    ,
    mainPage:{
    posts: [ 
        {posts: "React realy good tool"}, 
        {posts: "Because of it let us do our work quickly and comfortable"} 
      ]
    }
};

export let addNewPost = (newPostP) => {
  let newPost = {
    posts: newPostP
  }

state.mainPage.posts.push(newPost)
renderPage(state);
}



export default state;