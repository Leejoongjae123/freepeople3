
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Head from 'next/head'
import Provider from './components/Provider'

export const metadata={
  title:'미래민중:재인융합경제연구소',
  description:"오직 민중을 위한",
  icons: {
    icon: '',
  },
}
// }
// export const metadata = {
//   title: 'HotForum : 당신의 이야기를 실현시키는 곳',
//   description: '당신의 이야기를 적어주세요',
//   icons: {
//     icon: [],
//   },
// };

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
