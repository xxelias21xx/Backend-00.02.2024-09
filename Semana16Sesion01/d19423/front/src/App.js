import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cancel from "./components/Cancel";

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/success" />
                <Route path="/cancel" element={<Cancel/>} />
                <Route path="/"/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;