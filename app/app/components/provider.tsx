"use client"
//context api in react
import { SessionProvider } from "next-auth/react";

export function Providers({children}: {
    children: React.ReactNode
}){
    return <SessionProvider>
        {children}
    </SessionProvider>
}