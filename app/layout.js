
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Head from 'next/head'
import Provider from './components/Provider'


export const metadata = {
  title: "미래민중 | 재인융합경제연구소",
  openGraph: {
    type:'website',
    title: '미래민중 | 재인융합경제연구소',
    description: '정치경제 정보제공 서비스. 정치경제 논평, 지지도 분석, 정치경제 연구, 선거 및 통계, 주요 정당 브리핑, 대통령실 브리핑, 정책 동향',
  },
  description: "정치경제 정보제공 서비스. 정치경제 논평, 지지도 분석, 정치경제 연구, 선거 및 통계, 주요 정당 브리핑, 대통령실 브리핑, 정책 동향",
  keywords:'국민정치경제,대한민국, 국내정치, 경제현안관련논평, 대통령지지도분석, 정치경제, 관련정책연구기사, 선거, 주요정당브리핑, 대통령실브리핑, 정부동향,국회정책동향',
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "ENm8OGAtRozrrLPqjRK3Mp-V7U1lURd63sWwt8oKDCw",
    other:{
      'naver-site-verification':'676920be85c0db8a19670002a658d5a5244dd72b'
    }
  },
  robots: {
    index: true,
    follow: true}
};


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
