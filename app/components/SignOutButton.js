'use client'

import React from 'react'
import { signOut } from 'next-auth/react'
export default function SignOutButton() {
  const handleClick= ()=>{
    signOut({
      callbackUrl: '/'
    })
  }
  return (
    <div
    className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg"
    href="#"
  >
    <button onClick={()=>{handleClick()}} href="/">
      <span className="mx-2 text-sm font-medium">SignOut</span>
    </button>
  </div>
  )
}
