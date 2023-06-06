
import clsx from 'clsx'

import styles from './NavItem.module.scss';

export default function NavItem({ iconStyle, altName, title, isActive }) {
    const iconClasses = clsx(styles[iconStyle], { [styles.activeIcon]: isActive });
    const titleClasses = clsx(styles.title, { [styles.activeTitle]: isActive });
    return (
        <>
            <div className={styles.container} >
                <div className={styles.iconStyle}>
                    <img className={iconClasses} alt={altName} />
                </div>
                <div className={titleClasses}>{title}</div>
            </div>
        </>
    );
}
