import { Check, Zap } from 'lucide-react';

const LOGIN_URL = 'https://beta.lawbey.com';

const proFeatures = [
  'Unlimited document uploads',
  'Advanced research tools',
  'Team workspaces and collaboration',
  'Priority support',
];

export default function ForProfessionals() {
  return (
    <section id="pricing" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-12 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <h2 className="text-base font-semibold leading-7 text-primary-600">
              For Legal Professionals
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Built for Legal Professionals
            </p>
            <p className="mt-6 text-lg text-neutral-600">
              LawBey Pro gives your firm the tools to work faster and smarter. Collaborate on
              research, upload unlimited documents, and get priority support.
            </p>
            <ul className="mt-8 space-y-4">
              {proFeatures.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <Check className="h-6 w-6 flex-shrink-0 text-primary-600" aria-hidden="true" />
                  <span className="text-neutral-600">{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href={LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-700 transition-colors"
            >
              Explore Pro Plan
              <Zap className="h-5 w-5" />
            </a>
          </div>
          <div className="order-1 flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100/50 p-8 lg:order-2 lg:p-12">
            <div className="text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary-200/50">
                <Zap className="h-12 w-12 text-primary-700" />
              </div>
              <p className="mt-4 text-sm font-medium text-neutral-600">
                Chat interface and document workspace
              </p>
              <p className="mt-1 text-xs text-neutral-500">
                Get started at beta.lawbey.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
