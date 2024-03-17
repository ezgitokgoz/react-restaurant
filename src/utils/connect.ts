//prismaORM kullanmak için modül oluşturma
//geliştirme sırasında tekrar tekrar örnek oluşturmanın önüne geçer
import { PrismaClient } from '@prisma/client'
//prismaClient nesnesi ORM ile veritabanı işlemlerini gerçekleştirmek için kullanılır

const globalForPrisma = globalThis as unknown as{
    prisma: PrismaClient | undefined
}
export const prisma= globalForPrisma.prisma ?? new PrismaClient()
if(process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
