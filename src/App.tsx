import './App.css';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import NavbarContainer from './Components/Navbar/NavbarContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import Friends from './Components/Friends/Friends';
import LoginPage from './Components/Login/login';

const App = (): JSX.Element => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer />
                <NavbarContainer />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile/:profile_id' element={<ProfileContainer />} />
                        <Route path='/dialogs/*' element={<DialogsContainer />} />
                        <Route path='/news' element={<News />} />
                        <Route path='/music' element={<Music />} />
                        <Route path='/friends' element={<Friends />} />
                        <Route path='/settings' element={<Settings />} />
                        <Route path='/users' element={<UsersContainer />} />
                        <Route path='/login' element={<LoginPage />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
