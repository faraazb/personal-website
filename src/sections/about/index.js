import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { mailIcon, linkedinIcon, githubIcon } from "../../components/icons";
import "./about.scss";

export function AboutSection({hello, contact}) {
    return (
        <section id="about" className="home-container">
            <div id="home">
                <div className="hello">
                    <h1 className="header-1">{hello.header}</h1>
                    <p className="subtitle-1">{hello.subtitle}</p>
                    <div className="links">
                        <a href="#contact" className="button-link">
                            <div className="accent-button">
                                {mailIcon}
                                <span>Get in Touch</span>
                            </div>
                        </a>
                        <a
                            className="link"
                            href={contact.github}
                            target="_blank"
                            rel="noreferrer"
                            title="GitHub"
                        >
                            {githubIcon}
                        </a>
                        <a
                            className="link"
                            href={contact.linkedin}
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
                        src={"../../static/images/faraaz.png"}
                        alt={"profile-picture"}
                        className="profile-picture__container"
                        imgClassName={"profile-picture"}
                        loading={"lazy"}
                        placeholder={"blurred"}
                    />
                </div>
            </div>
        </section>
    )
}