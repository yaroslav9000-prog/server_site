import { useEffect, useState } from "react";
import "./Servers.css";
import axios from "axios";




function Servers(): JSX.Element {
    const [servers,setServers] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3500/api/servers")
        .then(data=> data.data)
        .then(data=> {setServers(data); console.log(data)});
    },[]);
    
    return (
        <div className="Servers">
            {servers.map((item, index)=>(
                <div key={index} className="Box">
                    <h3>{item["name"]}</h3>
                    <h3>{item["ip"]}</h3>
                    <h3>{item["id"]}</h3>
                    <h3>{item["created"]}</h3>
                    <h3>{item["Active"]}</h3>
                </div>
            ))}
        </div>
    );
}

export default Servers;
