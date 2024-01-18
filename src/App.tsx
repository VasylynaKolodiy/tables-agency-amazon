import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Accounts from "./pages/Accounts/Accounts";
import Profiles from "./pages/Profiles/Profiles";
import Campaigns from "./pages/Campaigns/Campaigns";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Accounts/>}/>
                <Route path='/profiles' element={<Profiles/>}/>
                <Route path='/campaigns' element={<Campaigns/>}/>
            </Routes>
        </div>
    );
}

export default App;
