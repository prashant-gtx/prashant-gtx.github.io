import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import About from "./About";
import ScrollProgress from "./ScrollProgress";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import setSplitText from "./utils/splitText";

const Career = lazy(() => import("./Career"));
const Education = lazy(() => import("./Education"));
const Certifications = lazy(() => import("./Certifications"));
const Contact = lazy(() => import("./Contact"));
const Work = lazy(() => import("./Work"));
const GithubStats = lazy(() => import("./GithubStats"));
const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  return (
    <div className="container-main">
      <ScrollProgress />
      <Cursor />
      <Navbar />
      <SocialIcons />
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktopView && children}</Landing>
            <About />
            <WhatIDo />
            <Suspense fallback={<div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>Loading...</div>}>
              <Career />
              <Education />
              <Work />
              <Certifications />
              {isDesktopView && <TechStack />}
              <GithubStats />
              <Contact />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
