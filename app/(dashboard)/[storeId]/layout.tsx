import prismadb from "@/lib/prismadb";

import { redirect } from "next/navigation";
import authMiddlewareNew from "../../../middleware"
export default async function DashboardLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: { storeId: string }
}) {
    const { userId } = authMiddlewareNew;

        console.log(userId)


    // if (!userId) {
    //     redirect('/sign-in');
    // }

    // const store = await prismadb.store.findFirst({
    //     where: {
    //         id: params.storeId,
    //         userId
    //     }
    // });

    // if (!store) {
    //     redirect('/');
    // }

    // return (
    //     <>
    //         <div>This will be a Navbar</div>
    //         {children}
    //     </>
    // )
}