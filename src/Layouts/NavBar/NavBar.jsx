import { Link, NavLink } from "react-router-dom";


const NavBar = () => {
    const navlinks = <>
        <NavLink className={({ isActive }) =>
            isActive ? "text-lg  font-medium border border-[#e9a081] rounded-lg text-[#e9a081] p-2" : "text-lg font-medium hover:bg-[#e9a08166] p-2 rounded-lg hover:text-white"
        } to='/'>Home</NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? "text-lg  font-medium border border-[#e9a081] rounded-lg text-[#e9a081] p-2" : "text-lg font-medium hover:bg-[#e9a08166] p-2 rounded-lg hover:text-white"
        } to='/userProfile'>User Profile</NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? "text-lg  font-medium border border-[#e9a081] rounded-lg text-[#e9a081] p-2" : "text-lg font-medium hover:bg-[#e9a08166] p-2 rounded-lg hover:text-white"
        } to='/updateProfile'>Update Profile</NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? "text-lg  font-medium border border-[#e9a081] rounded-lg text-[#e9a081] p-2" : "text-lg font-medium hover:bg-[#e9a08166] p-2 rounded-lg hover:text-white"
        } to='/about'>About Us</NavLink>
    </>
    return (
        <div className="fixed top-0 z-10 w-full ">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost font-bold text-lg md:text-xl lg:text-2xl ">Dream <span className="text-[#e9a081]">Dwellings</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-5">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end space-x-3 ">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-12 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <Link className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li><Link>Settings</Link></li>
                            <li><Link>Logout</Link></li>
                        </ul>
                    </div>

                    <div className='border  rounded-lg hover:border-[#e9a081]'>
                        <Link to='/login' className="btn hover:text-[#e9a081] hover:bg-white hover:border-[#e9a081] bg-[#e9a081] text-white font-bold text-lg border-none px-5">LogIn</Link>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default NavBar;