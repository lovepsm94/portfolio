import { Transition } from "@remix-run/react/transition";
import * as React from "react";
import { LinksFunction } from "remix";
import SocialMedia from "~/components/SocialMedia/SocialMedia";
import { useWasInViewAtLeastOnce } from "~/hooks/useWasInViewAtLeastOnce";
import { ContactFormFields } from "~/types";
import styles from "./Contact.css";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
];

const ContactTitle = () => {
  const { setRef, wasInViewAtLeastOnce } = useWasInViewAtLeastOnce();
  const contactTitleClassname = wasInViewAtLeastOnce
    ? "contact-title"
    : undefined;

  return (
    <svg
      viewBox="0 0 900 110"
      className={`${contactTitleClassname} contact-title xl:mt-20`}
      ref={setRef}
    >
      <text textAnchor="middle" x="50%" y="90%" className="text-9xl">
        Get in touch!
      </text>
    </svg>
  );
};
const ContactMeSection: React.FC = () => {
  return (
    <div className="contact-wrapper flex flex-col items-center justify-center translate-y-[-1rem] xs:translate-y-0 xl:translate-y-[-5rem]">
      <ContactTitle />
      <div className="spacer-div mt-10"></div>
      <div className="contact-form-wrapper w-full custom2:w-[90%] sm:w-4/5 md:w-2/3 lg:w-1/2">
        <div className="contact-form flex flex-col text-contact-label w-full">
          <label
            htmlFor={ContactFormFields.name}
            className="text-base pt-2 pb-1"
          >
            Your name
          </label>
          <input
            id={ContactFormFields.name}
            name={ContactFormFields.name}
            type="text"
            className="appearance-none rounded-lg relative block w-full px-3 py-1"
          />

          <label
            htmlFor={ContactFormFields.email}
            className="text-base pt-2 pb-1"
          >
            Your email
          </label>
          <input
            id={ContactFormFields.email}
            name={ContactFormFields.email}
            className="appearance-none rounded-lg relative block w-full px-3 py-1"
          />

          <label
            htmlFor={ContactFormFields.subject}
            className="text-textLgcolor text-base pt-2 pb-1"
          >
            Your email subject
          </label>
          <input
            id={ContactFormFields.subject}
            name={ContactFormFields.subject}
            type="text"
            className="appearance-none rounded-lg relative block w-full px-3 py-2"
          />

          <label
            htmlFor={ContactFormFields.message}
            className="text-textLgcolor text-base pt-2 pb-1"
          >
            Your message
          </label>
          <textarea
            id={ContactFormFields.message}
            name={ContactFormFields.message}
            className="appearance-none rounded-lg relative block w-full px-3 py-1"
          />

          <button
            type="button"
            name="Send"
            className="contact-btn bg-contact-send hover:bg-contact-sendHover focus:bg-contact-sendHover rounded-lg text-base mt-7 text-white py-3 w-full"
          >
            Send
          </button>
        </div>
      </div>
      <div className="text-textLgColor flex justify-center mt-6 mb-10">
        <SocialMedia />
      </div>
    </div>
  );
};

export default ContactMeSection;
