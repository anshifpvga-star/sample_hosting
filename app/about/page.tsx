"use client"
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function page() {
  const router = useRouter()
  return ( 
    <div>
     <Link href="/product">productssss</Link>


         <button type="button" onClick={() => router.push('/product')}>
      contact
    </button>
    </div>
  )
}
