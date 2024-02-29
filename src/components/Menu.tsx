"use client"
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import CartIcon from './CartIcon';

const links = [
    {id:1, title:"ANASAYFA", url:"/"},
    {id:2, title:"MENÜ", url:"/"},
    {id:3, title:"ÇALIŞMA SAATLERİ", url:"/"},
    {id:4, title:"İLETİŞİM", url:"/"}
];


const Menu = () => {
    const [open, setOpen] = useState(false);
    const user = false;
  return (
    <div>
        {!open ?(
            <Image src="/open.png" alt="" width={20} height={20} onClick={()=>setOpen(true)}/>//menuyu ac
        ):(
            <Image src="/close.png" alt="" width={20} height={20} onClick={()=>setOpen(false)}/>//menuyu kapat
        )}
        {open &&(
        <div className="bg-orange-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
            {links.map((item)=>(
                <Link href={item.url} key={item.id} onClick={()=>setOpen(false)}>
                    {item.title}
                </Link>
            ))}
            {!user ? <Link href="/login" onClick={()=>setOpen(false)}>GİRİŞ</Link>:
            <Link href="/orders" onClick={()=>setOpen(false)}>Orders</Link>}
            <Link href="/cart" onClick={()=>setOpen(false)}>
                <CartIcon/>
            </Link>
        </div>)}
    </div>
  )
}

export default Menu