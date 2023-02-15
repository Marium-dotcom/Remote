import Footer from './Footer'
import './globals.css'
import Navbar from './navbar'



export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head  />
   
 <body className='bg-orange-100'>
  <Navbar/>
 {children}
 <Footer/>
 
     </body>

    </html>
  )
}
