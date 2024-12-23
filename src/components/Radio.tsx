import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import ReactDOM from "react-dom";

const WinampPlayer: React.FC = () => {
  const webampRef = useRef<HTMLDivElement>(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 480);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsMounted(true); 
    if (typeof window !== "undefined") {
      import("webamp").then(({ default: Webamp }) => {
        const webamp = new Webamp({
          initialTracks: [
            {
              metaData: { artist: "Léona Vayr", title: "Pulse Mirage" },
              url: "/Music/Léona Vayr.mp3",
            },
            {
              metaData: { artist: "Séléna Noctra", title: "Eclipse Groove" },
              url: "/Music/Séléna Noctra.mp3",
            },
            {
              metaData: { artist: "Jace Rydd", title: "Grind Theory" },
              url: "/Music/Jace Rydd.mp3",
            },
            {
              metaData: { artist: "Iron Revenant", title: "Ashes of Eternity" },
              url: "/Music/Iron Revenant.mp3",
            },
            {
              metaData: { artist: "Lil Nebula", title: "Gravity Flex" },
              url: "/Music/Lil Nebula.mp3",
            },
            {
              metaData: { artist: "Rusted Reverie", title: "Echoes of the Afterglow" },
              url: "/Music/Rusted Reverie.mp3",
            },
            {
              metaData: { artist: "Tex Wilder", title: "Lonely Trails" },
              url: "/Music/Tex Wilder.mp3",
            },
          ],
        });

        if (webampRef.current) {
          webamp.renderWhenReady(webampRef.current);
        }
      });
    }
  }, []);

  const playerStyle: React.CSSProperties = isSmallScreen
    ? {
        position: "fixed",
        top: "65%", 
        left: "50%", 
        transform: "translateX(-50%)",
        zIndex: 9999,
      }
    : {
        position: "absolute",
        top: "40%", 
        left: "auto",
        right: "80%", 
        transform: "translateY(-50%)",
        zIndex: 9999,
      };

  const playerContent = (
    <div style={playerStyle}>
      <div ref={webampRef} />
    </div>
  );

  return isMounted ? ReactDOM.createPortal(playerContent, document.body) : null;
};
  export default dynamic(() => Promise.resolve(WinampPlayer), { ssr: false });
