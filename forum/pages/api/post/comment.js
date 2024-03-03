import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { connectDB } from "../../../util/database";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청,응답)
{
    let session = await getServerSession(요청,응답, authOptions)


    if(요청.method=="POST")
    {
        const client = await connectDB;
        const db=client.db("forum");
       
        let data=JSON.parse(요청.body)
        
        let 저장할거 ={
            comment : data.comment,
            author :session.user.email,
            parentId : new ObjectId(data.parentId)

        }
        
        await db.collection("comment").insertOne(저장할거)
            
        let result=await db.collection("comment").find({parentId:new ObjectId(data.parentId)}).toArray()
        console.log(result)
        응답.status(200).json(result)
        응답.status(200).redirect('/list')
    }
}