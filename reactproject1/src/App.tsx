import React, { JSXElementConstructor } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { JsxElement } from 'typescript';



const App = (props: any): JSX.Element => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header picLink={props.state.header} />
                <Navbar menu={props.state.sidebar} />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile' element={<Profile
                            profilePage={props.state.profilePage}
                            dispatch={props.dispatch} />} />
                        <Route path='/dialogs/*' element={<Dialogs
                            dialogsData={props.state.dialogsPage}
                            dispatch={props.dispatch} />} />
                        <Route path='/news' element={<News />} />
                        <Route path='/music' element={<Music />} />
                        <Route path='/settings' element={<Settings />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
