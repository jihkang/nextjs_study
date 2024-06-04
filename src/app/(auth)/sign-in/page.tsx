
import { prisma } from "@/db/supabase";
import {prismaTableSelect} from "@/db/prisma";


const auth = async (formData:FormData) => {
    "use server";

    const obj = {
        id : formData.get("email"),
        password: formData.get("password"),
    }
    console.log(obj);
    const response = await prismaTableSelect("user")(obj);
    if (response === true) {
        console.log('congratulation for login')
    } else {
        console.log('login failed')
    }
}

export default async function Page() {

    const signIn = async (formData: FormData) => {
        "use server";
        console.log(formData.get("email"), formData.get("password"))
        try {
            // console.log(await prismaTableSelect("user")(formData.get("email")));
            await auth(formData);
        }

        catch (e) {
            console.log(e);
        }

    }

  return (
    <>
      <form action={signIn}>
        <input name="email" id="email" type="email" placeholder="Email" />
        <input name="password" id="password" type="password" placeholder="Password" />
        <button type="submit">Sign in</button>
      </form>
    </>
  );
}
