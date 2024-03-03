import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { connectDB } from "../../../util/database";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청,응답)
{
    let session = await getServerSession(요청,응답, authOptions)

    
    const client = await connectDB;
    const db=client.db("forum");


    let result= await db.collection("comment").find({parentId: new ObjectId(요청.query.id)}).toArray();
    console.log(result)
    응답.status(200).json(result)

    
}