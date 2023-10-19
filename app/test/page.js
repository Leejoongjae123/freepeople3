'use client'
import React from 'react'
import TextEditor from '../components/TextEditor'

export default function Test() {
  return (
    <div>
      <h1>Hello</h1>
      <TextEditor
        initialContent=""
        inputContents=""
        setInputContents=""
      ></TextEditor>
    </div>
  )
}
