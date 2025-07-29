import { useState } from "react";
import { useInView } from "react-intersection-observer";
import TitleHeader from "../components/TitleHeader";

const Resume = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [pdfLoaded, setPdfLoaded] = useState(false);
  const [pdfError, setPdfError] = useState(false);

  const handlePdfLoad = () => {
    console.log('Resume PDF loaded successfully');
    setPdfLoaded(true);
  };

  const handlePdfError = () => {
    console.error('Failed to load resume PDF');
    setPdfError(true);
  };

  return (
    <section id="resume" className="flex-center section-padding" ref={ref}>
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Resume"
          sub="📄 View and Download My Resume"
        />
        <div className="flex flex-col items-center mt-10">
          <div className="w-full max-w-4xl h-[80vh] border-2 border-gray-300 rounded-xl overflow-hidden shadow-lg bg-white">
            {inView && (
              <embed
                src="/DheerajTalapagala_Resume.pdf"
                type="application/pdf"
                width="100%"
                height="100%"
                style={{ minHeight: '600px' }}
                onLoad={handlePdfLoad}
                onError={handlePdfError}
              />
            )}
            {pdfError && (
              <div className="flex items-center justify-center h-full text-red-500">
                <p>Failed to load resume. Please download below.</p>
              </div>
            )}
          </div>
          <a
            href="/DheerajTalapagala_Resume.pdf"
            download="DheerajTalapagala_Resume.pdf"
            className="mt-8 flex items-center cta-wrapper"
            style={{ textDecoration: 'none' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="cta-button group flex items-center px-20">
              <div className="bg-circle" />
              <p className="text">Download Resume</p>
              <div className="arrow-wrapper ml-3 flex justify-center items-center rounded-full size-10 overflow-hidden">
                <img src="/images/arrow-down.svg" alt="arrow" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume; 