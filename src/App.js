import DefaultButton from "./Components/DefaultButton/DefaultButton";
import FilledButton from "./Components/FIlledButton/FilledButton";
import OutlinedButton from "./Components/OutlinedButton/OutlinedButton";
import styles from "./App.css";
import typo from './AppTypography.models.css'
import './Fonts.css'


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
            <p className={typo.f24w800}>Text</p>
        </div>
    );
}

export default App;
