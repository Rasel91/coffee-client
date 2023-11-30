import { Link } from "react-router-dom";



const Nabar = () => {


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/added'><li className="mx-4">Added</li></Link>
                        <Link to='/update'><li>Update</li></Link>

                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl">Coffee Shop</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/added'><li className="mx-4">Added</li></Link>
                    <Link to='/update'><li>Update</li></Link>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/login' className="btn">LogIn</Link>
            </div>
        </div>
    );
};

export default Nabar;