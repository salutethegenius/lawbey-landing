'use client';

import { motion } from 'framer-motion';
import {
  MessageCircle,
  UploadCloud,
  Users,
  Scale,
} from 'lucide-react';

const features = [
  {
    title: 'Chat Assistant',
    description:
      'Conversational Q&A about Bahamian law. Get instant answers with source citations.',
    icon: MessageCircle,
  },
  {
    title: 'Document Upload & Search',
    description:
      'Upload case files and ask LawBey questions about them in real time.',
    icon: UploadCloud,
  },
  {
    title: 'Team Collaboration',
    description:
      'Share workspaces, collaborate on legal research with your firm.',
    icon: Users,
  },
  {
    title: 'RAG Research',
    description:
      'Research backed by Bahamian statutes, UK common law, and verified legal databases.',
    icon: Scale,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Features() {
  return (
    <section id="features" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-base font-semibold leading-7 text-primary-600">Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Everything you need for legal research
          </p>
        </motion.div>
        <motion.div
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 sm:gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm transition-all hover:border-primary-200 hover:shadow-md hover:-translate-y-0.5"
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900">{feature.title}</h3>
              <p className="mt-2 text-neutral-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
