import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

export function AchievementsSection({ achievements }) {
  return (
    <section id="achievements">
      <h2 className="header-2">Achievements</h2>
      <div className="achievements">
        {achievements.map((achievement) => {
          const { title, description, logo, link } = achievement;
          return (
            <div className="achievement" key={title}>
              <div className="company-icon-container">
                <a href={link} target="_blank" rel="noreferrer">
                  <GatsbyImage
                    image={logo.childImageSharp.gatsbyImageData}
                    alt={"company logo"}
                    className={"company-icon"}
                  />
                </a>
              </div>
              <div className="role description">
                <div className="role__title">{title}</div>
                <div className="details">{description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
