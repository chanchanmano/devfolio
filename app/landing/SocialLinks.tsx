import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SOCIAL_LINKS as socialLinks } from "./constants";

function SocialLinks() {
  return (
    <div className="flex space-x-18">
      {socialLinks.map((social, index) => (
        <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
          <FontAwesomeIcon icon={social.icon} className="text-6xl hover:text-blue-200 transition-colors duration-300" />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
