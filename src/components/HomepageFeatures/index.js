import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Banner",
    Svg: require("../../../static/img/format-banner.svg").default,
    description: (
      <>
        By implementing banner ads, you can display rectangular ads at the top
        or bottom of the device screen, providing a non-intrusive way to
        monetize your app.
      </>
    ),
  },
  {
    title: "Interstitial",
    Svg: require("../../../static/img/format-interstitial.svg").default,
    description: (
      <>
        Implementing interstitial ads allows you to display full-screen ads that
        cover the interface of your app until they are closed by the user. They
        are perfect for natural pauses in the app flow.
      </>
    ),
  },
  {
    title: "Rewarded",
    Svg: require("../../../static/img/format-rewarded.svg").default,
    description: (
      <>
        With rewarded ads, you can reward users for watching short videos,
        interacting with playable ads, or completing surveys. This offers a
        monetization option for free-to-play apps.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
