import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials flex items-center gap-5 justify-center">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              href={socialImg.url}
              target="_blank"
              rel="noopener noreferrer"
              className="icon bg-white hover:bg-gray-200 transition-colors duration-300 rounded-xl flex items-center justify-center w-10 h-10"
              style={{ color: '#222' }}
            >
              {socialImg.svg ? (
                <span
                  dangerouslySetInnerHTML={{ __html: socialImg.svg }}
                  style={{ width: 24, height: 24, display: 'inline-block', verticalAlign: 'middle', fill: '#222' }}
                />
              ) : (
                <img src={socialImg.imgPath} alt={socialImg.name + ' icon'} style={{ width: 20, height: 20, filter: 'invert(0) brightness(0.2)' }} />
              )}
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Dheeraj. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
