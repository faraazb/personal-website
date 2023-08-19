import React from "react";
import "./index.scss";
import { graphql } from "gatsby";
import { Seo } from "../components/seo";
import { AboutSection } from "../sections/about";
import { SkillsSection } from "../sections/skills";
import { ProjectsSection } from "../sections/projects";
import { ExperienceSection } from "../sections/experience";
import { AchievementsSection } from "../sections/achievements";

const IndexPage = ({ data }) => {
  const { content } = data;
  return (
    <>
      <AboutSection hello={content.hello} contact={content.contact} />
      <SkillsSection skills={content.skills} />
      <div className="container">
        <ExperienceSection experiences={content.experiences} />
        <AchievementsSection achievements={content.achievements} />
      </div>
      <ProjectsSection projects={content.projects} />
    </>
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
        roles {
          title
          duration
        }
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
