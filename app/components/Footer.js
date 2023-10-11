'use client'
import React, { useReducer } from 'react'
import LoginBtn from './LoginBtn';
import Link from 'next/link';
import ArticleModal from './ArticleModal';
import AppModal from './ReactModal';
import FooterModal from './FooterModal';
import ServiceModal from './ServiceModal';
import { getServerSession } from 'next-auth'
// import { authOptions } from '../../api/auth/[...nextauth]/route''
import { usePathname } from 'next/navigation';



export default function Footer() {

  // let session=await getServerSession(authOptions)
  const pathname = usePathname()
  console.log('usePathname:',pathname)
  let isBase=pathname==="/"
  console.log('isbase:',isBase)

    return (
    <div>
      {isBase&&(
      
<footer className="bg-white dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">미래민중</span>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">INTRODUCTION</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="h-10">
                          <FooterModal></FooterModal>
                      </li>
                      <li className="h-10">
                      <ServiceModal></ServiceModal>
                      </li>
                      <li className="h-10">
                        개인정보처리 방침
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">CONTACT US</h2>
                  <ul className="flex flex-col text-gray-500 dark:text-gray-400 font-medium">
                      <li className="h-10">
                          제휴협력 및 연구용역의뢰
                      </li>

                      <li className="h-10">
                        wsfran@naver.com
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">INFORMATION</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="h-10">
                      등록번호 : XXX-XXX-XXXX
                    </li>
                    <li className="h-10">
                      등록일자 : 2023-10-11
                    </li>
                    <li className="h-10">
                      발행일 : 2023-10-11
                    </li>
                    <li className="h-10">
                      발행인 : 정우식
                    </li>
                    <li className="h-10">
                      편집인 : 정우식
                    </li>
                      
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 재인융합경제연구소 All Rights Reserved.
          </span>
          
      </div>
    </div>
</footer>

    //     <div>
      
    
      
    //     <footer className="bg-gray-500 dark:bg-gray-900">
    //       <div className="px-20">
    //         <div className="gap-8 px-4 py-6">
    //               <div className="flex-1 w-full flex ">
    //                   <div><FooterModal></FooterModal></div>
    //                   <div><ServiceModal></ServiceModal></div>
    //           </div>
              
            
    //       </div>


    //       </div>
    //       <button
    //                       type="submit"
    //                       className="flex justify-center rounded-md bg-gray-200 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    //                       >
    //                     <a href='/admin/list'>
    //                     관리자 사이트로 이동
    //                     </a>
    //                     </button>
    //   </footer>
    // </div>
      )}
    </div> 
    
    )
}
