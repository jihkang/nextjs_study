import prisma from "@/db/supabase";

function getUser() {
    return prisma.user
}

export const prismaTableSelect = (table: "user" | "posts") => async (data: {
    [key: string] : any
}) => {
    const response = await prisma[table].findFirst(data.email);
    console.log(response);
    if (response && response.password === data['password'])  {
        return true;
    }
   return false;
}