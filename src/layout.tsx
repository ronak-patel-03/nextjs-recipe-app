//layout.tsx

export const metadata = {
  title: 'WebFramework2- Next.JS',
  description: 'Develped by TeamX',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <body>
     {children}
     </body>
    </html>
  )
}
