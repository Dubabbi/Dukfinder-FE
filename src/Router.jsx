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

export default function Router() {
    return (
        <>
            <Nav/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />}/>
                    <Route path="/lost" element={<LostPage />}/>
                    <Route path="/lost/:p_id" element={<LostDetailPage/>}/>
                    <Route path="/find" element={<FindPage />}/>
                    <Route path="/find/:p_id" element={<FindDetailPage/>}/>
                    <Route path="/notice" element={<NoticePage />}/>
                    <Route path="/notice/:n_id" element={<NoticeDetailPage />}/>
                    <Route path="/mypage" element={<Mypage />}/>
                    <Route path="/login" element={<LoginPage />}/>
                    <Route path="/signin" element={<SigninPage />}/>
                    <Route path="/upload" element={<UploadPage />}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </>
    );
}