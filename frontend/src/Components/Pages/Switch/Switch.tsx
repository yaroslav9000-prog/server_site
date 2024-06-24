import { useEffect, useState } from "react";
import "./Switch.css";
import axios from "axios";



function Switch(): JSX.Element {
    const[id, setId] = useState(0);
    const onSubmit = async (currValue: number)=>{
        axios.post("http://localhost:3500/api/servers/status",currValue);
    }
    useEffect(()=>{
        // console.log(id);
    },[id])    
    return (
        <div className="Switch">
			{/* <input type="number" onChange={(event)=>{setId(parseInt(event.target.value))}}/><br />
            <input type="submit" onClick={(id)=>{onSubmit(id)}} value={"submit"}/> */}
        </div>
    );
}

export default Switch;
