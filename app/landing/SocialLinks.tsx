import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SOCIAL_LINKS as socialLinks } from "./constants";

function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-3">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="label-chip"
        >
          <FontAwesomeIcon icon={social.icon} className="text-sm" />
          <span>{social.label}</span>
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
