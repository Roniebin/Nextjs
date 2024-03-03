import { connectDB } from "../../../util/database";
import { ObjectId } from "mongodb";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청,응답)
{

    console.log(요청.query.어쩌구)
    let session = await getServerSession(요청,응답, authOptions)
    if(요청.method=="GET"){

        
        if(session)
        {
            const client = await connectDB;

            const db=client.db("forum");
            if (요청.body.author==session.user.email){
                요청.query.어쩌구
            }


           
            응답.status(200).redirect("/list")
        }
       
    }
    return 응답.status(200).json()
   
  
    
}


