import React from "react";
import "./index.scss";
import Layout from "../components/layout";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import Card from "../components/card";
import {
	BuildingIcon,
	DateRangeIcon,
	githubIcon,
	icons,
	linkedinIcon,
	mailIcon,
} from "../components/icons";
import { graphql } from "gatsby";
import { Seo } from "../components/seo";

const IndexPage = ({ data }) => {
	return (
		<Layout>
			<section id="about" className="home-container">
				<div id="home">
					<div className="hello">
						<h1 className="header-1">{data.content.hello.header}</h1>
						<p className="subtitle-1">{data.content.hello.subtitle}</p>
						<div className="links">
							<a href="#contact" className="button-link">
								<div className="accent-button">
									{mailIcon}
									<span>Get in Touch</span>
								</div>
							</a>
							<a
								className="link"
								href={data.content.contact.github}
								target="_blank"
								rel="noreferrer"
								title="GitHub"
							>
								{githubIcon}
							</a>
							<a
								className="link"
								href={data.content.contact.linkedin}
								target="_blank"
								rel="noreferrer"
								title="LinkedIn"
							>
								{linkedinIcon}
							</a>
						</div>
					</div>
					<div className="photo">
						<StaticImage
							src={"../static/images/faraaz.png"}
							alt={"profile-picture"}
							imgClassName={"profile-picture"}
							loading={"lazy"}
							placeholder={"blurred"}
						/>
					</div>
				</div>
			</section>
			<section id="skills" className="skills-container">
				<h2 className="header-2">Skills</h2>
				<ul className="skills">
					{data.content.skills.map(({ label, icon, mono }, index) => {
						return (
							<li key={index} className="skill">
								<span className={`li-icon ${mono ? "mono" : ""}`}>
									{icons[icon]}
								</span>
								{label}
							</li>
						);
					})}
				</ul>
			</section>
			<div className="container">
				<section id="experience">
					<h2 className="header-2">Experience</h2>
					<div className="experiences">
						{data.content.experiences.map((experience) => {
							const { role, duration, company, companyLink, companyLogo } =
								experience;
							return (
								<div className="experience" key={role}>
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
									<div className="description">
										<div className="role">{role}</div>
										<div className="details">
											<a
												href="https://www.yunometa.com"
												target="_blank"
												rel="noreferrer"
											>
												<BuildingIcon className="icon-h" />
												<span className="company-link underline-link">
													{company}
												</span>
											</a>
											<div>
												<DateRangeIcon className="icon-h company-duration" />
												<span>{duration}</span>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</section>
				<section id="achievements">
					<h2 className="header-2">Achievements</h2>
					<div className="achievements">
						{data.content.achievements.map((achievement) => {
							const { title, description, logo, link } = achievement;
							return (
								<div className="achievement" key={title}>
									<a href={link} target="_blank" rel="noreferrer">
										<div className="company-icon-container">
											<GatsbyImage
												image={logo.childImageSharp.gatsbyImageData}
												alt={"company logo"}
												className={"company-icon"}
											/>
										</div>
									</a>
									<div className="description">
										<div className="role">{title}</div>
										<div className="details">{description}</div>
									</div>
								</div>
							);
						})}
					</div>
				</section>
			</div>
			<section id="projects" className="projects-container">
				<h2 className="header-2">Projects</h2>
				<div className="projects">
					{data.content.projects.map((project) => {
						const { accent, title, description, display, links } = project;
						return (
							<Card
								key={`${title.toLowerCase()}`}
								accent={accent}
								title={title}
								description={description}
								links={links}
								display={display}
							/>
						);
					})}
				</div>
			</section>
		</Layout>
	);
};

export const contentQuery = graphql`
	query getContent {
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
			experiences {
				role
				duration
				company
				companyLink
				companyLogo {
					childImageSharp {
						gatsbyImageData(placeholder: BLURRED)
					}
				}
			}
			achievements {
				title
				description
				link
				logo {
					childImageSharp {
						gatsbyImageData(placeholder: BLURRED)
					}
				}
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
							gatsbyImageData(placeholder: BLURRED)
						}
					}
					dark {
						childImageSharp {
							gatsbyImageData(placeholder: BLURRED)
						}
					}
				}
			}
		}
	}
`;

export default IndexPage;

export const Head = () => {
	return (
		<>
			<Seo />
		</>
	);
};
