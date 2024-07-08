import logo from '/logo-tecosys.png'
import { Link, matchPath } from 'react-router-dom'
import { IoIosArrowDropdown } from "react-icons/io";
import { useLocation } from 'react-router-dom';
import { NavbarLinks } from '../../data/Constant'



function Navbar() {
    const location = useLocation();
    const matchRoute = (route) => matchPath({ path: route }, location.pathname);
    return (
        <div className='w-full flex place-content-center mb-4'>
            < div className='w-10/12 flex justify-between items-center py-2 px-10 md:px-8 '>
                <div>
                    <Link to='/'>
                        <img src={logo} alt="logo" width={55} className='rounded-full' />
                    </Link>
                </div>
                <nav className='text-lg'>
                    <ul className={`flex  gap-4 md:gap-5 text-richblack-25 `}>
                        {NavbarLinks.map((link, index) => (
                            <li key={index}>
                                <Link
                                    to={link?.url}
                                    className={`${matchRoute(link?.url)
                                        ? "text-[#5D22B2]"
                                        : "text-richblack-100"
                                        } hover:text-[#5D22B2] `}
                                >
                                    <div className='h-full hover:border-b-2 transition-all rounded-b-md px-2'>
                                        {link.title}
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
