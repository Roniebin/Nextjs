import { connectDB } from "../../util/database";

export default async function handler(요청,응답)
{

    if (요청.method=='POST'){
        console.log(요청.body);
        return 응답.status(200).json('여긴 포스트')
    }
    if (요청.method=='GET'){
        const client = await connectDB;

        const db=client.db("forum");
        let result=await db.collection('post').find().toArray();
    
        return 응답.status(200).json(result)
    }
  
    
}