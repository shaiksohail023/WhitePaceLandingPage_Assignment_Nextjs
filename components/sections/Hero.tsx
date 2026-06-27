import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50/30 to-white dark:from-slate-900 dark:via-indigo-950/20 dark:to-slate-900"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-indigo-200/40 dark:bg-indigo-900/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-purple-200/40 dark:bg-purple-900/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-100/20 dark:bg-indigo-900/10 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left – Text content */}
          <div className="text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/40 border border-indigo-100 dark:border-indigo-800 rounded-full px-4 py-1.5 text-sm text-indigo-700 dark:text-indigo-300 font-medium mb-6 animate-on-scroll"
            >
              <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
              New: AI-powered task automation →
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-6 animate-on-scroll delay-100"
            >
              Your workspace,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                reimagined
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 animate-on-scroll delay-200"
            >
              Whitepace unifies your tasks, docs, and team chat in one beautiful space. Stop switching apps — start doing your best work.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start animate-on-scroll delay-300">
              <Button variant="primary" size="lg" href="#">
                Get started free
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button variant="outline" size="lg" href="#">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch demo
              </Button>
            </div>

            <p className="mt-5 text-sm text-slate-500 dark:text-slate-500 animate-on-scroll delay-400">
              Free 14-day trial · No credit card required · Cancel anytime
            </p>
          </div>

          {/* Right – App mockup */}
          <div className="relative animate-on-scroll-right">
            <div className="relative">
              {/* Main card */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700 p-6 relative z-10">
                {/* App header bar */}
                <div className="flex items-center gap-2 mb-5 pb-4 border-b border-slate-100 dark:border-slate-700">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 bg-slate-100 dark:bg-slate-700 rounded-md px-3 py-1 text-xs text-slate-400 text-center">
                    app.whitepace.io/dashboard
                  </div>
                </div>

                {/* Sidebar + content layout */}
                <div className="flex gap-4">
                  {/* Mini sidebar */}
                  <div className="w-10 flex flex-col gap-3 items-center">
                    {['#4F46E5', '#64748B', '#64748B', '#64748B', '#64748B'].map((color, i) => (
                      <div key={i} className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: i === 0 ? '#EEF2FF' : 'transparent' }}>
                        <div className="w-4 h-4 rounded bg-current opacity-40" style={{ color }} />
                      </div>
                    ))}
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-sm text-slate-900 dark:text-white">My Workspace</span>
                      <span className="text-xs text-indigo-600 bg-indigo-50 dark:bg-indigo-900/40 px-2 py-0.5 rounded-full">3 Active</span>
                    </div>

                    {[
                      { title: 'Product Roadmap Q3', tag: 'Design', progress: 72, color: '#4F46E5' },
                      { title: 'Marketing Campaign', tag: 'Marketing', progress: 45, color: '#7C3AED' },
                      { title: 'API Integration Docs', tag: 'Dev', progress: 90, color: '#059669' },
                    ].map((item) => (
                      <div key={item.title} className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium text-slate-800 dark:text-slate-200">{item.title}</span>
                          <span className="text-xs px-1.5 py-0.5 rounded" style={{ backgroundColor: `${item.color}20`, color: item.color }}>
                            {item.tag}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-slate-200 dark:bg-slate-600 rounded-full h-1.5">
                            <div
                              className="h-full rounded-full"
                              style={{ width: `${item.progress}%`, backgroundColor: item.color }}
                            />
                          </div>
                          <span className="text-xs text-slate-500">{item.progress}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating notification card */}
              <div className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 p-3 flex items-center gap-3 z-20 animate-float">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white">Task completed!</div>
                  <div className="text-xs text-slate-500">Design review ✓</div>
                </div>
              </div>

              {/* Floating team card */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 p-3 z-20" style={{ animationDelay: '1s' }}>
                <div className="text-xs font-semibold text-slate-900 dark:text-white mb-1.5">Team online</div>
                <div className="flex -space-x-1.5">
                  {['#4F46E5', '#7C3AED', '#DB2777'].map((color, i) => (
                    <div key={i} className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-800" style={{ backgroundColor: color }} />
                  ))}
                  <div className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-600 flex items-center justify-center text-xs text-slate-500">+4</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
