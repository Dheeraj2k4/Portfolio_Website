import TitleHeader from "../components/TitleHeader";

const Resume = () => {
  return (
    <section id="resume" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Resume"
          sub="📄 View and Download My Resume"
        />
        <div className="flex flex-col items-center mt-10">
          <div className="w-full max-w-4xl h-[80vh] border-2 border-gray-300 rounded-xl overflow-hidden shadow-lg bg-white">
            <iframe
              src="/DheerajTalapagala_Resume.pdf"
              title="Dheeraj Talapagala Resume"
              width="100%"
              height="100%"
              style={{ minHeight: '600px', border: 'none' }}
            />
          </div>
          <a
            href="/DheerajTalapagala_Resume.pdf"
            download="DheerajTalapagala_Resume.pdf"
            className="mt-8 flex items-center cta-wrapper"
            style={{ textDecoration: 'none' }}
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