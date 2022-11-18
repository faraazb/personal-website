import React from 'react';
import './index.scss';
import Layout from '../components/layout';
import {StaticImage} from 'gatsby-plugin-image';
import Card from "../components/card";
import {LinkButton} from "../components/link";
import {BuildingIcon, DateRangeIcon, githubIcon, icons, linkedinIcon} from '../components/icons';
import {graphql} from 'gatsby';
import {Seo} from "../components/seo";


const IndexPage = ({data}) => {

    return (
        <Layout>
            <section id='about' className='home-container'>
                <div id='home'>
                    <div className='hello'>
                        <h1 className='header-1'>{data.content.hello.header}</h1>
                        <p className='subtitle-1'>
                            {data.content.hello.subtitle}
                        </p>
                        <div className='links'>
                            <LinkButton type={'Mail'} link={data.content.contact.mail}/>
                            <a className='link' href={data.content.contact.github}
                               target='_blank' rel='noreferrer' title='GitHub'
                            >
                                {githubIcon}
                            </a>
                            <a className='link' href={data.content.contact.linkedin}
                               target='_blank' rel='noreferrer' title='LinkedIn'
                            >
                                {linkedinIcon}
                            </a>
                        </div>
                    </div>
                    <div className='photo'>
                        <StaticImage
                            src={'../static/images/faraaz.png'}
                            alt={'profile-picture'}
                            imgClassName={'profile-picture'}
                            loading={"lazy"}
                            placeholder={"blurred"}
                        />
                    </div>
                </div>
            </section>
            <section id='skills' className='skills-container'>
                <h2 className='header-2'>Skills</h2>
                <ul className='skills'>
                    {data.content.skills.map(({label, icon, mono}, index) => {
                        return (
                            <li key={index} className='skill'>
                                    <span className={`li-icon ${mono ? 'mono' : ''}`}>
                                        {icons[icon]}
                                    </span>
                                {label}
                            </li>
                        );
                    })}
                </ul>
            </section>
            <div className='container'>
                <section id='experience'>
                    <h2 className='header-2'>Experience</h2>
                    <div className='experiences'>
                        <div className='experience'>
                            <div className='company-icon-container'>
                                <a href='https://www.yunometa.com' target='_blank' rel='noreferrer' tabIndex={-1} aria-hidden={true}>
                                    <StaticImage
                                        src={'../static/images/yunometa.png'}
                                        alt={'profile-picture'}
                                        imgClassName={'company-icon'}
                                        loading={"lazy"}
                                        placeholder={"blurred"}
                                    />
                                </a>
                            </div>
                            <div className='description'>
                                <div className='role'>Web Developer (Internship)</div>
                                <div className='details'>
                                    <a href='https://www.yunometa.com' target='_blank' rel='noreferrer'>
                                        <BuildingIcon className='icon-h'/>
                                        <span className='company-link underline-link'>Yunometa</span>
                                    </a>
                                    <div>
                                        <DateRangeIcon className='icon-h company-duration' />
                                        <span>August 2022 - Present</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='achievements'>
                    <h2 className='header-2'>Achievements</h2>
                    <div className='achievements'>
                        <div className='achievement'>
                            <a href="https://unstop.com/competition/techsurf-2022-contentstack-359635/case-submissions/44082?d=eyJwYWdlIjoxLCJ0ZWFtSWQiOjg4MDc5NDksImFzc29jaWF0aW9uSWQiOjIwODUwMn0="
                               target='_blank' rel='noreferrer'
                            >
                                <div className='company-icon-container'>
                                    <StaticImage
                                        src={'../static/images/techsurf.png'}
                                        alt={'profile-picture'}
                                        imgClassName={'company-icon'}
                                        loading={"lazy"}
                                        placeholder={"blurred"}
                                    />
                                </div>
                            </a>
                            <div className='description'>
                                <div className='role'>Techsurf 2022 — Second Runner-up</div>
                                <div className='details'>
                                    About 12,000 students participated in this annual hackathon organized by
                                    Contentstack. In the final stage, I was tasked with building a webpage annotation
                                    tool which I named Markerr.
                                </div>
                            </div>
                        </div>
                        <div className='achievement'>
                            <a href="https://eyic.e-yantra.org/" target='_blank' rel='noreferrer'>
                                <div className="company-icon-container">
                                    <StaticImage
                                        src={'../static/images/eyantra.png'}
                                        alt={'profile-picture'}
                                        imgClassName={'company-icon'}
                                        loading={"lazy"}
                                        placeholder={"blurred"}
                                    />
                                </div>
                            </a>
                            <div className='description'>
                                <div className='role'>e-YIC 2020-21 — Bronze Prize</div>
                                <div className='details'>
                                    A competition organized by e-Yantra (IIT Bombay) with
                                    a disaster management theme and about 400 participating teams
                                    from engineering institutions across India.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section id='projects' className='projects-container'>
                <h2 className='header-2'>Projects</h2>
                <div className='projects'>
                    {data.content.projects.map((project, index) => {
                        const {accent, title, description, display, links} = project;
                        return (
                            <Card
                                key={index}
                                accent={accent}
                                title={title}
                                description={description}
                                links={links}
                                display={display}
                            />
                        )
                    })}
                </div>
            </section>
        </Layout>
    );
}


export const projectsQuery = graphql`
    query getProjects {
        content: contentJson {
            hello {
                header
                subtitle
            }
            contact {
                github
                mail
                linkedin
            }
            skills {
                label
                icon
                mono
            }
            projects {
                title
                description
                accent
                links {
                    type
                    url
                }
                display {
                    light {
                        childImageSharp {
                            gatsbyImageData(
                                placeholder: BLURRED
                            )
                        }
                    }
                    dark {
                        childImageSharp {
                            gatsbyImageData(
                                placeholder: BLURRED
                            )
                        }
                    }
                }
            }
        }
    }
`

export default IndexPage;

export const Head = () => {
    return (
        <>
            <Seo />
        </>
    )
}
