import React from 'react';
import './index.scss';
import Layout from '../components/layout';
import {StaticImage} from 'gatsby-plugin-image';
import content from '../../content/data.json'
import Card from "../components/card";
import {LinkButton} from "../components/link";
import {githubIcon, icons, linkedinIcon} from '../components/icons';
import {graphql} from 'gatsby';


const IndexPage = ({data}) => {

    return (
        <main>
            <title>Faraaz Biyabani</title>
            <Layout>
                <div id='about' className='home-container'>
                    <div id='home'>
                        <div className='hello'>
                            <h1 className='header-1'>{content.hello.header}</h1>
                            <p className='subtitle-1'>
                                {content.hello.subtitle}
                            </p>
                            <div className='links'>
                                <LinkButton type={'Mail'} link={content.contact.mail}/>
                                <a className='link' href={content.contact.github}
                                   target='_blank' rel='noreferrer' title='GitHub'
                                >
                                    {githubIcon}
                                </a>
                                <a className='link' href={content.contact.linkedin}
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
                </div>
                <div id='skills' className='skills-container'>
                    <h2 className='header-2'>Skills</h2>
                    <ul className='skills'>
                        {content.skills.map(({label, icon, mono}, index) => {
                            return (
                                <li key={index} className='skill'>
                                    <span className={`li-icon ${mono ? 'mono': ''}`}>
                                        {icons[icon]}
                                    </span>
                                    {label}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div id='projects' className='projects-container'>
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
                </div>
            </Layout>
        </main>
    );
}


export const projectsQuery = graphql`
    query getProjects {
        content: contentJson {
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
