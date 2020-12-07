
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let posts = [
    {id: 1 , message: 'Hi, how are you?', LikesCount: 25},
    {id: 2 , message: "It's my first post", LikesCount: 10}
    // {id: 3 , message: "It's my first post", LikesCount: 10},
    // {id: 4 , message: "It's my first post", LikesCount: 10},
    // {id: 5 , message: "It's my first post", LikesCount: 10},
    // {id: 6 , message: "It's my first post", LikesCount: 10}
  ];

  let postsElements = posts.map( (p) => <Post message={p.message} likesCount={p.LikesCount} />);

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

          { postsElements }

          {/* <Post message={posts[0].message} likesCount={posts[0].LikesCount} />
          <Post message={posts[1].message} likesCount={posts[1].LikesCount} /> */}
        </div>
      </div>
    </div>
  )
}

export default MyPosts;