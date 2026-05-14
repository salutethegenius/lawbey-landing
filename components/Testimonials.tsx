import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'LawBey has transformed how we do initial research. Answers are fast, and we always get source citations we can verify.',
    author: 'Legal professional, Nassau',
  },
  {
    quote:
      'Finally, an AI that understands Bahamian law. The RAG approach means we can trust the references.',
    author: 'Law firm partner',
  },
];

const partners = [
  'Trusted by legal professionals',
  'Across the Bahamas',
];

export default function Testimonials() {
  return (
    <section id="resources" className="bg-neutral-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Trusted by legal professionals across the Bahamas
          </p>
        </div>

        {/* Usage metric */}
        <div className="mx-auto mt-12 max-w-2xl text-center">
          <p className="text-lg font-semibold text-primary-700">
            Helping 100+ Bahamians access legal knowledge
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="rounded-2xl bg-white p-8 shadow-sm border border-neutral-100"
            >
              <Quote className="h-10 w-10 text-primary-200" aria-hidden="true" />
              <p className="mt-4 text-neutral-600">&ldquo;{testimonial.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-medium text-neutral-900">{testimonial.author}</p>
            </div>
          ))}
        </div>

        {/* Partner / trust line */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-neutral-200 pt-12">
          {partners.map((label) => (
            <span key={label} className="text-sm font-medium text-neutral-500">
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
