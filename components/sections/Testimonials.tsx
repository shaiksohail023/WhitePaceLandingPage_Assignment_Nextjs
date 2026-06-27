'use client'

import { useState } from 'react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'

const testimonials = [
  {
    quote: 'Whitepace completely transformed how our 60-person engineering team operates. We cut our weekly sync meetings by half and ship features 30% faster. It pays for itself every month.',
    name: 'Sarah Chen',
    title: 'VP of Engineering',
    company: 'Stackline',
    initials: 'SC',
    color: '#4F46E5',
    rating: 5,
  },
  {
    quote: 'We tried Asana, Monday, and Notion before landing on Whitepace. Nothing else gave us the combination of clean design and actual power-user features we needed. Our team actually enjoys planning now.',
    name: 'Marcus Williams',
    title: 'Head of Product',
    company: 'Orbit Labs',
    initials: 'MW',
    color: '#7C3AED',
    rating: 5,
  },
  {
    quote: 'The AI automation alone saves our ops team 10+ hours a week. It feels like having an extra project manager on the team. Onboarding new clients used to be painful — now it\'s a one-click workflow.',
    name: 'Priya Mehta',
    title: 'Operations Director',
    company: 'Finflow',
    initials: 'PM',
    color: '#DB2777',
    rating: 5,
  },
  {
    quote: 'Customer support, sales, and dev all in one place — finally. Whitepace broke down the silos that were costing us deals. I recommend it to every founder I meet.',
    name: 'Jake Torres',
    title: 'CEO & Co-founder',
    company: 'Growthly',
    initials: 'JT',
    color: '#DC2626',
    rating: 5,
  },
  {
    quote: "The interface is so intuitive that even our least tech-savvy stakeholders adopted it immediately. That's rare. Our project visibility went from foggy to crystal clear within the first week.",
    name: 'Anna Becker',
    title: 'PMO Lead',
    company: 'Construct Digital',
    initials: 'AB',
    color: '#059669',
    rating: 5,
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section id="testimonials" className="py-24 bg-slate-50 dark:bg-slate-800/30">
      <Container>
        <div className="animate-on-scroll">
          <SectionHeading
            eyebrow="Testimonials"
            title="Teams love working in Whitepace"
            subtitle="Don't just take our word for it. Here's what real customers are saying."
          />
        </div>

        <div className="mt-14 max-w-3xl mx-auto animate-on-scroll delay-100">
          {/* Active testimonial */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-8 md:p-10 text-center">
            {/* Stars */}
            <div className="flex justify-center text-amber-400 text-xl mb-6" aria-label={`${testimonials[active].rating} out of 5 stars`}>
              {'★'.repeat(testimonials[active].rating)}
            </div>

            <blockquote className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed italic mb-8">
              "{testimonials[active].quote}"
            </blockquote>

            <div className="flex items-center justify-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                style={{ backgroundColor: testimonials[active].color }}
              >
                {testimonials[active].initials}
              </div>
              <div className="text-left">
                <div className="font-semibold text-slate-900 dark:text-white">{testimonials[active].name}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  {testimonials[active].title} · {testimonials[active].company}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex items-center justify-center gap-3 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`View testimonial ${i + 1}`}
                className={`rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                  i === active
                    ? 'w-6 h-2.5 bg-indigo-600'
                    : 'w-2.5 h-2.5 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                }`}
              />
            ))}
          </div>

          {/* Thumbnail row */}
          <div className="flex items-center justify-center gap-4 mt-6">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setActive(i)}
                aria-label={`View ${t.name}'s testimonial`}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                  i === active
                    ? 'scale-110 ring-2 ring-offset-2 ring-indigo-500 dark:ring-offset-slate-900'
                    : 'opacity-50 hover:opacity-75'
                }`}
                style={{ backgroundColor: t.color }}
              >
                {t.initials}
              </button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
