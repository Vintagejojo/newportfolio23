import './globals.css'


export default function RootLayout({ children }) {
  return (
    //All content here will show on every page
    <html lang="en">
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}
