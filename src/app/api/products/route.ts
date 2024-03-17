//butun ürünler cekiliyor
import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";
//NextResponse = sunucu tarafında HTTP yanıtlarını oluşturmak 
//prisma ögesini connect.ts dosyamızdan çektik, tekrarlanma istemediğimizden tekrar bir nesne oluşturmuyoruz

//ts dosyası, uygulamamız bunun bir yon dosyası oldugunu biliyor
export const GET = async (req: NextRequest) => {
    const {searchParams} = new URL(req.url);
    const cat = searchParams.get("cat");

    try{
        const products = await prisma.product.findMany({
            where:{
                ...(cat? {catSlug: cat} : {isFeatured: true})
            },
        });
        return new NextResponse(JSON.stringify(products),{status:200});
    }catch (err){
        console.log(err);
        return new NextResponse(
            JSON.stringify({message: "bir seyler yanlis gidiyor!"}),
            {status:500}
        );

    }
};

export const POST = () => {
    return new NextResponse("Hello", {status:200});
}