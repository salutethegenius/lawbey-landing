'use client';

const LOGIN_URL = 'https://beta.lawbey.com';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col items-center justify-center px-4 py-20 sm:py-24 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Gradient background - Bahamian colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100/50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-200/30 via-transparent to-accent-500/10" />

      <div className="relative mx-auto max-w-4xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
          <span className="block">LawBey: </span>
          <span className="block bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
            AI for Bahamian Law
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600 sm:text-xl">
          Accurate, RAG-driven legal answers in plain English. Trained on Bahamian law with no
          hallucinations.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-lg bg-primary-600 px-8 py-4 text-center text-lg font-semibold text-white shadow-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all hover:scale-[1.02] sm:w-auto"
          >
            Start Chatting
          </a>
          <a
            href="#features"
            className="w-full rounded-lg border-2 border-primary-600 bg-white px-8 py-4 text-center text-lg font-semibold text-primary-600 hover:bg-primary-50 transition-colors sm:w-auto"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Learn More
          </a>
        </div>

        <p className="mt-8 text-sm font-medium text-neutral-500">
          Powered by AI • Always cites sources
        </p>
      </div>
    </section>
  );
}
