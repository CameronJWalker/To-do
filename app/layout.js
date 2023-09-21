import './globals.css'


export const metadata = {
  title: 'To-Do',
  description: 'A list of things to do',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>{children}</body>
    </html>
  )
}
