import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Whitepace – Smart Workspace for Teams',
  description: 'Whitepace brings all your tasks, projects, and team communication into one place. Streamline your workflow and boost productivity with our all-in-one SaaS platform.',
  keywords: 'workspace, productivity, team collaboration, project management, SaaS',
  openGraph: {
    title: 'Whitepace – Smart Workspace for Teams',
    description: 'Streamline your workflow and boost productivity with our all-in-one SaaS platform.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
