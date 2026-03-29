import { useState, useEffect, useRef } from "react";

const CHARACTERS = "!@#$%^&*()_+-=[]{}|;':\",./<>?";

interface ScrambleTextProps {
  text: string;
}

const ScrambleText = ({ text }: ScrambleTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [isScrambling, setIsScrambling] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (!isScrambling && displayText !== text) {
            scramble();
          }
        } else {
          // Reset when out of view so it animates again next time
          setDisplayText("");
          setIsScrambling(false);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [text, isScrambling, displayText]);

  const scramble = () => {
    setIsScrambling(true);
    let iterations = 0;
    const maxIterations = text.length * 3;

    const interval = setInterval(() => {
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
        setDisplayText(text);
        // We do not set isScrambling to false here so it doesn't immediately re-trigger
        // while it's still in view. It will be reset when it leaves the viewport.
      }
      iterations += 1;
    }, 40);
  };

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
