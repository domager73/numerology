import styles from './FilledButton.module.css'


function FilledButton({text, onClick}) {
    return <button className={styles.button} onClick={onClick}>{text}</button>
}

export default FilledButton;