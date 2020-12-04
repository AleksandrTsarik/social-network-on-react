
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
      <div>
        <div className={classes.bg}>
          <img src="https://avatars.mds.yandex.net/get-zen_doc/920263/pub_5be2b05f5bdd7500a9b50d29_5be2b06783934500ac45615f/scale_1200" alt="" />
          {/* <img src="https://csis-website-prod.s3.amazonaws.com/s3fs-public/publication/191218_cybersec.jpg" alt="" /> */}
        </div>
        <div className="content-inner">
          <div className={classes.descriptionBlock}>
            ava + description
          </div>
        </div>
        
      </div>
    )
}

export default ProfileInfo;