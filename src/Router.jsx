import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/Main';
import LostPage from './pages/Lost';
import FindPage from './pages/Find';
import FindDetailPage from './pages/FindDetail';
import NoticePage from './pages/Notice';
import NoticeDetailPage from './pages/NoticeDetail';
import Mypage from './pages/Mypage';
import LoginPage from './pages/Login';
import SigninPage from './pages/Signin';
import UploadPage from './pages/Upload';
import Nav from './components/Navbar/Nav';
import Footer from './components/Footer/Footer';
import LostDetailPage from './pages/LostDetail';
import SettingPage from './pages/Setting';
import ChangePassword from './components/Mypage/PwChange';

export default function Router() {
    return (
        <>
            <BrowserRouter>
            <Nav/>
                <Routes>
                    <Route path="/" element={<LoginPage />}/>
                    <Route path="/main" element={<MainPage />}/>
                    <Route path="/lost" element={<LostPage />}/>
                    <Route path="/lost/:p_id" element={<LostDetailPage/>}/>
                    <Route path="/find" element={<FindPage />}/>
                    <Route path="/find/:p_id" element={<FindDetailPage/>}/>
                    <Route path="/notice" element={<NoticePage />}/>
                    <Route path="/notice/:n_id" element={<NoticeDetailPage />}/>
                    <Route path="/mypage" element={<Mypage />}/>
                    <Route path="/mypage/setting" element={<SettingPage />}/>
                    <Route path="/signin" element={<SigninPage />}/>
                    <Route path="/upload" element={<UploadPage />}/>
                    <Route path="/mypage/setting/pw" element={<ChangePassword />}/>
                </Routes>
            <Footer/>
            </BrowserRouter>
        </>
    );
}