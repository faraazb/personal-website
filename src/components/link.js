import React, {forwardRef} from 'react';
import {Link} from 'gatsby';
import {githubIcon, globeIcon, mailIcon, youtubeIcon} from './icons';


const LinkWrapper = forwardRef((props, ref) => {
    let { href, children, ...rest } = props;
    return (
        <Link to={href}>
            <a ref={ref} {...rest}>
                {children}
            </a>
        </Link>
    );
});


const LinkButton = (props) => {
    const {accent = '', type, link, ...rest} = props;
    let icon;
    switch (type) {
        case 'Mail':
            icon = mailIcon;
            break;
        case 'GitHub':
            icon = githubIcon;
            break;
        case 'Website':
            icon = globeIcon;
            break;
        case 'YouTube':
            icon = youtubeIcon;
            break;
        default:
            icon = globeIcon;
    }

    return (
        <a href={link} {...rest} tabIndex={-1}>
            <button className={`accent-button ${accent}`}>
                <div className='button-link'>
                    {icon}<span>{type}</span>
                </div>
            </button>
        </a>
    )
}


const Anchor = (props) => {
    const {href, text, icon, title} = props
    return (
        <a className='contact-link footer-link' href={href} target='_blank' rel='noreferrer' title={title || text}>
            {icon}<span className='contact-link-label'>{text}</span>
        </a>
    )
}


export {LinkWrapper, LinkButton, Anchor};
