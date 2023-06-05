import React from 'react';

import style from './NavItem.module.scss';

export default function NavItem({ iconStyle, textStyle, altName, title }) {
    return (
        <>
            <div className={style.container}>
                <div className={style.iconStyle}>
                    <img className={style[iconStyle]} alt={altName} />
                </div>
                <div className={style[textStyle]}>{title}</div>
            </div>
        </>
    );
}
