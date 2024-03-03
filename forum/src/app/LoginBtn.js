'use client'

import {signIn} from 'next-auth/react'

export default function LoginBtn(props)
{

    useEffect(()=>{
        if(typeof window !== 'undefined')
        {
            localStorage.getItem('모드')
        }
    },[])


    return (
        <button onClick={()=>{signIn()}}>로그인</button>
    )
} 