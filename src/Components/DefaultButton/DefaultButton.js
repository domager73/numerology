import React from "react";
import styles from './DefaultButton.module.css'


function DefaultButton({text, onClick}) {
    return <button className={styles.button} onClick={onClick}>{text}</button>
}


export default DefaultButton