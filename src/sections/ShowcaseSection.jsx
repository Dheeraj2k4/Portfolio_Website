import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const aiCareerCoachRef = useRef(null);
  const gradingSystemRef = useRef(null);
  const amazonAnalysisRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [aiCareerCoachRef.current, gradingSystemRef.current, amazonAnalysisRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);
  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full -mt-15">
        <TitleHeader
          title="Projects"
          sub="🚀 My Work"
        />
        <br>
        </br>
        <div className="showcaselayout">
          <div ref={aiCareerCoachRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/Project1.jpg" alt="AI Career Coach Interface" />
            </div>
            <div className="text-content">
              <h2>
                AI Career Coach
              </h2>
              <p className="text-white-50 md:text-xl">
                An intelligent career guidance system built with React Native, Expo, & TailwindCSS for a fast,
                user-friendly experience.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={gradingSystemRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.png"
                  alt="Automated Answer Sheet Grading System"
                />
              </div>
              <h2>Automated Answer Sheet Grading System</h2>
            </div>

            <div className="project" ref={amazonAnalysisRef}>
              <div className="image-wrapper bg-[#FFE7EB] landscape-image">
                <img src="/images/Project3.jpg" alt="Amazon Sales Analysis" className="landscape-img" />
              </div>
              <h2>Amazon Sales Analysis</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
