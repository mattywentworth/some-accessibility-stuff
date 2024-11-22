import React from 'react';
import { NavLink } from './NavLink';
import styles from './NavLinks.module.css';

export const NavLinks = () => {

    const navLinksDetails = [
        {linkText: 'Emoji Usage', urlExt: 'social-post-emojis'},
        {linkText: 'Hashtag Usage', urlExt: 'social-post-hashtags'}
    ]

    return (
        <div className={styles.navlinksContainer}>
            {/* Make this a ul when you actually build it out */}
            {navLinksDetails.map(navElement => {
                return (
                    <NavLink linkText={navElement.linkText} urlExt={navElement.urlExt} />
                )
            })}
            <NavLink />
            <NavLink />
        </div>
    )
}