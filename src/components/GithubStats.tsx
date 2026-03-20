import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLightbulb } from "react-icons/fa";
import "./styles/GithubStats.css";

gsap.registerPlugin(ScrollTrigger);

const CountUp = ({ end, duration = 2000 }: { end: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let startTime: number | null = null;
        const animate = (time: number) => {
          if (!startTime) startTime = time;
          const progress = Math.min((time - startTime) / duration, 1);
          const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          setCount(Math.floor(end * easeOut));
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

const GithubStats = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".stat-card", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".github-stats-section",
          start: "top 85%",
        },
      });
      
      gsap.from(".github-banner-content", {
        scale: 0.95,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".github-banner",
          start: "top 75%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="github-stats-section" ref={containerRef} id="github-stats">
      <div className="stats-cards-container">
        <div className="stat-card">
          <h3><CountUp end={24} /></h3>
          <p>Certifications</p>
        </div>
        <div className="stat-card">
          <h3><CountUp end={15} /></h3>
          <p>Projects</p>
        </div>
        <div className="stat-card">
          <h3><CountUp end={2000} /><span>+</span></h3>
          <p>Learning Hours</p>
        </div>
        <div className="stat-card">
          <h3><CountUp end={1000} /><span>+</span></h3>
          <p>Cups of coffee</p>
        </div>
      </div>

      <div className="github-banner">
        <video 
          className="github-banner-video" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/images/tech_bg.mp4" type="video/mp4" />
        </video>
        <div className="github-banner-overlay"></div>
        <div className="github-banner-content">
          <h2>
            More projects on <span>Github</span>
          </h2>
          <p>I love to solve business problems & uncover hidden data stories</p>
          <a
            href="https://github.com/prashant"
            target="_blank"
            rel="noopener noreferrer"
            className="github-btn"
            data-cursor="pointer"
          >
            <FaLightbulb className="btn-icon" /> VIEW MY GITHUB PROJECTS
          </a>
        </div>
      </div>
    </div>
  );
};

export default GithubStats;
