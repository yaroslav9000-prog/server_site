import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import MainMenu from "../MainMenu/MainMenu";
import "./MainLayout.css";
import axios from "axios";

function MainLayout(): JSX.Element {
    const [servers, setServers] = useState<any>([]);
    
    
    
    return (
        <div className="MainLayout">
			<header>
                <Header/>
            </header>
            <aside>
                <MainMenu/>
            </aside>
            <main>
                <Main/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default MainLayout;
