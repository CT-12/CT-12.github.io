import {Outlet} from 'react-router';
import Navbar from './navbar';

export default function Layout() {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}