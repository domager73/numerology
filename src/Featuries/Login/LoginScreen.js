import styles from './LoginScreen.module.css'
import fonts from '../../Utils/AppTypography.module.css'
import colors from '../../Utils/AppColors.module.css'
import classNames from "classnames";
import withSplashScreen from "../Splash/SplashScreen";

function LoginScreen() {

    return <div className={styles.login}>
        <p className={classNames(fonts.f24w800, colors.white)}>123123</p>
    </div>
}


export default withSplashScreen(LoginScreen);