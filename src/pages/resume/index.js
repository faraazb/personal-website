import React from "react";
import { graphql } from "gatsby";
import { Seo } from "../../components/seo";
import "./resume.scss";

const Resume = ({ data }) => {
  const { content } = data;
  return (
    <>
      <div className="resume-container">
        <div className="resume">
          <iframe
            id="resume-iframe"
            title="Resume"
            src={content.resume.embedUrl}
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Resume;

export const contentQuery = graphql`
  query getContent {
    content: contentJson {
      resume {
        embedUrl
      }
    }
  }
`;

export const Head = () => {
  return (
    <>
      <Seo title={"Resume - Faraaz Biyabani"} />
    </>
  );
};
