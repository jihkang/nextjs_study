import { PrismaClient } from "@prisma/client";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const prismaClientSingleton = () => {
  return new PrismaClient({log: ['query' ]});
}

type prismaClientSingleton = ReturnType<typeof prismaClientSingleton>

const globalForPrisma = globalThis as unknown as {
  prisma: prismaClientSingleton | undefined;
}

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;
