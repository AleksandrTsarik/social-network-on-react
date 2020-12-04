
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let postData = [
    {id: 1 , message: 'Hi, how are you?', LikesCount: 25},
    {id: 2 , message: "It's my first post", LikesCount: 10}

  ]

  return (
    <div className={classes.My_Posts}>
      <div className="content-inner">
        <h3 className={classes.myPost}>
          my post
        </h3>
        <div>
          <div>
            <textarea className={classes.textarea} name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div className={classes.button}>
            <button>Add post</button>
          </div>
        </div>
        <div>
          new post
        </div>
        <div className={classes.posts}>
          <Post message={postData[0].message} likesCount={postData[0].LikesCount} />
          <Post message={postData[1].message} likesCount={postData[1].LikesCount} />
        </div>
      </div>
    </div>
  )
}

export default MyPosts;