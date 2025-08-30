import Link from 'next/link'
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaGlobe } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold text-primary">
              Devfolio&trade;
            </Link>
            <p className="text-sm text-secondary mt-2">
              © {new Date().getFullYear()} Devfolio. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/shaik-imran46"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href="https://x.com/ImranSaki178689?t=-fZzNspmRKTJR3ZFLLD4dA&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/imran-saki-1b2988301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a
              href="c:\Users\ADMIN\AppData\Local\Packages\5319275A.WhatsAppDesktop_cv1g1gvanyjgm\TempState\5EF698CD9FE650923EA331C15AF3B160\WhatsApp Image 2025-08-27 at 19.27.26_f640a34d.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
          
            <a
              href="https://portfolio.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              <FaGlobe className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 
