import DefaultButton from "./Components/DefaultButton/DefaultButton";
import styles from "./App.css";

function App() {
    return (
        <div className={styles.AppBody}>
            <DefaultButton
                onClick={() => console.log("clicked")}
                text='ButtonText'
            />
        </div>
    );
}

export default App;
