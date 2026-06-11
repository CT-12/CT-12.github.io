import {Route, Routes} from 'react-router';
import Layout from './components/layout';
import HomePage from './pages/HomePage';

export default function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
            </Route>
        </Routes>
    )
}