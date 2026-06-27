import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'

const steps = [
  {
    step: '01',
    title: 'Create your workspace',
    desc: 'Sign up in seconds and set up your workspace. Invite your team and choose from templates tailored to your workflow.',
    color: 'text-indigo-600 dark:text-indigo-400',
    bg: 'bg-indigo-50 dark:bg-indigo-900/20',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Organize your projects',
    desc: 'Break work into projects, lists, and tasks. Assign owners, set priorities, and attach relevant files and notes.',
    color: 'text-purple-600 dark:text-purple-400',
    bg: 'bg-purple-50 dark:bg-purple-900/20',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Collaborate in real time',
    desc: 'Work alongside your team simultaneously. Comment on tasks, share docs, chat, and see live changes as they happen.',
    color: 'text-cyan-600 dark:text-cyan-400',
    bg: 'bg-cyan-50 dark:bg-cyan-900/20',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Track and improve',
    desc: 'Monitor project health with dashboards, spot bottlenecks early, and continuously refine your team\'s processes.',
    color: 'text-green-600 dark:text-green-400',
    bg: 'bg-green-50 dark:bg-green-900/20',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white dark:bg-slate-900">
      <Container>
        <div className="animate-on-scroll">
          <SectionHeading
            eyebrow="How it works"
            title="Up and running in minutes"
            subtitle="No lengthy onboarding, no IT tickets. Get your team collaborating in four simple steps."
          />
        </div>

        {/* Steps */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop only) */}
          <div className="absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-indigo-200 via-purple-200 to-green-200 dark:from-indigo-800 dark:via-purple-800 dark:to-green-800 hidden lg:block" aria-hidden="true" />

          {steps.map((step, i) => (
            <div
              key={step.step}
              className="relative flex flex-col items-center text-center animate-on-scroll"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Step icon */}
              <div className={`relative z-10 w-20 h-20 rounded-2xl ${step.bg} ${step.color} flex items-center justify-center mb-4 shadow-sm`}>
                {step.icon}
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-2 border-current text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>

              <div className={`text-xs font-bold tracking-widest uppercase mb-2 ${step.color}`}>
                Step {step.step}
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
