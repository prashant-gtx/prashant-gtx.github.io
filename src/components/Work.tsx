import { useState, useCallback, useEffect } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";

const projects = [
  {
    title: "MarketPulse AI",
    description: "MarketPulse-AI is an AI-powered financial news intelligence platform that aggregates real-time market news, performs sentiment analysis using FinBERT, and applies a Retrieval-Augmented Generation (RAG) pipeline to provide grounded, context-aware insights through a local LLM (Llama 3.2).",
    tools: "Fast API, RAG, ChromaDB, Llama 3.2, FinBERT, BeautifulSoup, APScheduler",
    image: "/images/proj_6.jpg",
    link: "https://github.com/prashant-gtx/MarketPulse-AI",
  },
  {
    title: "Detecting Early Stage Knee Osteoarthritis Using Deep Transfer Learning",
    description: "Developed an automated diagnostic system using deep learning to classify knee osteoarthritis severity (KL grades 0–4) from X-ray images. Integrated the model into a Streamlit web app with Grad-CAM for visual explanations and clinical support.",
    tools: "Python, Deep Learning, CNN, Streamlit",
    image: "/images/proj_4.jpg",
    link: "https://github.com/prashant-gtx/Detecting-Early-Stage-Knee-Osteoarthritis",
  },
  {
    title: "SuperStore Sales Analysis and Forecasting",
    description: "Built an interactive Power BI dashboard for Superstore sales, featuring regional KPIs, product trends, and 15-day sales forecasting to support data-driven decisions.",
    tools: "Power BI, Forecasting, Data Analysis",
    image: "/images/proj_1.jpg",
    link: "https://github.com/prashant-gtx/SuperStore-Sales-Analysis-and-Forecasting",
  },
  {
    title: "E-Commerce Sales Dashboard",
    description: "Created a dynamic Power BI dashboard to visualize e-commerce sales, profits, and product trends by state, category, and payment modes for performance optimization.",
    tools: "Power BI, Data Visualization, E-Commerce",
    image: "/images/proj_2.jpg",
    link: "https://github.com/prashant-gtx/E-Commerce-Sales-Dashboard",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [goToNext, isHovered]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Projects</span>
        </h2>

        <div 
          className="carousel-wrapper"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.description}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        <div className="carousel-link" style={{ marginTop: "1rem" }}>
                          <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem", color: "#ffffff", textDecoration: "none", fontSize: "1.1rem", borderBottom: "1px solid #ffffff", paddingBottom: "2px" }} data-cursor="disable">
                            View on GitHub <MdArrowOutward />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
