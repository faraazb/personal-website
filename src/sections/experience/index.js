import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { BuildingIcon, DateRangeIcon } from "../../components/icons";

export function ExperienceSection({experiences}) {
    return (
        <section id="experience">
            <h2 className="header-2">Experience</h2>
            <div className="experiences">
                {experiences.map((experience) => {
                    const { roles, company, companyLink, companyLogo } =
                        experience;
                    return (
                        <div className="experience" key={company}>
                            <div className="company-icon-container">
                                <a
                                    href={companyLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    tabIndex={-1}
                                    aria-hidden={true}
                                >
                                    <GatsbyImage
                                        className="company-icon"
                                        alt={`${company} logo`}
                                        image={companyLogo.childImageSharp.gatsbyImageData}
                                    />
                                </a>
                            </div>
                            <div className="experience__information description">
                                <a
                                    className="company-link"
                                    href={companyLink}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <BuildingIcon className="icon-h" />
                                    <span className="company-link__title underline-link">
                                        {company}
                                    </span>
                                </a>
                                <ul className="roles">
                                    {roles.map(({ title, duration }, index) => (
                                        <li className="role" key={`${title}-${index}`}>
                                            <div className="role__title">{title}</div>
                                            <div className="role__duration">
                                                <DateRangeIcon className="icon-h" />
                                                <span>{duration}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}