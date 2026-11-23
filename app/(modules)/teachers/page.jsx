import React from 'react'
import img from '../teachers/assets/images.jpg'
import Image from 'next/image'

export default function teachers() {
  return (
    <div>
      <Image 
      src="{img}"
      width={200}
      height={100}
      alt="picture "
      />

    </div>
  )
}
