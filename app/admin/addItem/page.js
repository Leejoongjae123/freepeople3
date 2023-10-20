"use client";
import React, { useEffect } from "react";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { useState } from "react";
import axios from "axios";
import { useRouter, usePathname } from "next/navigation";
import TextEditor from "@/app/components/TextEditor";

export default function AddTopic() {
  const [selectedInputs, setSelectedInputs] = useState();
  const [inputTitle, setInputTitle] = useState("");
  const [inputContents, setInputContents] = useState("");
  const [src, setSrc] = useState("")

  const router = useRouter();

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    if (e.target.checked) {
      // 선택된 input을 추가
      setSelectedInputs(inputValue);
    } else {
      // 선택이 해제된 input을 제거
      setSelectedInputs(selectedInputs.filter((item) => item !== inputValue));
    }
  };

  // input 요소의 값이 변경될 때 호출되는 함수
  const handleTitleChange = (e) => {
    // 입력된 텍스트를 상태 변수에 저장
    setInputTitle(e.target.value);
  };

  const handleContentsChange = (e) => {
    setInputContents(e.target.value);
  };

  

  const fetchData = async () => {
    let url = "";
    if (selectedInputs === "option1") {
      url =
        "https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws//addBigKinds";
    } else if (selectedInputs === "option2") {
      url =
        "https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws//addFuturePosting";
    } else if (selectedInputs === "option3") {
      url =
        "https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws//addColumnPosting";
    }
  

    let postInfo = {};

    if (selectedInputs === "option1") {
      postInfo = {
        id: 0,
        title: inputTitle,
        contents: inputContents,
        imageUrl: src,
        regiDate: getFormattedDate(),
        urlDetail: "",
        category: "jgissue",
      };
    } else if (selectedInputs === "option2") {
      postInfo = {
        id: 0,
        title: inputTitle,
        contents: inputContents,
        regiDate: getFormattedDate(),
        category: "future",
      };
    } else {
      postInfo = {
        id: 0,
        title: inputTitle,
        contents: inputContents,
        regiDate: getFormattedDate(),
        category: "column",
      };
    }

    let changedContents=postInfo.contents.replaceAll('td style="',`td style="border:1px solid gray;`).replaceAll("<td>",'<td style="border:1px solid gray;>')
    postInfo.contents=changedContents
    

    try {
      const response = await axios.post(url, [postInfo], {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleButtonClick = async () => {
    const updatedContents = inputContents.replaceAll('1', '2');
    setInputContents(updatedContents)
    await fetchData();
    router.push("/admin/list");
  };



  return (
    <>
      <div className="flex">
        <div className="w-64"></div>
        <div className="flex-1 bg-white">
          <div className="h-24"></div>
          <div className="h-full space-y-12 mx-10">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-4xl font-semibold leading-7 text-gray-900">
                게시글 작성
              </h2>
              <p className="py-5 text-3xl mt-1 leading-6 text-gray-600">
                포스팅하실 글의 내용을 작성해주세요
              </p>

              <div className="flex flex-col mt-10 gap-x-6 gap-y-8">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    제목
                  </label>
                  <div className="">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={inputTitle}
                      onChange={handleTitleChange}
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      이미지 파일
                    </label>
                    <div className="flex gap-x-3">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={async (e) => {
                          let file = e.target.files[0];
                          let filename = encodeURIComponent(file.name);
                          let res = await fetch(
                            "/api/post/image?file=" + filename
                          );
                          res = await res.json();

                          //S3 업로드
                          const formData = new FormData();
                          Object.entries({ ...res.fields, file }).forEach(
                            ([key, value]) => {
                              formData.append(key, value);
                            }
                          );
                          let 업로드결과 = await fetch(res.url, {
                            method: "POST",
                            body: formData,
                          });
                          // console.log(업로드결과);

                          if (업로드결과.ok) {
                            setSrc(업로드결과.url + "/" + filename);
                          } else {
                            // console.log("실패");
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    내용
                  </label>
                  <div className="">
                    <TextEditor
                      inputContents={inputContents}
                      setInputContents={setInputContents}
                    ></TextEditor>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 space-y-10">
                <fieldset>
                  <legend className="text-sm font-semibold leading-6 text-gray-900">
                    글 종류
                  </legend>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    게시할 글의 종류를 선택하세요
                  </p>
                  <div className="mt-6 space-y-6">
                    <div className="flex items-center gap-x-3">
                      <input
                        id="push-everything"
                        name="push-notifications"
                        type="radio"
                        value="option1"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        onChange={handleInputChange}
                      />
                      <label
                        htmlFor="push-everything"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        정치경제현안
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="push-email"
                        name="push-notifications"
                        type="radio"
                        value="option2"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        onChange={handleInputChange}
                      />
                      <label
                        htmlFor="push-email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        미래민중논평
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="push-nothing"
                        name="push-notifications"
                        type="radio"
                        value="option3"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        onChange={handleInputChange}
                      />
                      <label
                        htmlFor="push-nothing"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        칼럼연구
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6 mx-10">
            <button
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleButtonClick}
            >
              게시하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function getFormattedDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}
