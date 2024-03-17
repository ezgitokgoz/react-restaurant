import { prisma } from "@/utils/connect";
import { NextResponse } from "next/server";
//NextResponse = sunucu tarafında HTTP yanıtlarını oluşturmak 



//butun categoriler cekiliyor


//ts dosyası, uygulaamız bunun bir yon dosyası oldugunu biliyor
export const GET = async () => {// bir HTTP GET isteği geldiğinde çalışacak olan bir fonksiyonu dışa aktarır
    try{
        const categories = await prisma.category.findMany();
        return new NextResponse(JSON.stringify(categories),{status:200});
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