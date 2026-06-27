import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const articles = [
  {
    tag: 'Productivity',
    tagColor: 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400',
    title: 'How async-first teams ship 2x faster without daily standups',
    excerpt: 'Discover why leading remote teams are ditching daily meetings and using structured async updates to move faster and with more focus.',
    date: 'Jun 12, 2025',
    readTime: '6 min read',
    authorInitials: 'EK',
    authorColor: '#4F46E5',
    author: 'Elena Kim',
  },
  {
    tag: 'AI & Automation',
    tagColor: 'bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400',
    title: 'The complete guide to automating your project management with AI',
    excerpt: 'A practical walkthrough of setting up AI automations that actually save time — from smart task routing to auto-generated status reports.',
    date: 'May 28, 2025',
    readTime: '9 min read',
    authorInitials: 'JL',
    authorColor: '#7C3AED',
    author: 'James Liu',
  },
  {
    tag: 'Team Building',
    tagColor: 'bg-cyan-100 dark:bg-cyan-900/40 text-cyan-600 dark:text-cyan-400',
    title: 'Building a culture of transparency: lessons from scaling to 200 people',
    excerpt: 'How Orbit Labs used visibility tools and open documentation to maintain their startup culture while tripling their headcount in 18 months.',
    date: 'May 14, 2025',
    readTime: '7 min read',
    authorInitials: 'RN',
    authorColor: '#DB2777',
    author: 'Rachel Ngo',
  },
]

export default function Resources() {
  return (
    <section id="resources" className="py-24 bg-white dark:bg-slate-900">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14 animate-on-scroll">
          <SectionHeading
            eyebrow="Resources"
            title="Learn from the best teams"
            subtitle="Guides, case studies, and stories from teams doing great work."
            align="left"
          />
          <Button variant="outline" href="#" className="flex-shrink-0">
            View all articles
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <div
              key={article.title}
              className="animate-on-scroll"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Card className="h-full flex flex-col">
                {/* Placeholder image */}
                <div className="h-44 -mx-6 -mt-6 mb-5 rounded-t-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center overflow-hidden">
                  <div className="text-slate-300 dark:text-slate-500">
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>

                <div className="flex-1 flex flex-col">
                  <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 self-start ${article.tagColor}`}>
                    {article.tag}
                  </span>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-3 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1 mb-4">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
                        style={{ backgroundColor: article.authorColor }}
                      >
                        {article.authorInitials}
                      </div>
                      <span className="text-xs font-medium text-slate-700 dark:text-slate-300">{article.author}</span>
                    </div>
                    <div className="text-xs text-slate-400">
                      {article.date} · {article.readTime}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
