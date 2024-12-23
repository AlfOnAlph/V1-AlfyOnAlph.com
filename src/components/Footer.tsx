import React from "react";
import {
  FaTwitter,
  FaMedium,
  FaGithub,
  FaDiscord,
} from "react-icons/fa";
import styles from "../styles/Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <nav className={styles.navLinks}>
          <a href="#about">About</a>
          <a href="#team">Team</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#tokenomics">Tokenomics</a>
          <a href="#faq">FAQ</a>
        </nav>

        <div className={styles.socialIcons}>
          <a
            href="https://x.com/AlfOnAlph"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter className={styles.icon} />
          </a>
          <a
            href="https://medium.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Medium"
          >
            <FaMedium className={styles.icon} />
          </a>
          <a
            href="https://github.com/AlfOnAlph"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className={styles.icon} />
          </a>
          <a
            href="https://discord.gg/VhFcaP7b"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
          >
            <FaDiscord className={styles.icon} />
          </a>
        </div>

        <div className={styles.footerBottom}>
          <h3>&copy; 2024 $Alf | AlfOnAlph.com</h3>
          <h1>ℵ</h1>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
