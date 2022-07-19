import * as React from "react";
import { LinksFunction, MetaFunction, useTransition } from "remix";
import {
  EatLearnCode,
  GradientBackground3,
  Portfolio,
} from "~/components/Decoration";
import { links as linkButtonStyles } from "~/components/ExternalLinkButton/ExternalLinkButton";
import { links as ResumeBtnStyles } from "~/components/ResumeButton/ResumeButton";
import { links as SocialMediaStyles } from "~/components/SocialMedia/SocialMedia";
import {
  AUTHOR,
  fixedWidthLayoutClasses,
  IMAGE_HEIGHT,
  IMAGE_WIDTH,
  PORTFOLIO_WEBSITE_NAME,
  TWITTER_ACC,
  TWITTER_CARD_TYPE,
  WEBSITE_DESCRIPTION,
  WEBSITE_KEYWORDS,
  WEBSITE_URL,
} from "~/constants";
import AboutMe, { links as aboutMeStyles } from "~/sections/AboutMe/AboutMe";
import ContactMeSection, {
  links as contactStyles,
} from "~/sections/Contact/Contact";
import MySkills, { links as skillsStyles } from "~/sections/MySkills/MySkills";
import Projects, {
  links as projectsStyles,
} from "~/sections/Projects/Projects";

export const meta: MetaFunction = () => {
  return {
    title: PORTFOLIO_WEBSITE_NAME,
    description: WEBSITE_DESCRIPTION,
    keywords: WEBSITE_KEYWORDS,
    "twitter:title": PORTFOLIO_WEBSITE_NAME,
    "twitter:description": WEBSITE_DESCRIPTION,
    "twitter:alt": PORTFOLIO_WEBSITE_NAME,
    "twitter:card": TWITTER_CARD_TYPE,
    "twitter:creator": TWITTER_ACC,
    "twitter:site": TWITTER_ACC,
    "og:url": WEBSITE_URL,
    "og:title": PORTFOLIO_WEBSITE_NAME,
    "og:description": WEBSITE_DESCRIPTION,
    "og:image:width": IMAGE_WIDTH,
    "og:image:height": IMAGE_HEIGHT,
    author: AUTHOR,
    "theme-color": "#16181a",
  };
};
export const links: LinksFunction = () => {
  return [
    {
      rel: "canonical",
      href: "https://www.google.com/",
    },
    ...linkButtonStyles(),
    ...aboutMeStyles(),
    ...skillsStyles(),
    ...projectsStyles(),
    ...contactStyles(),
    ...ResumeBtnStyles(),
    ...SocialMediaStyles(),
  ];
};

const Index: React.FC = () => {
  return (
    <>
      <div className="app tracking-wide text-lg overflow-hidden">
        <div className={`${fixedWidthLayoutClasses} flex flex-col`}>
          <AboutMe />
          <div style={{ zIndex: -1 }}>
            <GradientBackground3 />
            <div className="spacer-div mt-20 xs:mt-80"></div>
            <EatLearnCode />
          </div>
          <Portfolio />
          <div className="spacer-div xs:mt-44 sm:mt-96" id="portfolio"></div>
          <MySkills />
          <div className="spacer-div mt-24 custom2:mt-24"></div>
          <section id="projects">
            <div className="spacer-div sm:mt-0"></div>
            <Projects />
          </section>
          <div className="spacer-div mt-24"></div>
          <div className="spacer-div mt-10"></div>
        </div>
        <div className="blob-bg pb-10" id="contact">
          <div className={`${fixedWidthLayoutClasses} pt-20`}>
            <ContactMeSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
