"use client";
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
const data=[
    {
        id:1,
        title: "En Taze, En LEZZETLİ, En İYİ Anlar!",
        image:"/slide1.jpg",
    },
    {
        id:2,
        title: "Damakta bıraktığı EŞSİZ lezzet!",
        image:"/slide2.jpg",
    },
    {
        id:3,
        title: "PİZZA KEYFİ İÇİN DOĞRU YER",
        image:"/slide3.jpg",
    },
    
]


const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(()=>{
        const interval = setInterval(
            ()=>setCurrentSlide((prev)=>(prev === data.length - 1 ? 0: prev + 1)),
        2000);
        return()=> clearInterval(interval);
    },[]);
    
  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-yellow-50'>
        {/*TEXT CONTAINER*/ }
        <div className='flex-1 flex items-center justify-center flex-col gap-8 text-orange-500 font-bold md:p-6'>
            <h1 className='text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl'>
                {data[currentSlide].title}
            </h1>
            <button className="bg-orange-500 text-white py-4 px-8 ">
                ŞİMDİ SİPARİŞ VER
            </button>
        </div>
        {/*IMAGE CONTAINER*/}
        <div className='w-full h-1/2 relative lg:h-full lg:w-1/2'>
            <Image src={data[currentSlide].image} alt="" fill className='object-cover'/>
        </div>
    </div>
  )
}

export default Slider