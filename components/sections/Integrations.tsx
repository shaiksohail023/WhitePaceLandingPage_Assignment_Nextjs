import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

const integrations = [
  { name: 'Slack', color: '#4A154B', bg: '#F5E6FF', letter: 'S' },
  { name: 'GitHub', color: '#24292F', bg: '#F0F0F0', letter: 'GH' },
  { name: 'Figma', color: '#F24E1E', bg: '#FFF0ED', letter: 'F' },
  { name: 'Jira', color: '#0052CC', bg: '#E6EEFF', letter: 'J' },
  { name: 'Zoom', color: '#2D8CFF', bg: '#E8F2FF', letter: 'Z' },
  { name: 'Notion', color: '#000000', bg: '#F5F5F5', letter: 'N' },
  { name: 'Gmail', color: '#EA4335', bg: '#FEECEC', letter: 'G' },
  { name: 'Drive', color: '#0F9D58', bg: '#E8F8EF', letter: 'D' },
  { name: 'Stripe', color: '#635BFF', bg: '#F0EEFF', letter: 'St' },
  { name: 'Zapier', color: '#FF4A00', bg: '#FFF0EA', letter: 'Z' },
  { name: 'HubSpot', color: '#FF7A59', bg: '#FFF2EE', letter: 'H' },
  { name: 'Intercom', color: '#1F8DED', bg: '#E6F3FD', letter: 'I' },
]

export default function Integrations() {
  return (
    <section id="integrations" className="py-24 bg-white dark:bg-slate-900">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="animate-on-scroll-left">
            <SectionHeading
              eyebrow="Integrations"
              title="Works with the tools you already love"
              subtitle="Connect Whitepace with 100+ apps you use daily. No switching, no friction — just seamless flow between your favorite tools."
              align="left"
            />
            <div className="mt-8 space-y-4">
              {[
                'One-click setup, no coding required',
                'Real-time sync across all connected apps',
                'Smart automations that trigger across tools',
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">{point}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button variant="primary" href="#">Browse integrations</Button>
            </div>
          </div>

          {/* Right – Integration grid */}
          <div className="animate-on-scroll-right">
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {integrations.map((app, i) => (
                <div
                  key={app.name}
                  className="group flex flex-col items-center gap-2 p-4 rounded-2xl border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: app.bg, color: app.color }}
                  >
                    {app.letter}
                  </div>
                  <span className="text-xs text-slate-600 dark:text-slate-400 font-medium text-center">
                    {app.name}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-sm text-slate-500 dark:text-slate-500">
              + 90 more integrations available
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
