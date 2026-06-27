import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Accordion from '@/components/ui/Accordion'

const faqs = [
  {
    question: 'Is Whitepace free to use?',
    answer: 'Yes! Whitepace offers a free plan with unlimited tasks, 3 projects, and up to 5 team members. Our paid plans unlock unlimited projects, advanced integrations, analytics, and priority support.',
  },
  {
    question: 'Can I import data from other tools like Asana or Jira?',
    answer: 'Absolutely. Whitepace supports one-click imports from Asana, Trello, Jira, Monday.com, and Notion. Your tasks, projects, due dates, and attachments migrate cleanly with no data loss.',
  },
  {
    question: 'How does Whitepace handle data security?',
    answer: 'We take security seriously. Whitepace is SOC 2 Type II certified and uses AES-256 encryption at rest and TLS 1.3 in transit. We offer SSO, 2FA, audit logs, and GDPR-compliant data handling.',
  },
  {
    question: 'What integrations are available?',
    answer: 'Whitepace integrates with 100+ tools including Slack, GitHub, Figma, Jira, Zoom, Google Workspace, Microsoft 365, Stripe, HubSpot, and many more. You can also connect via our REST API or Zapier.',
  },
  {
    question: 'Can I use Whitepace on mobile?',
    answer: 'Yes — Whitepace is available as a native app on iOS and Android, with full feature parity to the web app. Offline mode lets you work without internet and syncs automatically when you reconnect.',
  },
]

export default function CTA() {
  return (
    <>
      {/* FAQ Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800/30">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="animate-on-scroll-left">
              <span className="inline-block text-indigo-600 font-semibold text-sm tracking-wider uppercase mb-3">
                FAQ
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Questions we get a lot
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Can't find the answer here? Chat with our team at{' '}
                <a href="mailto:hello@whitepace.io" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                  hello@whitepace.io
                </a>
              </p>
              <div className="hidden lg:block p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl border border-indigo-100 dark:border-indigo-800">
                <div className="text-4xl mb-3">💬</div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Still have questions?</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Our team replies within minutes during business hours.</p>
                <Button variant="primary" size="sm">Start a live chat</Button>
              </div>
            </div>
            <div className="animate-on-scroll-right">
              <Accordion items={faqs} />
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Banner */}
      <section id="cta" className="py-24 bg-white dark:bg-slate-900">
        <Container>
          <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-600 to-purple-700 rounded-3xl px-8 py-16 md:px-16 text-center animate-on-scroll">
            {/* Decorations */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full" />
              <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-purple-500/20 rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/10 rounded-full" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                🚀 No credit card needed
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
                Ready to work smarter?
              </h2>
              <p className="text-indigo-100 text-lg mb-8 leading-relaxed">
                Join 50,000+ teams already using Whitepace to ship faster, communicate better, and stress less. Get started free — set up takes under 2 minutes.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  variant="secondary"
                  size="lg"
                  href="#"
                  className="bg-white text-indigo-600 hover:bg-indigo-50 border-0"
                >
                  Start for free
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href="#"
                  className="border-white/50 text-white hover:bg-white/10 hover:border-white dark:text-white dark:border-white/50"
                >
                  Talk to sales
                </Button>
              </div>

              <p className="mt-6 text-indigo-200 text-sm">
                Free 14-day trial · All features included · No setup fees
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
