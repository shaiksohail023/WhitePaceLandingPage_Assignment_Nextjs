import Container from '@/components/ui/Container'

const stats = [
  { value: '50K+', label: 'Teams worldwide', desc: 'From startups to Fortune 500' },
  { value: '99.9%', label: 'Uptime SLA', desc: 'Reliable when it matters most' },
  { value: '4.8★', label: 'Average rating', desc: 'Across App Store & G2' },
  { value: '2M+', label: 'Tasks completed', desc: 'Every single day' },
]

export default function Statistics() {
  return (
    <section id="statistics" className="py-24 bg-indigo-600 dark:bg-indigo-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-indigo-500/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-600/30 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-14 animate-on-scroll">
          <span className="inline-block text-indigo-200 font-semibold text-sm tracking-wider uppercase mb-3">
            By the numbers
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Trusted at scale
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center animate-on-scroll"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-4xl sm:text-5xl font-extrabold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-indigo-100 font-semibold mb-1">{stat.label}</div>
              <div className="text-indigo-200/70 text-sm">{stat.desc}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
