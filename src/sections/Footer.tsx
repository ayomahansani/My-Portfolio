import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaApple } from 'react-icons/fa';

export const Footer = () => {
  return (
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto text-center">
          <div className="flex justify-center gap-8">
            {/* LinkedIn */}
            <a
                href="https://www.linkedin.com/in/ayoma-hansani-65768b2ab/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-white hover:bg-gradient-to-r from-pink-400 to-yellow-300 hover:text-gray-900 p-3 rounded-full transition-all duration-300"
            >
              <FaLinkedin />
            </a>

            {/* WhatsApp */}
            <a
                href="https://wa.me/+94751838333"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-white hover:bg-gradient-to-r from-pink-400 to-yellow-300 hover:text-gray-900 p-3 rounded-full transition-all duration-300"
            >
              <FaWhatsapp />
            </a>

            {/* Email */}
            <a
                href="mailto:ayohansi17@gmail.com"
                className="text-3xl text-white hover:bg-gradient-to-r from-pink-400 to-yellow-300 hover:text-gray-900 p-3 rounded-full transition-all duration-300"
            >
              <FaEnvelope />
            </a>

            {/* GitHub */}
            <a
                href="https://github.com/ayomahansani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-white hover:bg-gradient-to-r from-pink-400 to-yellow-300 hover:text-gray-900 p-3 rounded-full transition-all duration-300"
            >
              <FaGithub />
            </a>

            {/* Apple Logo */}
            <a
                href="https://www.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-white hover:bg-gradient-to-r from-pink-400 to-yellow-300 hover:text-gray-900 p-3 rounded-full transition-all duration-300"
            >
              <FaApple />
            </a>
          </div>

          <div className="mt-6">
            <p className="text-sm text-gray-400">© 2025 Ayoma Hansani. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
  );
};
