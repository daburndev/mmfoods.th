import React from 'react'
import Image from 'next/image'

function Banner() {
  return (
    <div className=''>
    <Image src='/banner.png'
    alt='banner'
    width={1440}
    height={100}/>
    </div>
  )
}

export default Banner