
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Head from 'next/head'
import Provider from './components/Provider'

export const metadata={
  title:'미래민중:재인융합경제연구소',
  description:"오직 민중을 위한",
  verification: {
    naver: "a2f5d1eae14ceaedf66e33f9430d3de06f4cb1e8",
  },

}

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
