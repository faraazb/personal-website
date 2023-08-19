import React from 'react';
import './card.scss';
import {LinkButton} from "../button";
import {GatsbyImage} from "gatsby-plugin-image";
import { useTheme } from '../../theme/theme-provider';

const Card = (props) => {
    const {theme} = useTheme();
    const {accent, title, description, links, display} = props;

    const {light, dark} = display;
    let media = theme === 'light' ? light : dark;

    return (
        <div className={`card ${accent}`}>
            <div className="titlebar">
                <span className="title">{title}</span>
            </div>
            <div className="window">
                <div className='display'>
                    <GatsbyImage className="image" alt={"Project screenshot"} image={media.childImageSharp.gatsbyImageData} />
                </div>
                <p className="description">
                    {description}
                </p>
                <div className="links">
                    {links.map(({type, url}, index) => {
                        return (
                            <LinkButton
                                key={index}
                                accent={accent}
                                type={type}
                                link={url}
                                target='_blank'
                                rel='noreferrer'
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}


export default Card;
