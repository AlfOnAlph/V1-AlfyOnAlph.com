import React, { useState } from "react";
import styles from "../styles/About.module.css";

export const About: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <section className={styles.aboutSection}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2 className={styles.title}>$ALF</h2>
          <h2>
            <span>Presale starting soon</span>
           
            <span className={styles.blinkingDots}>

              <span className={`${styles.dot} ${styles.dot1}`}></span>
              <span className={`${styles.dot} ${styles.dot2}`}></span>
              <span className={`${styles.dot} ${styles.dot3}`}></span>
            </span>
          </h2>
          <br/>
          <p>
            Every blockchain needs a <strong>meme coin</strong> to claim its territory, and on 
            <strong> Alephium</strong>, that’s <strong>$ALF</strong>. We know Alephium has 
            <strong> massive potential</strong>, it’s going to take off, and <strong>$ALF</strong> 
            will be right there to represent this rise. ALF isn’t just a nod to an 
            <strong> old TV show</strong>; it’s the mascot that’s about to leave its mark on 
            <strong> Alephium</strong>.
          </p>
          {isExpanded && (
            <p>
              But <strong>$ALF</strong> is, above all, about the <strong>community</strong>. 
              It’s <strong>you, me</strong>, and everyone who sees Alephium as more than just a 
              <strong> l1</strong>. It’s a project we’re <strong>building together</strong>, 
              not something cooked up in a <strong>corporate office</strong>. Every 
              <strong>holder</strong>, every <strong>member</strong>, every <strong>voice</strong> 
              is part of the story we’re creating. With <strong>$ALF</strong>, we’re showing 
              the world that <strong>Alephium</strong> is the <strong>future</strong>, 
              and we’re here to be part of it.
            </p>
          )}
          <button className={styles.toggleButton} onClick={toggleExpanded}>
            {isExpanded ? "Read less ▲" : "Read more ▼"}
          </button>
        </div>
      </div>
    </section>
  );
};
