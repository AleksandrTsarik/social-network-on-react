
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={classes.My_Posts}>
      my post
      <div>
        <textarea className={classes.textarea} name="" id="" cols="30" rows="10"></textarea>
        <button>Add post</button>
      </div>

      <div>
        new post
        </div>
      <div className={classes.posts}>
        <Post message="Hi, how are you?" likesCount="20"/>
        <Post message="It's my first post" likesCount="25" />
      </div>
    </div>
  )
}

export default MyPosts;