import React, { useState } from 'react';
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import styled from "styled-components";
import './Home.css';

const Page = styled.div`
    // width: 100%;
    display: grid;
    min-height: 100vh;
    column-gap: 45px;
    // grid-template-columns: 5fr 15fr; 
    // grid-template-rows: auto;
    background-color: ${props => props.theme.pageBackground};
    color: ${props => props.theme.textColor};
`;



function Home() {

    const [sidebarOpen, setsidebarOpen] = useState(false);

    const openSidebar = () => {
      setsidebarOpen(true);
    };

    const closeSidebar = () => {
      setsidebarOpen(false);
    };

    return (
        <Page>
            <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
            <Main />
            <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
        </Page>
    )
}

export default Home;
