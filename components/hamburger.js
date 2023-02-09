import clsx from 'clsx'
import styles from './hamburger.module.css'

export default function Hamburger({ onToggle, className }) {
    return (
        <div onClick={onToggle} className={clsx(styles.menuToggle, className)}>
            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

            <div />
        </div>
    )
}
