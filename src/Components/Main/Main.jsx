
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='w-100  '>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;