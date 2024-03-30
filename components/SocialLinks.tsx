import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const SocialLinks = () => (
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
  </div>
);

export default SocialLinks;
