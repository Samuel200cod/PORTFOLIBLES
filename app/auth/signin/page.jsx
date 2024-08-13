
"use client"
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa"
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Auth() {
    const { data: session } = useSession();

    return (
        <main className="min-h-screen flex justify-center mt-[108px] lg:mt-[120px] lg:pt-0 px-3 md:px-0">
            <div className="h-full w-full md:w-[320px] flex flex-col gap-8 border border-gray-300 rounded-md p-3 md:p-5">
                <p className="text-gray-700">Whether you are a new or an existing user, sign in to continue to your account</p>
                <form
                    action={async () => {
                        await signIn("google", {
                            redirect: false,
                            callbackUrl: "/dashboard"
                        })
                    }}
                    className="flex flex-col gap-3">
                    <button
                        type="submit"
                        className="w-full h-[56px] flex justify-center items-center gap-6 border border-gray-400 rounded-md">
                        <FcGoogle className="text-3xl" />
                        <span className="text-gray-700">GOOGLE</span>
                    </button>
                    <button className="flex justify-center items-center gap-3 border border-green-800 p-2 rounded-lg">
                        <FaGithub className="text-black-700 text-4xl" />
                        <span className="text-lg uppercase" href="github.com">GITHUB</span>
                    </button>
                </form>
            </div>
        </main>
    )
}