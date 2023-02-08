import { Route, Routes, Outlet, Navigate } from 'react-router-dom';
import { SignIn } from './pages/SignIn';
import { Contact } from './pages/Contact';
import { getItem } from './utils/functions';
import { Inbox } from './pages/Inbox';
import './styles/global.css';

function ProtectedRoutes({ redirectTo }) {
    const autorization = getItem('token');
    return autorization ? <Outlet /> : <Navigate to={redirectTo} />
}

export function MainRoutes() {
    return (
        <Routes>
            <Route path='/'>
                <Route path='/' element={<Contact />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/signin' element={<SignIn />} />
            </Route>
            <Route element={<ProtectedRoutes redirectTo='/' />}>
                <Route path='/inbox' element={<Inbox />} />
            </Route>
        </Routes>
    );
}
