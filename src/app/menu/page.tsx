//import { menu } from "@/data";
import { MenuType } from "@/types/types";
import Link from "next/link";
import React from "react";

const getData = async () => {      //bir HTTP isteği yaparak belirtilen URL'den kategorilerle ilgili veri alma
  const res = await fetch ("http://localhost:3000/api/categories",{  //istek asenkron yapildigindan "await" ile bekleniyor
    cache:"no-store"  //onbellek kullanilmasın, her zaman guncel veri alinsin
  })
  if(!res.ok){  //http yaniti basarisiz ise (res.ok degilse)
    throw new Error("Faileddd!");   //hata olusturur
  }
  return res.json() //http yaniti basarili ise json formatindaki verileri almak icin res.json() cagirilir ve döndürülür 
}

const MenuPage = async () => {

  const menu:MenuType = await getData()

  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-2rem)] flex flex-col md:flex-row items-center">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="w-full h-1/3 bg-cover p-8 md:h-1/2"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className={`text-${category.color} w-1/2`}>
            <h1 className="uppercase font-bold text-3xl">{category.title}</h1>
            <p className="text-sm my-8">{category.desc}</p>
            <button className={`hidden 2xl:block bg-${category.color} text-${category.color === "black" ? "white" : "red-500"} py-2 px-4 rounded-md`}>Explore</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;