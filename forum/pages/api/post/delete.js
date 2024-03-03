import { connectDB } from "../../../util/database";
import { ObjectId } from "mongodb";

import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청,응답)
{

    let session = await getServerSession(요청,응답, authOptions)

    if(요청.method="DELETE"){
        if (session)
        {
            const client = await connectDB;
            const db=client.db("forum");
            
            console.log(요청.body)
          
            let post=await db.collection("post").findOne({_id: new ObjectId(요청.body)})
           
            console.log(post.author);
            console.log(session.user.email);
            if ((post.author == session.user.email || session.user.email=="admin"))
            {
                await db.collection("post").deleteOne({_id: new ObjectId(요청.body)})
            }

            응답.status(200).redirect("/list")
        }
     
    }
}