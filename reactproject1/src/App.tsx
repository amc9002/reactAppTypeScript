import React from 'react';
import './App.css';
import Activity from './Components/Activity/Activity';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';



const App = () => {
    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <Activity />
        </div>
    );
}

export default App;
