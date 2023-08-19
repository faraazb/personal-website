import React, { forwardRef } from "react";
import { Link } from "gatsby";
import { githubIcon, globeIcon, mailIcon, youtubeIcon } from "../icons";
import "./button.scss";

const LinkWrapper = forwardRef((props, ref) => {
  let { href, children, ...rest } = props;
  return (
    <Link to={href}>
      <a ref={ref} {...rest}>
        {children}
      </a>
    </Link>
  );
});

const LinkButton = (props) => {
  const { accent = "", type, link, ...rest } = props;
  let icon, label;
  switch (type) {
    case "Mail":
      icon = mailIcon;
      label = "Email ID";
      break;
    case "GitHub":
      icon = githubIcon;
      label = "GitHub page";
      break;
    case "Website":
      icon = globeIcon;
      label = "Website";
      break;
    case "YouTube":
      icon = youtubeIcon;
      label = "YouTube video";
      break;
    default:
      icon = globeIcon;
      label = "Website";
  }

  return (
    <a href={link} className="button-link" {...rest} aria-label={label}>
      <div className={`accent-button ${accent}`}>
        {icon}
        <span>{type}</span>
      </div>
    </a>
  );
};

const ContactLink = (props) => {
  const { href, text, icon, title } = props;
  return (
    <a
      className="underline-link contact-link"
      href={href}
      target="_blank"
      rel="noreferrer"
      title={title || text}
    >
      {icon && icon}
      <span className="contact-link-label">{text}</span>
    </a>
  );
};

export { LinkWrapper, LinkButton, ContactLink };
