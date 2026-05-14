'use client';

import { motion } from 'framer-motion';

const LOGIN_URL = 'https://beta.lawbey.com';

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-20 sm:py-24">
      <motion.div
        className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to get started? It&apos;s free!
        </h2>
        <p className="mt-4 text-lg text-primary-100">
          No credit card required. Start chatting with LawBey in minutes.
        </p>
        <motion.a
          href={LOGIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex rounded-lg bg-white px-8 py-4 text-lg font-semibold text-primary-700 shadow-lg hover:bg-primary-50 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Get Started
        </motion.a>
        <p className="mt-4 text-sm text-primary-200">No credit card required</p>
      </motion.div>
    </section>
  );
}
