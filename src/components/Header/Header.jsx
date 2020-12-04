import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.img}>
                {/* <img src='https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png'></img> */}
                <img src='https://www.pikpng.com/pngl/m/59-596262_wolf-png-logo-for-free-download-on-wolf.png'></img>
                
            </div>

            {/* <img src='https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg'></img> */}
        </header>
    )
}

export default Header;