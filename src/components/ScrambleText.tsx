import { useState, useEffect, useRef } from "react";

const CHARACTERS = "!@#$%^&*()_+-=[]{}|;':\",./<>?";

interface ScrambleTextProps {
  text: string;
}

const ScrambleText = ({ text }: ScrambleTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [isIntersecting, setIsIntersecting] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

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
    let timeoutId: NodeJS.Timeout;

    const runScramble = () => {
      let iterations = 0;
      const maxIterations = text.length * 3;

      const interval = setInterval(() => {
        if (!isMounted) {
          clearInterval(interval);
          return;
        }

        setDisplayText(() => {
          return text
            .split("")
            .map((letter, index) => {
              if (index < iterations / 3) {
                return text[index];
              }
              if (letter === " ") return " ";
              return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
            })
            .join("");
        });

        if (iterations >= maxIterations) {
          clearInterval(interval);
          if (isMounted) {
            setDisplayText(text);
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
  }, [isIntersecting, text]);

  const renderText = () => {
    // Retain the specific span styling for "Question?" when the animation is finished
    if (displayText === text && text.includes("Question?")) {
      const parts = text.split("Question?");
      return (
        <>
          {parts[0]}<span>Question?</span>{parts[1]}
        </>
      );
    }
    // Render the scrambled string with a monospace-like tracking for the matrix effect if we want,
    // but inheriting the font is usually fine.
    return displayText || text.split("").map(() => " ").join("");
  };

  return <span ref={containerRef} style={{ display: "inline-block", minHeight: "1em", minWidth: "10em" }}>{renderText()}</span>;
};

export default ScrambleText;
