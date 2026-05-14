'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Shield, MapPin } from 'lucide-react';

const benefits = [
  {
    title: 'Always Cites Sources',
    description: 'Every answer includes references to specific laws and cases.',
    icon: CheckCircle,
  },
  {
    title: 'No Hallucinations',
    description: 'RAG-powered accuracy means reliable, fact-checked responses.',
    icon: Shield,
  },
  {
    title: 'Built for Bahamas',
    description: 'Specialized knowledge of Bahamian legal system and local statutes.',
    icon: MapPin,
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="bg-neutral-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-base font-semibold leading-7 text-primary-600">Why LawBey?</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Trusted, accurate legal assistance
          </p>
        </motion.div>
        <motion.div
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-sm"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                <benefit.icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900">{benefit.title}</h3>
              <p className="mt-2 text-neutral-600">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
