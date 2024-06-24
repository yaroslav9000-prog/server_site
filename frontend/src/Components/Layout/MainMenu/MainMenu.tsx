import "./MainMenu.css";
import {NavLink} from "react-router-dom"
function MainMenu(): JSX.Element {
    return (
        <div className="MainMenu">
			<NavLink to="/">Home Page</NavLink>
			<NavLink to="/api/servers">Server List</NavLink>
			<NavLink to="/api/servers/status">Switch Server</NavLink>
        </div>
    );
}

export default MainMenu;
