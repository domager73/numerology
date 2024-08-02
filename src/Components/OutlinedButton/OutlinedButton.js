import styles from './OutlinedButton.module.css'

function OutlinedButton({text, onClick}) {
    return <button className={styles.button} onClick={onClick}>{text}</button>
}


export default OutlinedButton