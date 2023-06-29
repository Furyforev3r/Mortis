import './globals.css'

export const metadata = {
  title: 'Mortis.',
  description: 'The truth.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
