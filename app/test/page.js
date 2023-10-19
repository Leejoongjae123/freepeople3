"use client";
import React from "react";
import TextEditorTest from "../components/TextEditorTest";
import { useState,useRef,useMemo } from "react";

export default function Test() {
  const editor = useRef(null);
  const [selectedInputs, setSelectedInputs] = useState();
  const [inputTitle, setInputTitle] = useState("");
  const [inputContents, setInputContents] = useState("");

  console.log(inputContents)

  const handleClick= ()=>{
    console.log(inputContents)
  }

  return (
    <div>
      <h1>Hello</h1>
      <TextEditorTest
        initialContent=""
        inputContents={inputContents}
        setInputContents={setInputContents}
      ></TextEditorTest>
      <button onClick={ ()=>{
        handleClick()
      } } className="bg-slate-400">Hello</button>
    </div>
  );
}
