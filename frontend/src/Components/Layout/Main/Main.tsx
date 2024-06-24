import { Routes, Route } from "react-router-dom";
import "./Main.css";
import Switch from "../../Pages/Switch/Switch";
import Servers from "../../Pages/Servers/Servers";
import Home from "../../Pages/Home/Home";



function Main(): JSX.Element {
    return (
        <div className="Main">
			<Routes>
                <Route index path="/" element={<Home/>}/>
                <Route index path="/api/servers" element={<Servers/>}/>
                <Route index path="/api/servers/status" element={<Switch/>}/>
            </Routes>
        </div>
    );
}

export default Main;
