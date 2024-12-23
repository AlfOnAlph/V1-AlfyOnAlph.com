import React from 'react';
import styles from '../styles/Roadmap.module.css';

interface RoadmapItem {
  title: string;
  description: string;
  date?: string;
}

const Roadmap: React.FC = () => {
  const roadmapItems: RoadmapItem[] = [
    {
      title: 'Phase 1: Preparation',
      description: 'Launch of the $ALF website, setup of social media, Discord community launch, Medium blog launch, and GitHub setup.',
    },
    {
      title: 'Phase 2: Token Creation',
      description: 'Development and audit of $ALF contract, tokenomics setup, presale launch, and full transparency.',
    },
    {
      title: 'Phase 3: Community Growth',
      description: 'Memes, collaborations, giveaways, special roles, contests, polls, and positioning $ALF as Alephium’s mascot.',
    },
    {
      title: 'Phase 4: Expansion & Utilities',
      description: 'Listing $ALF on DEXs, real-time price tracking, visual guides, interface improvements, and targeted blockchain marketing.',
    },
    {
      title: 'Phase 5: Take Control',
      description: 'Voting platform, community project funding, educational tools, and celebrating 10,000 holders.',
    },
  ];

  return (
    <div className={styles.roadmapContainer}>
      <h2 className={styles.roadmapTitle}>Roadmap</h2>
      <div className={styles.roadmapItems}>
        {roadmapItems.map((item, index) => (
          <div key={index} className={`${styles.roadmapItem} ${index === 0 ? styles.activePhase : ''}`}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {item.date && <span>{item.date}</span>}
          </div>
        ))}
        <div className={styles.roadmapConnector}></div>
      </div>
    </div>
  );
};

export default Roadmap;
