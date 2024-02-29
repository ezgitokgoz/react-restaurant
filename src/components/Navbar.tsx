import React from 'react'
import Menu from "./Menu";
import Link from 'next/link';
import CartIcon from './CartIcon';
import Image from 'next/image';


const Navbar = () => {
    const user = false;
  return (
    <div className="h-12 text-orange-500 p-4 flex items-center justify-between border-b-2 border-b-orange-600 uppercase md:h-24 lg:px-20 xl:px-40">
        <div className="hidden md:flex gap-4 flex-1">
            <Link href="/">ANASAYFA</Link>
            <Link href="/menu">MENÜ</Link>
            <Link href="/">İLETİŞİM</Link>
        </div>
        {/*logo*/}
        <div className="text-xl md:font-bold flex-1 md:text-center">
            <Link href="/">Pizzatlas</Link>
        </div>
        {/*mobile menu*/}
        <div className="md:hidden">
            <Menu/>
        </div>
        <div className="hidden md:flex gap-4 items-center justify-end flex-1">
            <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-yellow-300 px-1 rounded-md">
                <Image src="/phone.png" alt="" width={20} height={20}/>
                <span>555 44 00</span>
            </div>
            <CartIcon/>
            {!user ?(
            <Link href="/login">GİRİŞ</Link>
            ):(
            <Link href="/orders">SİPARİŞ</Link>)}
            
        </div>
    </div>
  )
}

export default Navbar