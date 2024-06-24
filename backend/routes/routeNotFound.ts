import {Request,Response,NextFunction} from "express";

//error->model
import { RouteNotFound } from "../Middleware/ClientsErrors";

//middle ware function
const ErrorHandler = (request:Request,response:Response,nextFunction:NextFunction) =>{
    const err = new RouteNotFound(request.originalUrl);
    console.log(err);
    nextFunction(err);
}

export default ErrorHandler;