"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ArticleModal from "./ArticleModal";
import SearchModal from "./SearchModal";

export default function SearchCard1() {
  const [select1Value, setSelect1Value] = useState("제20대 대통령선거");
  const [select2Value, setSelect2Value] = useState("국민의힘");
  const [isSelect, setIsSelect] = useState(false);
  const [count, setCount] = useState(1);

  const [partyData, setPartyData] = useState([]);
  const [partyDataLoading, setPartyDataLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);

  const [modalTitle, setModalTitle] = useState("");

  const [modalText, setModalText] = useState(["", "", ""]);

  const handleSelect1Change = (e) => {
    const selectedValue = e.target.value;
    setSelect1Value(selectedValue);
    setSelect2Value("");

    // select1에서 A를 선택하면 select2를 초기화
    if (selectedValue === "A") {
      setSelect2Value("");
    }
    if (selectedValue === "B") {
      setSelect2Value("");
    }
    if (selectedValue === "C") {
      setSelect2Value("");
    }
    if (selectedValue === "D") {
      setSelect2Value("");
    }
  };

  const handleSelect2Change = (e) => {
    const selectedValue = e.target.value;
    setSelect2Value(selectedValue);
    setIsSelect(true);
    setCount(count + 1);
  };

  if (select1Value.length >= 1 && select2Value.length >= 1) {
    // console.log(select1Value, select2Value);
  }

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws/PartyInfo?sgId=${select1Value}&partyName=${select2Value}`
      );
      setPartyData(response.data);
      setPartyDataLoading(false);
      // console.log("loading완료정당");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // 데이터를 가져오는 함수를 정의합니다.
    fetchData(); // 함수를 호출하여 데이터를 가져옵니다.
  }, []);

  useEffect(() => {
    // 데이터를 가져오는 함수를 정의합니다.
    fetchData(); // 함수를 호출하여 데이터를 가져옵니다.
  }, [count]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleButtonClick = (title, contents, imageUrl) => {
    // console.log(title);
    // console.log(contents);
    // console.log(imageUrl);
    setModalText([title, contents, imageUrl]);
    toggleModal();
  };

  return (
    <div className="h-full">
      <div className="w-full mx-auto">
        <div className="py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full mb-1 sm:mb-0">
            <h2 className="text-center md:text-left flex-1 text-base lg:text-lg leading-tight font-bold">정당정책</h2>
            <div className="flex flex-col md:flex-row gap-x-2 text-end my-3 ">
              <select
                value={select1Value}
                onChange={handleSelect1Change}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-3 md:my-0"
              >
                <option value="">-- 선택 --</option>
                <option value="제8회 전국동시지방선거">
                  제8회 전국동시지방선거
                </option>
                <option value="제20대 대통령선거">제20대 대통령선거</option>
                <option value="제21대 국회의원선거">제21대 국회의원선거</option>
                <option value="제7회 전국동시지방선거">
                  제7회 전국동시지방선거
                </option>
                <option value="제19대 대통령선거">제19대 대통령선거</option>
                <option value="제20대 국회의원선거">제20대 국회의원선거</option>
              </select>
              {select1Value && (
                <>
                  {select1Value === "제8회 전국동시지방선거" && (
                    <select
                      value={select2Value}
                      onChange={handleSelect2Change}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    >
                      <option value="">-- 선택 --</option>
                      <option value="국민의힘">국민의힘</option>
                      <option value="더불어민주당">더불어민주당</option>
                      <option value="진보당">진보당</option>
                      <option value="정의당">정의당</option>
                    </select>
                  )}
                  {select1Value === "제20대 대통령선거" && (
                    <select
                      value={select2Value}
                      onChange={handleSelect2Change}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                      <option value="">-- 선택 --</option>
                      <option value="더불어민주당">더불어민주당</option>
                      <option value="국민의힘">국민의힘</option>
                      <option value="정의당">정의당</option>
                      <option value="국민의당">국민의당</option>
                      <option value="기본소득당">기본소득당</option>
                    </select>
                  )}
                  {select1Value === "제21대 국회의원선거" && (
                    <select
                      value={select2Value}
                      onChange={handleSelect2Change}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    >
                      <option value="">-- 선택 --</option>
                      <option value="더불어민주당">더불어민주당</option>
                      <option value="미래통합당">미래통합당</option>
                      <option value="정의당">정의당</option>
                      <option value="국민의당">국민의당</option>
                      <option value="열린민주당">열린민주당</option>
                    </select>
                  )}
                  {select1Value === "제7회 전국동시지방선거" && (
                    <select
                      value={select2Value}
                      onChange={handleSelect2Change}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                      <option value="">-- 선택 --</option>
                      <option value="더불어민주당">더불어민주당</option>
                      <option value="자유한국당">자유한국당</option>
                      <option value="민주평화당">민주평화당</option>
                      <option value="정의당">정의당</option>
                      <option value="바른미래당">바른미래당</option>
                    </select>
                  )}
                  {select1Value === "제19대 대통령선거" && (
                    <select
                      value={select2Value}
                      onChange={handleSelect2Change}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    >
                      <option value="">-- 선택 --</option>
                      <option value="더불어민주당">더불어민주당</option>
                      <option value="자유한국당">자유한국당</option>
                      <option value="국민의당">국민의당</option>
                      <option value="바른정당">바른정당</option>
                      <option value="정의당">정의당</option>
                    </select>
                  )}
                  {select1Value === "제20대 국회의원선거" && (
                    <select
                      value={select2Value}
                      onChange={handleSelect2Change}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    >
                      <option value="">-- 선택 --</option>
                      <option value="더불어민주당">더불어민주당</option>
                      <option value="새누리당">새누리당</option>
                      <option value="국민의당">국민의당</option>
                      <option value="정의당">정의당</option>
                    </select>
                  )}
                </>
              )}
            </div>
          </div>
          <div className="py-4 text-xs lg:text-lg">
            <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
              <table className="min-w-full leading-normal">
                <thead className=" text-gray-700 uppercase bg-gray-50 ">
                  <tr>
                    <th
                      scope="col"
                      className="font-bold text-center py-3 w-1/2"
                    >
                      정책명
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {partyData.map((elem, index) => {
                    return (
                      <tr key={index} className="">
                        <td className="px-5 py-5 bg-white border-b border-gray-200">
                          <div className="flex items-center">
                            <div className="flex-shrink-0"></div>
                            <div className="ml-3">
                              <button
                                onClick={() => {
                                  handleButtonClick(
                                    elem.title,
                                    elem.contents,
                                    ""
                                  );
                                }}
                              >
                                <p className="font-bold text-left whitespace-pre-wrap text-gray-900 whitespace-no-wrap">
                                  {elem.title}
                                </p>
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {showModal && (
          <SearchModal
            modalText={modalText}
            closeModal={closeModal}
          ></SearchModal>
        )}
      </div>
    </div>
  );
}
