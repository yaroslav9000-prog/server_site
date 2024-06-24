import express, {Request, Response, NextFunction} from "express";
import { execute } from "../dal_mySQL/dal_mySQL";
import { ChangeStatus, getAllServers } from "../Controllers/serverController";

const serversRouter = express.Router();

serversRouter.get("/api/servers", async(req: Request, res: Response, next: NextFunction)=>{
    try{
        const servers = await getAllServers();
        await res.status(200).json(servers);
    }catch(err){
        console.log(err)
    }
    next()
})
serversRouter.post("/api/servers/status", async(req: Request, res: Response, next: NextFunction)=>{
    try{
        await ChangeStatus(req.body.id);
        res.status(200).json({"msg": "book was successfully added"});
    }catch(err){
        console.log(err);
    }
    next()
})



export{
    serversRouter,
}