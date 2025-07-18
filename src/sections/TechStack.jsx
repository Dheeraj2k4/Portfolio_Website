import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";
import { techStack3D, techStackDataAnalytics, techStackBackendAutomation } from "../constants";
// import { techStackImgs } from "../constants";

const TechStack = () => {
  // Animate the tech cards in the skills section
  useGSAP(() => {
    // This animation is triggered when the user scrolls to the #skills wrapper
    // The animation starts when the top of the wrapper is at the center of the screen
    // The animation is staggered, meaning each card will animate in sequence
    // The animation ease is set to "power2.inOut", which is a slow-in fast-out ease
    gsap.fromTo(
      ".tech-card",
      {
        // Initial values
        y: 50, // Move the cards down by 50px
        opacity: 0, // Set the opacity to 0
      },
      {
        // Final values
        y: 0, // Move the cards back to the top
        opacity: 1, // Set the opacity to 1
        duration: 1, // Duration of the animation
        ease: "power2.inOut", // Ease of the animation
        stagger: 0.2, // Stagger the animation by 0.2 seconds
        scrollTrigger: {
          trigger: "#skills", // Trigger the animation when the user scrolls to the #skills wrapper
          start: "top center", // Start the animation when the top of the wrapper is at the center of the screen
        },
      }
    );
  });

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />
        <div className="space-y-10">
          {/* Programming & Frameworks (3D icons) */}
          <br></br>
          <h2 className="text-xl font-bold mb-2">Programming & Frameworks</h2>
          <br></br>
          <div className="tech-grid">
            {techStack3D.map((tech) => (
              <div
                key={tech.name}
                className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
              >
                <div className="tech-card-animated-bg" />
                <div className="tech-card-content">
                  <div className="tech-icon-wrapper">
                    <TechIconCardExperience model={tech} />
                  </div>
                  <div className="padding-x w-full">
                    <p>{tech.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Data & Analytics (images) */}
          <h2 className="text-xl font-bold mb-2">Data & Analytics</h2>
          <br></br>
          <div className="tech-grid">
            {techStackDataAnalytics.map((tech) => (
              <div
                key={tech.name}
                className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
              >
                <div className="tech-card-animated-bg" />
                <div className="tech-card-content">
                  <div className="tech-icon-wrapper">
                    <img
                      src={tech.imgPath}
                      alt={tech.name}
                      className="w-24 h-24 object-contain mx-auto"
                    />
                  </div>
                  <div className="padding-x w-full">
                    <p>{tech.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Backend & Automation (images) */}
          <h2 className="text-xl font-bold mb-1">Backend & Automation</h2>
          <br></br>
          <div className="tech-grid mt-1">
            {techStackBackendAutomation.map((tech) => (
              <div
                key={tech.name}
                className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
              >
                <div className="tech-card-animated-bg" />
                <div className="tech-card-content">
                  <div className="tech-icon-wrapper">
                    <img
                      src={tech.imgPath}
                      alt={tech.name}
                      className={`w-24 h-24 object-contain mx-auto${tech.name === 'n8n' ? ' rounded-full bg-white p-2' : ''}`}
                    />
                  </div>
                  <div className="padding-x w-full">
                    <p>{tech.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
