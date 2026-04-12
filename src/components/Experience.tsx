import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./styles/Experience.css";

const Experience = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const paraRef = useRef<HTMLParagraphElement>(null);

  const calculateDuration = () => {
    const startDate = new Date(2026, 2, 1); // March 1st, 2026
    const today = new Date();
    
    const diffInMonths = (today.getFullYear() - startDate.getFullYear()) * 12 + (today.getMonth() - startDate.getMonth()) + 1;
    
    if (diffInMonths < 12) {
      return `${diffInMonths} mos`;
    } else {
      const years = Math.floor(diffInMonths / 12);
      const remainingMonths = diffInMonths % 12;
      return `${years} yr${years > 1 ? "s" : ""}${remainingMonths > 0 ? ` ${remainingMonths} mos` : ""}`;
    }
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title reveal
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 90%",
          }
        }
      );
    }

    // Initial reveal for the card wrapper
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { 
          opacity: 0, 
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
          }
        }
      );
    }

    // Para reveal
    if (paraRef.current) {
      gsap.fromTo(
        paraRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
          }
        }
      );
    }

    // Staggered reveal for tags
    const validTags = tagsRef.current.filter(tag => tag !== null);
    if (validTags.length > 0) {
      gsap.fromTo(
        validTags,
        { 
          opacity: 0, 
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 75%",
          }
        }
      );
    }
  }, { dependencies: [] });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!glowRef.current) return;
    
    // We get the rect of the inner card, not the wrapper, for accurate mouse tracking
    const innerCard = e.currentTarget;
    const rect = innerCard.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    gsap.to(glowRef.current, {
      left: x,
      top: y,
      duration: 0.4,
      ease: "power2.out"
    });
  };

  return (
    <div className="experience-section section-container" id="experience">
      <div className="experience-container">
        <h2 ref={titleRef}>
          My <span>Experience</span>
        </h2>
        <div ref={cardRef} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <div 
            className="experience-card" 
            onMouseMove={handleMouseMove}
          >
            <div className="experience-glow" ref={glowRef}></div>
            <div className="experience-card-header">
              <div className="experience-logo">
                <img src="/images/QualityKiosk.png" alt="QualityKiosk logo" />
              </div>
              <div className="experience-role-info">
                <h3>Trainee Engineer : Data Engineering & Validation (DSL-Solutions)</h3>
                <h4>QualityKiosk Technologies · Full-time</h4>
              </div>
              <div className="experience-date">
                <span>Mar 2026 - Present · {calculateDuration()}</span>
              </div>
            </div>
            
            <div className="experience-card-content">
              <p ref={paraRef}>
                Applying data engineering principles to build and optimize ETL pipelines. Performing rigorous data validation to ensure the accuracy and reliability of analytics solutions within the DSL-Solutions framework.
              </p>
              <div className="experience-tags">
                {[
                  "Data Engineering", 
                  "Data Validation", 
                  "DSL-Solutions", 
                  "ETL Pipelines", 
                  "SQL & Python", 
                  "Quality Assurance"
                ].map((tag, index) => (
                  <span 
                    key={tag} 
                    className="experience-tag"
                    ref={el => tagsRef.current[index] = el}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

