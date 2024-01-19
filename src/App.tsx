import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Accounts from "./pages/Accounts/Accounts";
import Profiles from "./pages/Profiles/Profiles";
import Campaigns from "./pages/Campaigns/Campaigns";

const App: React.FC = () => {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Accounts/>}/>
                <Route path='/profiles/:id' element={<Profiles/>}/>
                <Route path='/campaigns/:id' element={<Campaigns/>}/>
            </Routes>
        </div>
    );
}

export default App;
