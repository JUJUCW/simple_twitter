import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import styles from './UserToggleMenu.module.scss';


export default function UserToggleMenu({ isActive, linkName }) {
const titleClasses = clsx(styles.navLink, { [styles.active]: isActive })

    return (
        <div className={styles.container}>
            <NavLink to="/main" className={styles.toggleMenu}>
                <div className={titleClasses}>{linkName}</div>
            </NavLink>
            
        </div>
    );
}
