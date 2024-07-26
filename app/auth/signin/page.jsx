 "use client"
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react"
import { FaXTwitter } from "react-icons/fa6";

export default function Auth() {
    const {data:session} = useSession();
    // console.log("get user session",session.user);

    return (
        <main className="h-screen flex justify-center items-center py-10 px-5">
            <div className="w-full md:w-[380px] flex flex-col gap-4 border border-slate-300 rounded-lg py-6 px-3">
                <h1 className="text-xl">Whether you are a new or existing user,sign in to continue your account</h1>
                <form
                action={async () => {
                    await signIn("gooogle")
                }}
                className="flex flex cols gap-3">
                    <button 
                    type="submit"
                    className="flex justify-center items-center gap-3 border border-green-800 p-2 rounded-lg">
                        <FcGoogle className="text-green-700 text-4xl" />
                        <span className="text-lg uppercase">Google</span>
                    </button>
                    <button className="flex justify-center items-center gap-3 border border-green-800 p-2 rounded-lg">
                        <FaGithub className="text-black-700 text-4xl" />
                        <span className="text-lg uppercase">Github</span>
                    </button>
                    {/* <button className="flex justify-center items-center gap-5 border border-green-800 p-2 rounded-lg">
                        <FaXTwitter className="text-black-700 text-4xl" />
                        <span className="text-lg uppercase">Twitter</span>
                    </button> */}
                </form>
            </div>
        </main>
    ) 
}