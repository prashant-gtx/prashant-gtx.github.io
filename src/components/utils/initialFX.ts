import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { smoother } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother.paused(false);
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0a0e17",
    duration: 0.5,
    delay: 1,
  });

  var landingText = new SplitText(
    [".landing-intro h2", ".landing-intro h1"],
    {
      type: "chars,lines",
      linesClass: "split-line",
    }
  );
  gsap.fromTo(
    landingText.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  let TextProps = { type: "chars,lines", linesClass: "split-h2" };

  var landingText2 = new SplitText(".landing-h2-info", TextProps);
  var landingText4 = new SplitText(".landing-h2-1", TextProps);

  gsap.fromTo(
    [landingText2.chars, landingText4.chars],
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  var landingText3 = new SplitText(".landing-h2-info-1", TextProps);
  var landingText3b = new SplitText(".landing-h2-info-2", TextProps);
  var landingText3c = new SplitText(".landing-h2-info-3", TextProps);
  var landingText5 = new SplitText(".landing-h2-2", TextProps);
  var landingText6 = new SplitText(".landing-h2-3", TextProps);
  var landingText7 = new SplitText(".landing-h2-4", TextProps);

  LoopText([landingText2, landingText3, landingText3b, landingText3c]);
  LoopText([landingText4, landingText5, landingText6, landingText7]);
}

function LoopText(texts: SplitText[]) {
  var tl = gsap.timeline({ repeat: -1 });
  const delay = 4;
  const duration = 1.2;

  texts.slice(1).forEach(text => {
    gsap.set(text.chars, { opacity: 0, y: 80 });
  });

  for (let i = 0; i < texts.length; i++) {
    let current = texts[i];
    let next = texts[(i + 1) % texts.length];

    tl.fromTo(
      current.chars,
      { y: 0 },
      {
        y: -80,
        opacity: 0,
        duration: duration,
        ease: "power3.inOut",
        stagger: 0.1,
      },
      `+=${delay}`
    );

    tl.fromTo(
      next.chars,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: duration,
        ease: "power3.inOut",
        stagger: 0.1,
      },
      `<`
    );
  }
}
