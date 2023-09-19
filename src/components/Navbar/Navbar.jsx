import { useState } from "react";
import Link from "../Link/Link";
import {RiMenu2Fill , RiCloseCircleFill} from 'react-icons/ri';
const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' },
      ];
    return (
        <nav className="p-10">
        <div className="md:hidden" onClick={()=>setOpen(!open)}>
        {
            open === true ? <RiCloseCircleFill className="text-2xl">
            </RiCloseCircleFill> : <RiMenu2Fill className="text-2xl">
            </RiMenu2Fill>
        }
            
        </div>
            <ul className={`md:flex md:static duration-1000 px-6 absolute bg-orange-600 ${open ? 'top-16':'-top-60' }`}>
                {
                    routes.map(route => <Link key={route.id} 
                    route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;