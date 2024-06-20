import GithubIcon from "./social-links/Github";
import DiscordIcon from "./social-links/Discord";
import TwitterIcon from "./social-links/Twitter";
import LinkedIn from "./social-links/LinkedIn";

const SocialLinks = () => (
  <div className="flex gap-4">
    <GithubIcon />
    <LinkedIn />
    <TwitterIcon />
    <DiscordIcon />
  </div>
);

export default SocialLinks;
