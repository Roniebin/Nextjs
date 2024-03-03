import { getServerSession } from "next-auth"
import { authOptions } from "../../../pages/api/auth/[...nextauth]";
export default async function Write()
{

    let session = await getServerSession(authOptions)

    console.log(session);
    
    if (!session){
        return (
            <div>
                로그인해야함
            </div>
        )
    }

    return (
        <div className="p-20">
            <h4>글작성</h4>
            <form action="/api/post/new" method="POST">
                <input name="title"></input><br></br>
                <input name="content"></input>
                <button type="submit">버튼</button>
            </form>
        </div>
    )
}