import { useState, useEffect, useRef } from "react";

const CHARACTERS = "!@#$%^&*()_+-=[]{}|;':\",./<>?";

interface ScrambleTextProps {
  text?: string;
  texts?: string[];
}

const ScrambleText = ({ text, texts }: ScrambleTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [isIntersecting, setIsIntersecting] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const currentIndexRef = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setIsIntersecting(entries[0].isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isIntersecting) {
      setDisplayText("");
      return;
    }

    let isMounted = true;
    let timeoutId: ReturnType<typeof setTimeout>;

    const runScramble = () => {
      const currentText = texts ? texts[currentIndexRef.current] : (text || "");
      if (!currentText) return;

      let iterations = 0;
      const maxIterations = currentText.length * 3;

      const interval = setInterval(() => {
        if (!isMounted) {
          clearInterval(interval);
          return;
        }

        setDisplayText(() => {
          return currentText
            .split("")
            .map((letter, index) => {
              if (index < iterations / 3) {
                return currentText[index];
              }
              if (letter === " ") return " ";
              return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
            })
            .join("");
        });

        if (iterations >= maxIterations) {
          clearInterval(interval);
          if (isMounted) {
            setDisplayText(currentText);

            if (texts && texts.length > 1) {
              currentIndexRef.current = (currentIndexRef.current + 1) % texts.length;
            }

            // Wait 3 seconds before scrambling again
            timeoutId = setTimeout(() => {
              if (isMounted) runScramble();
            }, 3000);
          }
        }
        iterations += 1;
      }, 40);
    };

    runScramble();

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, [isIntersecting, text, texts]);

  const renderText = () => {
    const currentText = texts ? texts[currentIndexRef.current] : (text || "");
    // Retain the specific span styling for "Question?" when the animation is finished
    if (displayText === currentText && currentText.includes("Question?")) {
      const parts = currentText.split("Question?");
      return (
        <>
          {parts[0]}<span>Question?</span>{parts[1]}
        </>
      );
    }
    return displayText || currentText.split("").map(() => " ").join("");
  };

  return <span ref={containerRef} style={{ display: "inline-block", minHeight: "1.2em", minWidth: "12em" }}>{renderText()}</span>;
};

export default ScrambleText;
