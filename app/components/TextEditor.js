"use client";
import React, { useRef } from "react";
import dynamic from 'next/dynamic';
import { useState,useMemo,useEffect } from "react";
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });

export default function TextEditor({initialContent,inputContents,setInputContents}) {
  const editor = useRef(null);
  const [content, setContent] = useState();
  const [result, setResult] = useState("")
  
  useEffect( ()=>{
    if(initialContent){
      setContent(initialContent)
    }
  } )

  const placeholder='Hello'
  
  
  const handleClick= ()=>{
    if(content.includes('td style=')){
      let result=content.replaceAll('td style="', `td style="border:1px solid black;`);
      setResult(result)
    }else{
      setResult(content)
    }
  }


  
  
  return (
    <div>
      <h1>안녕하세요</h1>
      <JoditEditor
        ref={editor}
        value={inputContents}
        onChange={(newContent) => {
          setInputContents(newContent)
        }}
      />
    <div>
      <div>
        {content}
      </div>
    <button onClick={handleClick}>
      변환
    </button>
    </div>
    </div>
  );
}

