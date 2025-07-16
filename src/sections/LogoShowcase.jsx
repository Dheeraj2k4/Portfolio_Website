import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt={icon.name} />
    </div>
  );
};

// This file is now intentionally left blank as the LogoShowcase section is removed.
