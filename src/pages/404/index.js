import * as React from "react";
import { LinkWrapper } from "../../components/button";
import { Seo } from "../../components/seo";
import "./404.scss";

const NotFoundPage = () => {
  return (
    <>
      <div id="not-found">
        <div className="not-found-content">
          <div className="header-1 hero-header">404</div>
          <span>Page not found!</span>
        </div>
        <div className="not-found-links-container">
          Try these links instead
          <div className="footer-nav-links">
            <LinkWrapper className="underline-link" href={"/#hello"}>
              About
            </LinkWrapper>
            <LinkWrapper className="underline-link" href={"/#projects"}>
              Projects
            </LinkWrapper>
            <LinkWrapper className="underline-link" href={"/resume"}>
              Resume
            </LinkWrapper>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;

export const Head = () => {
  return (
    <>
      <Seo title={"Not Found"} />
    </>
  );
};
