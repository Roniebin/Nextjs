import { getServerSession } from "next-auth";
import { connectDB } from "../../../util/database";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청,응답)
{

    let session = await getServerSession(요청,응답, authOptions)

    if(session)
    {
        if(요청.method=="POST"){

            if (요청.body.title==''){
                return 응답.status(500).json('너 제목 왜 안씀')
            }
    
            try {
                const client = await connectDB;
                const db=client.db("forum");
                요청.body.author=session.user.email;
                await db.collection("post").insertOne(요청.body)
              
               
                응답.status(200).redirect('/list')
            }catch(error)
            {
                return 응답.status(200).json("실패")
            }
            
           
    
        }
    }
   
  
}