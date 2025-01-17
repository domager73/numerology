import DefaultButton from "./Components/DefaultButton/DefaultButton";
import FilledButton from "./Components/FIlledButton/FilledButton";
import OutlinedButton from "./Components/OutlinedButton/OutlinedButton";
import styles from "./App.css";
import fonts from './Utils/AppTypography.module.css'
import colors from './Utils/AppColors.module.css'
import './Utils/Fonts.css'
import classNames from "classnames";


function App() {
    return (
        <div className={styles.AppBody}>
            <DefaultButton
                onClick={() => console.log("clicked")}
                text='ButtonText'
            />
            <FilledButton
                onClick={() => console.log("clicked")}
                text='ButtonText'
            />
            <OutlinedButton
                onClick={() => console.log("clicked")}
                text='ButtonText'
            />
            <p className={classNames(fonts.f24w800, colors.white)}>Text</p>
        </div>
    );
}

export default App;
