import { useState } from 'react';
import styles from './Collapse.module.css'

export default function project({title, answer}) {
    const [open, setopen] = useState(false);
    return (
        <div className={styles.question} onClick={() => setopen(!open)}>
            <div className={`${open ? styles.active : ''}`}>
                <h3>{title}</h3>
                <div className={styles.answer}>
                    <p>
                       {answer}
                    </p>
                </div>
            </div>
        </div>
    )
}