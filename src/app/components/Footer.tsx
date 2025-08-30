import Link from 'next/link'
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaGlobe } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 dark:bg-dark dark:border-gray-800">
      <div className="container px-4 py-8 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold text-primary">
              Devfolio&trade;
            </Link>
            <p className="mt-2 text-sm text-secondary">
              © {new Date().getFullYear()} Devfolio. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/shaik-imran46"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors text-secondary hover:text-primary"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/ImranSaki178689?t=-fZzNspmRKTJR3ZFLLD4dA&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors text-secondary hover:text-primary"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/imran-saki-1b2988301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors text-secondary hover:text-primary"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/mr._imran_05_?utm_source=qr&igsh=MW5oem1zZ243cjdicA=="
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors text-secondary hover:text-primary"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
          
            <a
              href="portfolio-eta-fawn-24.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors text-secondary hover:text-primary"
            >
              <FaGlobe className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 
