import { Book } from '../Models/Books';
import express from "express";
import { execute } from "../dal_mySQL/dal_mySQL";
const getAllServers = async () =>{
    try{
        const sql = `
        SELECT servers.id, servers.name, servers.ip, servers.created, servers.active, server_companies.name
        AS "Company" FROM servers
        INNER JOIN server_companies
        ON server_companies.id = servers.hostingCompany 
        `;
        return await execute(sql);
    }catch(err){
        console.log(err)
    }
}
const ChangeStatus = async  (id: number)=>{
    let active: number;
    try{
    const serverCurStatus = await execute(`SELECT Active FROM servers WHERE id=${id}`)
    console.log(serverCurStatus);
    serverCurStatus[0]["Active"]?active =0: active = 1;
    const sql = `UPDATE servers SET Active=${active} WHERE id=${id}`;
    await execute(sql);
    }catch(err){
        console.log(err);
    }
}
export{
    getAllServers,
    ChangeStatus
}