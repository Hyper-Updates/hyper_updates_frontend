"use client"

import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <div className='flex flex-row w-full fixed top-0 z-40 px-40 py-4 backdrop-blur-3xl bg-white bg-opacity-50'>
        <Link href="/">Home</Link>
        <div className='ml-auto flex flex-row gap-x-5'>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>

        </div>
    </div>  
  )
}
