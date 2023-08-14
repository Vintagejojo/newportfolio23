import './globals.css'
import Footer from '@/components/Footer'


export default function RootLayout({ children }) {


  return (
    //All content here will show on every page
    //This is gonna take some time
    <html lang="en">
      <head />
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
