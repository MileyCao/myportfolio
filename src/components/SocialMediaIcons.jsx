import linkedinIcon from '../assets/linkedin.svg';
import instagramIcon from '../assets/instagram.svg';
import githubIcon from '../assets/github.svg';
const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src={linkedinIcon} />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src={instagramIcon} />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/MileyCao"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src={githubIcon} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
