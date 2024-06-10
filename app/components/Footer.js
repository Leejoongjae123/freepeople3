"use client";
import React, { useReducer } from "react";
import LoginBtn from "./LoginBtn";
import Link from "next/link";
import ArticleModal from "./ArticleModal";
import AppModal from "./ReactModal";
import FooterModal from "./FooterModal";
import ServiceModal from "./ServiceModal";
import PrivacyModal from "./PrivacyModal";
import { getServerSession } from "next-auth";
// import { authOptions } from '../../api/auth/[...nextauth]/route''
import { usePathname } from "next/navigation";
import { useState } from "react";
import ServiceModal2 from './ServiceModal2'
import WhatisModal from './WhatIsModal'

export default function Footer() {
  // let session=await getServerSession(authOptions)
  const pathname = usePathname();
  // console.log("usePathname:", pathname);
  let isBase = pathname === "/";
  // console.log("isbase:", isBase);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);


  const closeModal3 = () => {
    setShowModal3(false);
  };

  const toggleModal3 = () => {
    setShowModal3(!showModal3);
  };

  const closeModal2 = () => {
    setShowModal2(false);
  };

  const toggleModal2 = () => {
    setShowModal2(!showModal2);
  };

  const closeModal1 = () => {
    setShowModal1(false);
  };

  const toggleModal1 = () => {
    setShowModal1(!showModal1);
  };

  return (
    <div>
      {isBase && (
        <footer className="bg-white ">
          <div className="mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">
                <a href="https://flowbite.com/" className="flex items-center">
                  <span className="self-center text-2xl font-semibold whitespace-nowrap ">
                    미래민중
                  </span>
                </a>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                    INTRODUCTION
                  </h2>
                  <ul className="text-gray-500  font-medium text-xs">
                    <li className="h-10">
                    <button onClick={toggleModal1}>미래민중은</button>
                      {/* <FooterModal></FooterModal> */}
                    </li>
                    <li className="h-10">
                      <button onClick={toggleModal2}>서비스 범위</button>
                    </li>
                    <li className="h-10">
                      <button onClick={toggleModal3}>개인정보처리방침</button>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                    CONTACT US
                  </h2>
                  <ul className="flex flex-col text-gray-500 font-medium text-xs">
                    <li className="h-10">jeongfran@gmail.com</li>

                    <li className="h-10">wsfran@naver.com</li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                    INFO
                  </h2>
                  <ul className="flex flex-col gap-2 text-gray-500 font-medium text-xs">
                    <li className="h-10">등록번호 : 서울 아55154</li>
                    <li className="h-10">등록일 : 2023년 11월 3일</li>
                    <li className="h-10">발행인 : 정우식</li>
                    <li className="h-10">편집인 : 정우식</li>
                    <li className="h-10">주소 : 서울시 서초구 서초중앙로 24길 43 102동 1804호</li>
                    <li className="h-10">전화 : 02-593-6154</li>
                    <li className="h-10">청소년보호책임자 : 정우식</li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm text-gray-500 sm:text-center">
                © 2023 재인융합경제연구소 All Rights Reserved.
              </span>
              <div>
                <a
                  className="text-xs text-gray-500 underline"
                  href="/admin/list"
                >
                  관리자 사이트로 이동
                </a>
              </div>
            </div>
          </div>
        </footer>
      )}
      {showModal1 && <WhatisModal closeModal={closeModal1}></WhatisModal>}
      {showModal2 && <ServiceModal2 closeModal={closeModal2}></ServiceModal2>}
      {showModal3 && <PrivacyModal closeModal={closeModal3}></PrivacyModal>}
    </div>
  );
}
