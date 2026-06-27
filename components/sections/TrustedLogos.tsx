import Container from '@/components/ui/Container'

const logos = [
  { name: 'Airbnb', letter: 'A', color: '#FF5A5F' },
  { name: 'Hubspot', letter: 'H', color: '#FF7A59' },
  { name: 'Google', letter: 'G', color: '#4285F4' },
  { name: 'Microsoft', letter: 'M', color: '#00A4EF' },
  { name: 'Shopify', letter: 'S', color: '#96BF48' },
  { name: 'Stripe', letter: 'St', color: '#635BFF' },
  { name: 'Notion', letter: 'N', color: '#000000' },
]

export default function TrustedLogos() {
  return (
    <section className="py-14 border-y border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
      <Container>
        <p className="text-center text-sm text-slate-500 dark:text-slate-500 font-medium tracking-wider uppercase mb-10 animate-on-scroll">
          Trusted by 5,000+ companies worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 animate-on-scroll delay-100">
          {logos.map((logo, index) => (
            <div
              key={logo.name}
              className="flex items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-all duration-300 grayscale hover:grayscale-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                style={{ backgroundColor: logo.color }}
              >
                {logo.letter}
              </div>
              <span className="text-lg font-semibold">{logo.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
