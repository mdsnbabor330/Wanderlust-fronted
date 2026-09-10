import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: process.env.PORT,
})

export const { signIn, signUp, useSession } = createAuthClient()