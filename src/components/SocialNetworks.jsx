import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworks.sass";

const socialNetworks = [
  {
    name: "linkedin",
    icon: <FaLinkedinIn />,
    pathLink: `https://www.linkedin.com/in/lucas-eduardo-a92553158/`,
  },
  {
    name: "github",
    icon: <FaGithub />,
    pathLink: `https://github.com/Eduardo-coder-ia`,
  },
  {
    name: "instagram",
    icon: <FaInstagram />,
    pathLink: `https://www.instagram.com/3du_sal/`,
  },
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a
          href={network.pathLink}
          className="social-btn"
          id={network.name}
          key={network.name}
          target="_blank"
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworks;
