
import classes from './Post.module.css';

const Post = (props) => {

  return (
    <div className={classes.item}>
      <img src="https://i.pinimg.com/originals/a1/30/86/a130864e6d6db6899ca996b0691113f8.jpg" alt="" />
      {/* post 1 */}
      { props.message}
      <div className={classes.like}>
        like {props.likesCount}
      </div>

    </div>
  )
}

export default Post;