import React, { useState } from "react";
import styles from "../styles/FAQ.module.css";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const faqItems: FAQItem[] = [
    {
      question: "What is AlfOnAlph dApp?",
      answer:
        "AlfOnAlph dApp is a decentralized application built on Alephium blockchain, offering various features such as token management, presale, and more.",
    },
    {
      question: "How can I connect my wallet?",
      answer:
        'You can connect your wallet using the "Connect Wallet" button in the navbar, allowing you to access all features of the dApp.',
    },
    {
      question: "What is the purpose of the Roadmap section?",
      answer:
        "The Roadmap section outlines the development milestones and future plans of the Alephium project.",
    },
    {
      question: "How are tokens distributed?",
      answer:
        "Tokens are distributed according to the Tokenomics section, which provides details on allocation percentages for various purposes.",
    },
    {
      question: "What if I have issues connecting my wallet?",
      answer:
        "If you encounter issues, please check the FAQ or contact support for assistance.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <h2>FAQ</h2>
      <div className={styles.faqItems}>
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`${styles.faqItem} ${
              openIndex === index ? styles.open : ""
            }`}
          >
            <div
              className={styles.question}
              onClick={() => toggleFAQ(index)}
            >
              <span>{item.question}</span>
              <span className={styles.icon}>
                {openIndex === index ? "-" : "+"}
              </span>
            </div>
            <div
              className={styles.answer}
              style={{
                maxHeight: openIndex === index ? "200px" : "0",
              }}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
