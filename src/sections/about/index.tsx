import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

import Section from "@/components/section";
import styles from "./index.module.scss";
import { ABOUT_TEXT, SERVICES } from "./constants";

const About: React.FC = () => {
  const generateServices = () => {
    return SERVICES.map((service) => {
      return (
        <li key={service}>
          <FontAwesomeIcon icon={faCaretRight} />
          {service}
        </li>
      );
    });
  };

  return (
    <React.Fragment>
      <Section sectionId="about" className={styles.aboutContainer}>
        <div>
          <h2 className="secondary">
            biagio's <span className="dark">vision</span>
          </h2>
          <Image src="/icons/eye--icon.png" width="75" height="75" />
        </div>
        <article>
          <p>{ABOUT_TEXT}</p>
        </article>
        <div>
          <h3 className="dark">Services & price:</h3>
        </div>
        <ul>{generateServices()}</ul>
      </Section>
    </React.Fragment>
  );
};

export default About;
