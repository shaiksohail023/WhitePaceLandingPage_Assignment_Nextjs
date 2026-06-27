import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`
        bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700
        ${hover ? 'hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-default' : ''}
        shadow-sm p-6
        ${className}
      `}
    >
      {children}
    </div>
  )
}
