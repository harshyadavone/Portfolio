import Link from "next/link";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="my-12 md:ml-9 md:my-16 lg:my-20 max-w-[1200px]">
      <div className="sm:px-6 lg:px-8">
        <div className="bg-gray-900/10 rounded-lg p-6 sm:p-8 md:p-12 lg:p-16">
          <h2 className="text-3xl font-bold mb-4 text-white">Get in Touch</h2>
          <p className="text-gray-400 mb-6 sm:mb-8 text-lg">
            I'd love to hear from you! Feel free to reach out with any questions
            or opportunities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href="mailto:harshdana1@gmail.com"
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              <FaEnvelope className="mr-2" />
              <span>harshdana1@gmail.com</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/harshyadavone/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              <FaLinkedin className="mr-2" />
              <span>LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/harshyadavone"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              <FaGithub className="mr-2" />
              <span>GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
