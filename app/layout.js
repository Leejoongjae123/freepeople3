
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Provider from './components/Provider'

export default function RootLayout({ children}) {

  
  
  return (
    <html lang="kr">
      <Head>
        <title>자유민중</title>
        <meta name="description" content="자유민중" />
      </Head>
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
