/* eslint-disable prettier/prettier */
'use client'

import { useSession } from 'next-auth/react'

const ClientPage = () => {
    const { data: session } = useSession()

    if (!session || !session.user) return <p>You need to be authenticated</p>
    return <div>
        <h1>Welcome to the Page Client</h1>
    </div>
}

export default ClientPage
