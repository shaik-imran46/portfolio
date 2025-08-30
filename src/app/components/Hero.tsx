'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn, scaleIn } from '@/utils/animation';

export default function Hero() {
  return (
    <section className="py-28">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          {/* Profile Image */}
          <motion.div
            className="flex items-center justify-center mb-4"
            {...scaleIn}
            transition={{ delay: 0.2 }}
          >
            <Image
              src="/projects/saki.png"
              alt="Profile"
              width={128}
              height={128}
              className="object-cover w-32 h-32 mb-4 rounded-full ring-2 ring-primary"
            />
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="mb-6 text-4xl font-bold md:text-6xl"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            Hi, I&apos;m{' '}
            <motion.span
              className="text-primary"
              {...fadeIn}
              transition={{ delay: 0.8 }}
            >
              IMRAN SAKI
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mb-8 text-xl text-gray-600 md:text-2xl dark:text-gray-300"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            Full Stack Developer | DJANGO DEVELOPER | CURRENTLY LEARNING PYTHON WITH DSA
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex justify-center mb-8 space-x-4"
            {...fadeInUp}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="https://github.com/shaik-imran4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-primary"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/imran-saki-1b2988301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-primary"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://x.com/ImranSaki178689?t=-fZzNspmRKTJR3ZFLLD4dA&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-primary"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter />
            </motion.a>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex flex-col justify-center gap-4 md:flex-row"
            {...fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/projects"
                className="inline-block w-full px-8 py-3 text-white transition-colors rounded-lg bg-primary md:w-auto hover:bg-primary/90"
              >
                View Projects
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-block w-full px-8 py-3 text-gray-800 transition-colors bg-gray-500 rounded-lg md:w-auto dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
