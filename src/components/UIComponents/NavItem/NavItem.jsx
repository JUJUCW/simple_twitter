import React from 'react';

import styles from './NavItem.module.scss';

export default function NavItem({ iconStyle, textStyle, altName, title }) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.iconStyle}>
                    <img className={styles[iconStyle]} alt={altName} />
                </div>
                <div className={styles[textStyle]}>{title}</div>
            </div>
        </>
    );
}
