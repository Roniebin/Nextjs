'use client'

import {signOut} from 'next-auth/react'

export default function LogOutBtn(props)
{
    return (
        <button onClick={()=>{signOut()}}>로그아웃</button>
    )
} 