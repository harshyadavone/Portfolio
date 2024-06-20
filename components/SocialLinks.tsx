import GithubIcon from "./social-links/Github";
import DiscordIcon from "./social-links/Discord";
import TwitterIcon from "./social-links/Twitter";
import LinkedIn from "./social-links/LinkedIn";

const SocialLinks = () => (
<<<<<<< HEAD
  <div className="flex gap-4">
    <GithubIcon />
    <LinkedIn />
    <TwitterIcon />
    <DiscordIcon />
=======
  <div className="flex gap-6 bg-gray-800 p-4 rounded-lg shadow-lg justify-center">
    <a
      href="https://github.com/harshyadavone"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      className="text-gray-400 hover:text-white transition-colors duration-300"
    >
      <FaGithub size={28} />
    </a>
    <a
      href="https://twitter.com/harshyadavone"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Twitter"
      className="text-gray-400 hover:text-white transition-colors duration-300"
    >
      <FaTwitter size={28} />
    </a>
    <a
      href="https://www.linkedin.com/in/harshdana"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="text-gray-400 hover:text-white transition-colors duration-300"
    >
      <FaLinkedin size={28} />
    </a>
>>>>>>> 4d78f2a47251691acfc1f1fae3c198addcbf308a
  </div>
);

export default SocialLinks;
