import './globals.css'


export default function RootLayout({ children }) {

  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-12 py-12 text-center text-slate-400">
        <h3>I made this</h3>
      </div>
    </footer>
  );

  return (
    //All content here will show on every page
    //This is gonna take some time
    <html lang="en">
      <head />
      <body>
        {children}
      </body>
      {footer}
    </html>
  )
}
