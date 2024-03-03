import { connectDB } from "../../../util/database";
import bcrypt from 'bcrypt';


export default async function handler(요청,응답){

    if(요청.method =="POST"){
        

        console.log(요청.body)
        if (요청.body.name=="" || 요청.body.email=="" || 요청.body.password=="")
        {
            응답.status(200).json('가입실패')
            console.log(요청.body)
            
        }else{
            
            let hash=await bcrypt.hash(요청.body.password,10)
            요청.body.password=hash;
    
            let db=(await connectDB).db('forum');

            let user_check=await db.collection("user_cred").findOne({email:요청.body.email})
           
            if(user_check){
                응답.status(200).json('가입실패')
            }else{
                console.log(요청.body)
                if(요청.body.email=="admin")
                {
                    요청.body.role="admin"
                }
                else{
                    요청.body.role="normal"
                }
                await db.collection("user_cred").insertOne(요청.body)

                응답.status(200).json('가입성공')
            }
            
        }
     
      
    }
}