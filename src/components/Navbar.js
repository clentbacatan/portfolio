import React, {useState, useEffect} from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineDoubleRight} from 'react-icons/ai';
import  SocialIcons from '../components/SocialIcons';



    const Navbar = () => {
         const [nav, setNav] = useState(true);
        
         // This function will set the menuOutline to either AiOutlineClose or AiOutlineMenu when clicked
            const handleNav = () => {
                setNav(!nav);
        
                }
    

        // Handles the Scroll features
    
        useEffect(() => {
            const nav= document.querySelector('nav');
                window.onscroll = function () {
                    
            if(document.documentElement.scrollTop > 10) {
                nav.classList.add("bg-slate-400", "top-0", "z-10");
            } else {
                nav.classList.remove("bg-slate-400", "top-0");
            }
        }
    })

    return (    
        
    <nav className="flex sticky top-0 items-center md:flex-row justify-between h-20 lg:min-w-full mx-auto px-4 ">
            <h1 className="w-full md:w-8 lg:ml-28 md:ml-7 text-3xl font-medium"><a href="/">CB</a></h1>
        <ul className="hidden md:flex md:flex-row">
            <li className="p-5 font-serif font-black text-xl"><a href="/about">About</a></li>
            <li className="p-5 font-serif font-black text-xl"><a href="/project">Projects</a></li>
            <li className="p-5 font-serif font-black text-xl" ><a href="/skills">Tools</a></li>
            <li className="p-5 font-serif font-black text-xl"><a href="/contactform">Contact</a></li>
        </ul>

        {/* If clicked the 'AioutlineClose' will render */}
        {/*  The "block md:hidden" will hide the outLine on medium size to large size */}
        <div onClick={handleNav} className="block md:hidden">
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}   
        </div>

        <div className={!nav ? "fixed left-0 top-0 w-{60%} border-r h-full mr-3 transition ease-in-out duration-500 bg-blue-50" :"fixed h-full -left-20 top-0.5 transition ease-in-out duration-500"}>
            <h1 className="w-full text-3xl ml-5 mt-5 font-medium">CB</h1>
            <ul className="pt-4">
                <li onClick={handleNav} className="p-5 font-serif"><a href="#about">About</a></li>
                <li onClick={handleNav} className="p-5 font-serif" ><a href="#projects">Projects</a></li>
                <li onClick={handleNav} className="p-5 font-serif" ><a href="#tools">Tools</a></li>
                <li onClick={handleNav} className="p-5 font-serif"><a href="#contact">Contact</a></li>
            </ul>

        {/* Social Media Handles */}
            <div className='sm:flex mr-1'>
                <SocialIcons/>
            </div>
        </div>
    </nav>

     );
}
 
export default Navbar;
