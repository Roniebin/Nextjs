import { connectDB } from "../../../../util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props)
{
    const client = await connectDB;

    const db=client.db("forum");
    let result=await db.collection('post').findOne({_id : new ObjectId(props.params.id)})

    console.log(result);
    return(
        <div className="p-20">
        <h4>수정페이지</h4>
        <form action={"/api/post/edit"} method="POST">
           
            <input name="title" defaultValue={result.title}></input><br></br>
            <input name="content" defaultValue={result.content}></input>
            <input style={{display:'none'}}name="_id" value={result._id.toString() }></input>
            <button type="submit">전송</button>
        </form>
    </div>
    )
}