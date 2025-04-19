"use client";
import { signIn, useSession } from "next-auth/react";

export function Appbar(){
    const session = useSession();
    return <div>
        <div className="flex justify-between text-blue-500">
            <div>
                Muzi
            </div>
            <div>
                {session.data?.user && <button className="m-200 p-2 bg-blue-500" onClick={() => signIn()}>Log out</button>
                }
                {!session.data?.user && <button className="m-200 p-2 bg-blue-500" onClick={() => signIn()}>Sign In</button>
                }
            </div>
        </div>
    </div>
}