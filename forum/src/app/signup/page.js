export default function Signup(props)
{
    return(
        <div>
            <form action="/api/signup" method="POST">
                <p>
                <input name="id"></input>
                </p>
                <p>
                <input name="pw"></input>
                </p>
                <p>
                <input name="name"></input>
                </p>
               
               <button type="submit">회원가입</button>
            </form>
        </div>
    )
}