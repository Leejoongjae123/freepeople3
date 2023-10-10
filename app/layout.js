
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Head from 'next/head'
import Provider from './components/Provider'

export default function RootLayout({ children}) {

  
  
  return (
    <html lang="kr">

      <body className="">
        <Provider>
        <Navbar></Navbar>
        <main className='grow'>
        {children}
        </main>
        {/* <Provider> */}
          <Footer></Footer>
        {/* </Provider> */}
        </Provider>
      </body>
    </html>
  )
}
