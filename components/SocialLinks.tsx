import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const SocialLinks = () => (
  <div className="flex gap-4 shadow-sm shadow-purple-300 p-3 rounded-md">
    <Link
      href="https://github.com/harshyadavone"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-100 hover:text-gray-500"
    >
      <FaGithub size={24} /> {/* Use the imported GitHub icon */}
    </Link>
    <Link
      href="https://twitter.com/harshyadavone"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-100 hover:text-gray-500"
    >
      <FaTwitter size={24} /> {/* Use the imported Twitter icon */}
    </Link>
    <Link
      href="https://linkedin.com/in/yourusername"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-100 hover:text-gray-500"
    >
      <FaLinkedin size={24} /> {/* Use the imported LinkedIn icon */}
    </Link>
  </div>
);

export default SocialLinks;
