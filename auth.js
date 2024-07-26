import NextAuth from "next-auth";
import Googleprovider from "next-auth/providers/google"

export const {auth,handlers,signIn,signOut} = NextAuth({
    providers:[
        Googleprovider({
            clientId:process.env.GOOGLE_ClIENT_ID
           // clientSecret:process.env.GOOGLE_ClIENT_SECRET
        }),
    ]
})
