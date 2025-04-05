import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaApple } from 'react-icons/fa';

export const Footer = () => {
  return (
      <footer className="bg-gray-800 text-white py-10 md:py-14 lg:py-16 rounded-t-3xl shadow-lg hover:shadow-2xl transition-all duration-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Social Icons */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-2 md:gap-8 mb-6">
            {/* LinkedIn */}
            <a
                href="https://www.linkedin.com/in/ayoma-hansani-65768b2ab/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl sm:text-3xl text-white hover:bg-gradient-to-r from-pink-400 to-yellow-300 hover:text-gray-900 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <FaLinkedin />
            </a>

            {/* WhatsApp */}
            <a
                href="https://wa.me/+94751838333"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl sm:text-3xl text-white hover:bg-gradient-to-r from-pink-400 to-yellow-300 hover:text-gray-900 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <FaWhatsapp />
            </a>

            {/* Email */}
            <a
                href="mailto:ayohansi17@gmail.com"
                className="text-2xl sm:text-3xl text-white hover:bg-gradient-to-r from-pink-400 to-yellow-300 hover:text-gray-900 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <FaEnvelope />
            </a>

            {/* GitHub */}
            <a
                href="https://github.com/ayomahansani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl sm:text-3xl text-white hover:bg-gradient-to-r from-pink-400 to-yellow-300 hover:text-gray-900 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <FaGithub />
            </a>

            {/* Apple Logo */}
            <a
                href="https://www.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl sm:text-3xl text-white hover:bg-gradient-to-r from-pink-400 to-yellow-300 hover:text-gray-900 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <FaApple />
            </a>
          </div>

          {/* Copyright */}
          <div className="mt-4 md:mt-6">
            <p className="text-xs sm:text-sm text-gray-400">
              © 2025 Ayoma Hansani. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
  );
};
