import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { connectWallet, disconnectWallet, silentConnectWallet } from "../services/wallet.service";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import { About } from "../components/About";
import Carousel from "../components/Carousel";
import { Team } from "../components/Team";
import Roadmap from "../components/Roadmap";
import Tokenomics from "../components/Tokenomics";
import FAQ from "../components/FAQ";
import React from "react";
import Radio from "../components/Radio"; 
import Tv from "../components/Tv"; 
import Diamond from "../components/Diamond"; 

const Navbar: React.FC<{
  isConnected: boolean;
  address?: string;
  onConnect: () => void;
  onDisconnect: () => void;
}> = ({ isConnected, address, onConnect, onDisconnect }) => {
  const formatAddress = (address: string | undefined) => {
    if (!address) return "";
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <div className={styles.navLinks}>
          
          <a href="#about" className={`${styles.navLink} ${styles.specialLink}`}>
            About
          </a>
          <a href="#roadmap" className={`${styles.navLink} ${styles.specialLink}`}>
            Roadmap
          </a>
          <a href="#team" className={`${styles.navLink} ${styles.specialLink}`}>
            Team
          </a>
          <a href="#tokenomics" className={`${styles.navLink} ${styles.specialLink}`}>
          Alfonomics
          </a>
          <a href="#faq" className={`${styles.navLink} ${styles.specialLink}`}>
            FAQ
          </a>
        </div>
        <div className={styles.walletInfo}>
  <span>{formatAddress(address)}</span>
  {isConnected ? (
    <button className={styles.navButton} onClick={onDisconnect}>
      Disconnect
    </button>
  ) : (
    <div className={styles.enterDappContainer}>
      <button className={styles.navButton} onClick={onConnect}>
      Open App
      </button>
      <span className={`${styles.soonLabel} ${styles.bold}`}>SOON</span>
      </div>
  )}
</div>


      </div>
    </nav>
  );
};

const Home: NextPage = () => {
  const [address, setAddress] = useState<string | undefined>();
  const [isConnected, setConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const trySilentConnect = async () => {
      try {
        if (!isConnected) {
          const wallet = await silentConnectWallet(async () => {
            setConnected(false);
            return Promise.resolve();
          });
          if (wallet) {
            setAddress(wallet.address);
            setConnected(true);
          } else {
            setError(null);
          }
        }
      } catch (err) {
        console.error("Silent connection failed:", err);
        setError(null);
      }
    };
    trySilentConnect();
  }, [isConnected]);

  const handleConnectClick = async () => {
    try {
      const wallet = await connectWallet(async () => {
        setConnected(false);
        return Promise.resolve();
      });
      if (wallet) {
        setAddress(wallet.address);
        setConnected(true);
        setError(null);
      } else {
        setError("Failed to connect wallet.");
      }
    } catch (err) {
      console.error("Connection failed:", err);
      setError("Failed to connect wallet. Please try again.");
    }
  };

  const handleDisconnectClick = async () => {
    try {
      await disconnectWallet();
      setAddress(undefined);
      setConnected(false);
      setError(null);
    } catch (err) {
      console.error("Disconnection failed:", err);
      setError("Failed to disconnect wallet.");
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>AlfOnAlph.com</title>
        <meta name="description" content="ALF is the vibrant and community-driven mascot symbolizing the rise of Alephium blockchain technology." />
        <meta name="keywords" content="ALF, Alephium, blockchain, mascot, community, crypto" />
        <meta name="author" content="Alephium Community" />
        <meta property="og:title" content="AlfOnAlph.com" />
        <meta property="og:description" content="Meet ALF: Alephium’s mascot, powered by the community and representing blockchain innovation." />
        <meta property="og:image" content="/ALF.jpg" />
        <meta property="og:url" content="https://alfonalph.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AlfOnAlph.com" />
        <meta name="twitter:description" content="ALF is the vibrant mascot of Alephium, driven by the community and symbolizing innovation." />
        <meta name="twitter:image" content="/ALF.jpg" />
        <meta name="twitter:url" content="https://x.com/AlfOnAlph" />
        <link rel="icon" href="/favicon.ico" />
      
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" sizes="192x192" href="/icons/512.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/icons/512.png" />
        <meta name="theme-color" content="#000000" />
      </Head>

      <Navbar
        isConnected={isConnected}
        address={address}
        onConnect={handleConnectClick}
        onDisconnect={handleDisconnectClick}
      />
      <button
        className={styles.hamburgerButton}
        onClick={() => {
          const menu = document.querySelector(`.${styles.menuMobile}`);
          menu?.classList.toggle(styles.active);
        }}
      >
        ☰
      </button>

      <div className={styles.menuMobile}>
        <a
          href="#about"
          onClick={() =>
            document.querySelector(`.${styles.menuMobile}`)?.classList.remove(styles.active)
          }
        >
          About
        </a>
        <a
          href="#team"
          onClick={() =>
            document.querySelector(`.${styles.menuMobile}`)?.classList.remove(styles.active)
          }
        >
          Team
        </a>
        <a
          href="#roadmap"
          onClick={() =>
            document.querySelector(`.${styles.menuMobile}`)?.classList.remove(styles.active)
          }
        >
          Roadmap
        </a>
        <a
          href="#tokenomics"
          onClick={() =>
            document.querySelector(`.${styles.menuMobile}`)?.classList.remove(styles.active)
          }
        >
          Tokenomics
        </a>
        <a
          href="#faq"
          onClick={() =>
            document.querySelector(`.${styles.menuMobile}`)?.classList.remove(styles.active)
          }
        >
          FAQ
        </a>
      </div>

      <div>
  {isConnected && <Radio />}
</div>
  
      <section id="about">
        <About />
      </section>
      <section id="carousel">
        <Carousel />
      </section>
      <section id="roadmap">
        <Roadmap />
      </section>
      <section id="carousel">
      <Diamond />
      </section>
      <section id="tokenomics">
        <Tokenomics />
      </section>
      <section id="carousel">
      <Tv />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
