import React from "react";
import { FaTwitter } from "react-icons/fa";
import styles from "../styles/Team.module.css";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  photoUrl: string;
  twitterUrl: string;
}

export const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "@Alf_Orceur",
      role: "Project Manager",
      description: "",
      photoUrl: "/imgTeam/@Alf_Orceur.jpg",
      twitterUrl: "https://x.com/Alf_Orceur",
    },
    {
      name: "@Alf_Disign",
      role: "Art Director",
      description: "",
      photoUrl: "/imgTeam/@Alf_Disign.jpg",
      twitterUrl: "https://x.com/Alfdisign",
    },
    {
      name: "@Alf-Airy",
      role: "Community Manager",
      description: "",
      photoUrl: "/imgTeam/@Alf-Airy.jpg",
      twitterUrl: "https://x.com/alf_hairy",
    },
    {
      name: "@Alf__Abet",
      role: "Web Developer",
      description: "",
      photoUrl: "/imgTeam/@Alf_Abet.jpg",
      twitterUrl: "https://x.com/Alf__Abet",
    },
  ];

  return (
    <div className={styles.teamSection}>
      <h2 className={styles.title}>Team</h2>
      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <div className={styles.memberCard} key={index}>
            <div
              className={styles.photo}
              style={{
                backgroundImage: `url(${member.photoUrl || "/images/placeholder.jpg"})`,
              }}
            />
            <h3 className={styles.name}>{member.name}</h3>
            <p className={styles.role}>{member.role}</p>
            <p className={styles.description}>{member.description}</p>
            <a
              href={member.twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.twitterLink}
            >
              <FaTwitter />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
