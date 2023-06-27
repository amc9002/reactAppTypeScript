import './App.css';
import Header from './Components/Header/Header';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import MyPostsContainer from './Components/Profile/MyPosts/MyPostsContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import NavbarContainer from './Components/Navbar/NavbarContainer';

const App = (): JSX.Element => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer />
                <NavbarContainer />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile' element={<MyPostsContainer />} />
                        <Route path='/dialogs/*' element={<DialogsContainer />} />
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
