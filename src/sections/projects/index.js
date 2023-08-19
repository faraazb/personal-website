import React from "react";
import Card from "../../components/card";
import "./projects.scss";

export function ProjectsSection({projects}) {
    return (
        <section id="projects" className="projects-container">
            <h2 className="header-2">Projects</h2>
            <div className="projects">
                {projects.map((project) => {
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
    )
}