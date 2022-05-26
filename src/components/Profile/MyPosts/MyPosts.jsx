import React from 'react';
import Post from './Post/Post';
import myp from './MyPosts.module.css'
const MyPosts = () => {


  let postsDate = [
    {id: 1, message: 'How are you?', likeCount: 12},
    {id: 2, message: 'It is my first project', likeCount: 47}
  ]

  




    return (
      <div className={myp.postsBlock}>
          <h4>My posts</h4>
          <div>
            <div>
              <textarea></textarea>
            </div>
            <div>
              <button>Add post</button>
            </div>
          </div>
          <div>
            New posts
          </div>
          <div className={myp.posts}>
             <Post id={postsDate[0].id} message={postsDate[0].message} likeCount={postsDate[0].likeCount}/>
             <Post id={postsDate[1].id} message={postsDate[1].message} likeCount={postsDate[1].likeCount}/>
          </div>
      </div>
    );
  }
  
  export default MyPosts;