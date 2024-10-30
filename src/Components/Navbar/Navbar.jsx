import { useState } from "react";
import Link from "../Link/Link";
import { RiMenuAddLine, RiCloseFill } from 'react-icons/ri';


const Navbar = () => {

    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/profile/:id', name: 'Profile' }
      ];
      

      


    return (
        <nav>

            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? <RiCloseFill className="text-3xl"></RiCloseFill> : <RiMenuAddLine className="text-3xl"></RiMenuAddLine>
                }
            
            </div>

            <ul className={`md:flex absolute md:static duration-[3000] 
                ${open ? 'top-18' : '-top-[400px]'}`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>

        </nav>
    );
};

export default Navbar;