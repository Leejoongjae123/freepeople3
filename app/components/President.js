"use client";
import React from "react";
import {
  FcBullish,
  FcVoicePresentation,
  FcCurrencyExchange,
  FcAreaChart,
  FcMoneyTransfer,
  FcUp,
  FcDown,
} from "react-icons/fc";
import { FaArrowUp,FaArrowDown } from "react-icons/fa";
import { GiBarrel } from "react-icons/gi";
import { AiFillGolden } from "react-icons/ai";
import { FaPercent } from "react-icons/fa";
import { mdOilBarrel } from "react-icons/md";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import Link from "next/link";
import PresidentSlider from "./PresidentSlider";
import axios from "axios";
import { BiSolidUpArrow,BiSolidDownArrow } from "react-icons/bi";

export default function President() {
  const [presidentRealmeter, setPresidentRealmeter] = useState([]);
  const [presidentRealmeterLoading, setPresidentRealmeterLoading] =
    useState(true);

  const [presidentNBS, setPresidentNBS] = useState([]);
  const [presidentNBSLoading, setPresidentNBSLoading] = useState(true);

  const [presidentbrief, setPresidentbrief] = useState([]);
  const [presidentbriefLoading, setPresidentbriefLoading] = useState(true);

  const [presidentpress, setPresidentpress] = useState([]);
  const [presidentpressLoading, setPresidentpressLoading] = useState(true);

  const [economyIndicators, setEconomyIndicators] = useState([]);
  const [economyIndicatorsLoading, setEconomyIndicatorsLoading] =
    useState(true);

  const fetchData1 = async () => {
    try {
      const response = await axios.get(
        `https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws/getpresidentbrief?page=1`
      );

      setPresidentbrief(response.data);
      setPresidentbriefLoading(false);
      // console.log("loading완료1")
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchData2 = async () => {
    try {
      const response = await fetch(
        `https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws/getPresidentNBS?page=1`
      );

      const jsonData = await response.json();
      setPresidentNBS(jsonData);
      setPresidentNBSLoading(false);
      // console.log("loading완료2")
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchData5 = async () => {
    try {
      const response = await axios.get(
        `https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws/getEconomyStatus`
      );

      setEconomyIndicators(response.data);
      setEconomyIndicatorsLoading(false);
      // console.log("loading완료5")
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // 데이터를 가져오는 함수를 정의합니다.
    fetchData1(); // 함수를 호출하여 데이터를 가져옵니다.
    fetchData2(); // 함수를 호출하여 데이터를 가져옵니다.
    fetchData5(); // 함수를 호출하여 데이터를 가져옵니다.
  }, []);

  return (
    <>
      <div className="lg:px-20">
        <div className="items-center mx-auto   lg:mx-0">
          <div className="flex items-center">
            <FcVoicePresentation size="40"></FcVoicePresentation>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-4xl">
              국민/대통령
            </h2>
          </div>
          <div>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              여론조사 및 브리핑
            </p>
          </div>
        </div>

        <section className="bg-white">
          <div className="mx-auto ">
            <div className="border-t mt-6 pt-8">
              <div>
                <h1 className=" text-2xl my-5 font-bold text-center">
                  리얼미터
                </h1>
                <PresidentSlider></PresidentSlider>
              </div>
            </div>
          </div>

          <div className="grid gap-8 grid-cols-1 lg:grid-cols-1">
            <div className="truncate">
              <h1 className="text-2xl font-bold text-center my-5">
                대통령 브리핑
              </h1>
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg"></div>

              <div>
                <table className="table-fixed w-full text-xs lg:text-lg text-left text-gray-500 ">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                      <th scope="col" className="w-3/4  px-6 py-3 text-center">
                        제목
                      </th>
                      <th scope="col" className="w-1/4 py-3 text-center">
                        게시일
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {presidentbrief.map((elem, index) => {
                      return (
                        <tr key={index} className=" bg-white border-b ">
                          <th
                            scope="row"
                            className="grid-cols-2 px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                          >
                            <a target="_blank" href={elem.url}>
                              <p className="whitespace-normal font-bold line-clamp-2">
                                {elem.title}
                              </p>
                            </a>
                            <p className="font-bold whitespace-normal line-clamp-2 text-left text-gray-700">
                              {elem.subtitle}
                            </p>
                            <p className="whitespace-normal line-clamp-2 text-left text-gray-500">
                              {elem.contents}
                            </p>
                          </th>
                          <td className="grid-col py-4 text-center">
                            {elem.regiDate}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="text-right pr-5">
                <p className="text-base font-semibold text-blue-500 text-right">
                  <Link
                    target="_blank"
                    className="z-50"
                    href="https://www.president.go.kr/newsroom/briefing"
                  >
                    Read more
                  </Link>
                </p>
              </div>
            </div>

            <div className="truncate">
              <h1 className="text-2xl font-bold text-center my-5">NBS</h1>
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg"></div>

              <div className="rounded-lg">
                <table className="table-fixed w-full text-xs lg:text-lg text-left text-gray-500 ">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                      <th scope="col" className="w-3/4 px-6 py-3 text-center">
                        제목
                      </th>
                      <th scope="col" className="w-1/4 py-3 text-center">
                        게시일
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {presidentNBS.map((elem, index) => {
                      return (
                        <tr key={index} className=" bg-white border-b ">
                          <th
                            scope="row"
                            className="grid-cols-2 px-6 py-4 text-gray-900 whitespace-nowrap "
                          >
                            <p className="font-bold whitespace-normal line-clamp-2">
                              <a target="_blank" href={elem.url}>
                                {elem.title}
                              </a>
                            </p>
                            <p className="whitespace-normal text-gray-500 ">
                              {elem.contents}
                            </p>
                          </th>
                          <td className="grid-col truncate py-4 text-center">
                            {elem.regiDate}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="text-right pr-5">
                <p className="text-base font-semibold text-blue-500 text-right">
                  <Link
                    target="_blank"
                    className="z-50"
                    href="http://nbsurvey.kr"
                  >
                    Read more
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="text-xs lg:text-lg flex flex-col my-10 lg:px-0">
            <div className="mt-4 grid gap-4 grid-cols-2 lg:grid-cols-6 px-18">
              <div className="flex justify-center items-center rounded-xl bg-white p-4 shadow-lg">
                {/* <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                <FcCurrencyExchange size='40'></FcCurrencyExchange>
              </div> */}

                <div className="ml-4">
                  <h2 className="text-center font-semibold">환율(USD)</h2>
                  <div className={economyIndicators.exchangeupdown==="상승"?('text-center text-lg font-bold text-red-600'):('text-center text-lg font-bold text-blue-700')}>
                    <p>{economyIndicators.exchange}</p>
                    <p className="text-xs text-gray-500 font-normal">
                      (원/달러)
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    {/* <p className="text-center text-lg font-bold"> */}
                    <p className={economyIndicators.exchangeupdown==="상승"?('text-center text-lg font-bold text-red-600'):('text-center text-lg font-bold text-blue-700')}>
                      {economyIndicators.exchangedev}
                    </p>
                    {economyIndicators.exchangeupdown === "상승" ? (
                      <BiSolidUpArrow className="text-red-600"></BiSolidUpArrow>
                    ) : (
                      <BiSolidDownArrow className="text-blue-600"></BiSolidDownArrow>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center rounded-xl bg-white p-4 shadow-lg">
                {/* <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">

                <FcBullish size='40'></FcBullish>
              </div> */}

                <div className="ml-4">
                  <h2 className="font-semibold">코스피</h2>
                  <p className={economyIndicators.kospiupdown==="상승"?('text-center text-lg font-bold text-red-600'):('text-center text-lg font-bold text-blue-700')}>
                    {economyIndicators.kospi}
                  </p>
                  <div className="flex items-center justify-center">
                    <p className={economyIndicators.kospiupdown==="상승"?('text-center text-lg font-bold text-red-600'):('text-center text-lg font-bold text-blue-700')}>
                      {economyIndicators.kospidev}
                    </p>
                    {economyIndicators.kospiupdown === "상승" ? (
                      <BiSolidUpArrow className="text-red-600"></BiSolidUpArrow>
                    ) : (
                      <BiSolidDownArrow className="text-blue-600"></BiSolidDownArrow>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center rounded-xl bg-white p-4 shadow-lg">
                {/* <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                <FcAreaChart size='40'></FcAreaChart>
              </div> */}
                <div className="ml-4">
                  <h2 className="font-semibold">코스닥</h2>
                  <p className={economyIndicators.kosdaqupdown==="상승"?('text-center text-lg font-bold text-red-600'):('text-center text-lg font-bold text-blue-700')}>
                    {economyIndicators.kosdaq}
                  </p>
                  <div className="flex items-center justify-center">
                    <p className={economyIndicators.kosdaqupdown==="상승"?('text-center text-lg font-bold text-red-600'):('text-center text-lg font-bold text-blue-700')}>
                      {economyIndicators.kosdaqdev}
                    </p>
                    {economyIndicators.kosdaqupdown === "상승" ? (
                      <BiSolidUpArrow className="text-red-600"></BiSolidUpArrow>
                    ) : (
                      <BiSolidDownArrow className="text-blue-600"></BiSolidDownArrow>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center rounded-xl bg-white p-4 shadow-lg">
                {/* <div className="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-100 bg-indigo-50">
                <FcMoneyTransfer  size='40'></FcMoneyTransfer>
              </div> */}
                <div className="ml-4">
                  <h2 className="font-semibold">CD금리(91일)</h2>
                  <div className={economyIndicators.cdinterestupdown==="상승"?('text-center text-lg font-bold text-red-600'):('text-center text-lg font-bold text-blue-700')}>
                    <p>{economyIndicators.cdinterest}{" "}</p>
                    
                    <p className="text-xs text-gray-500 font-normal">
                      (%/년)
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <p className={economyIndicators.cdinterestupdown==="상승"?('text-center text-lg font-bold text-red-600'):('text-center text-lg font-bold text-blue-700')}>
                      {economyIndicators.cdinterestdev}
                    </p>
                    {economyIndicators.cdinterestupdown === "상승" ? (
                      <BiSolidUpArrow className="text-red-600"></BiSolidUpArrow>
                    ) : (
                      <></>
                    )}
                    {
                      economyIndicators.cdinterestupdown==="하락"?(
                        <BiSolidDownArrow className="text-blue-700"></BiSolidDownArrow>
                      ):(
                        <></>
                      )
                    }
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center rounded-xl bg-white p-4 shadow-lg">
                {/* <div className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-100 bg-orange-50">
                <GiBarrel size='40'></GiBarrel>
              </div> */}
                <div className="ml-4">
                  <h2 className="font-semibold">유가(두바이)</h2>
                  <p className={economyIndicators.oilupdown==="상승"?('text-center text-lg font-bold text-red-600'):('text-center text-lg font-bold text-blue-700')}>
                    {economyIndicators.oil}{" "}
                    <span className="text-xs line-clamp-1 text-gray-500 font-normal">
                      (달러/배럴)
                    </span>
                  </p>
                  <div className="flex items-center justify-center">
                    <p className={economyIndicators.oilupdown==="상승"?('text-center text-lg font-bold text-red-600'):('text-center text-lg font-bold text-blue-700')}>
                      {economyIndicators.oildev}
                    </p>
                    {economyIndicators.oilupdown === "상승" ? (
                      <BiSolidUpArrow className="text-red-600"></BiSolidUpArrow>
                    ) : (
                      <BiSolidDownArrow className="text-blue-600"></BiSolidDownArrow>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center rounded-xl bg-white p-4 shadow-lg">
                {/* <div className="flex h-12 w-12 items-center justify-center rounded-full border border-red-100 bg-red-50">
                <AiFillGolden color='#FFd700' size='40'></AiFillGolden>
              </div> */}
                <div className="ml-4">
                  <h2 className="font-semibold">금 시세</h2>
                  <p className={economyIndicators.goldupdown==="상승"?('text-center text-lg font-bold text-red-600'):('text-center text-lg font-bold text-blue-700')}>
                    {economyIndicators.gold}{" "}
                    <span className="text-xs line-clamp-1 text-gray-500 font-normal">
                      (달러/toz)
                    </span>
                  </p>
                  <div className="flex items-center justify-center">
                    <p className={economyIndicators.goldupdown==="상승"?('text-center text-lg font-bold text-red-600'):('text-center text-lg font-bold text-blue-700')}>
                      {economyIndicators.golddev}
                    </p>
                    {economyIndicators.goldupdown === "상승" ? (
                      <BiSolidUpArrow className="text-red-600"></BiSolidUpArrow>
                    ) : (
                      <BiSolidDownArrow className="text-blue-600"></BiSolidDownArrow>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-right pr-5">
            <p className="text-base font-semibold text-blue-500 text-right">
              <Link
                target="_blank"
                className="z-50"
                href="https://finance.naver.com/"
              >
                Read more
              </Link>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
