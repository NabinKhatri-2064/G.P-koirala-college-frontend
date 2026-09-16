import Caution from "@/app/Components/Caution";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function checkcookies({children} : {children:React.ReactNode}) {

    const cookiestore = await cookies()

    const token = cookiestore.get('access_token')?.value

    if(!token)
    {
        redirect("/");
    }
    else{
        redirect("/admin/adminpanel")
    }


    return (
        <div>
            <Caution/>
            {children}
        </div>
    )
    
}