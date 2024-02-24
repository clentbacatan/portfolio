import React, {useState, useEffect} from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import SocialIcons from './SocialIcons';


// REVAMPING:
// * Must be responsive in any screens
// * The transition will cover the whole screen. Motion is from LEFT TO RIGHT
//  reference: https://evervault.com/?ref=godly
// * Fonts must be big



const Navbar = () => {
    const [nav, setNav] = useState(true);
    // This function will set the menuOutline to either AiOutlineClose or AiOutlineMenu when clicked
    const handleNav = () => {
     setNav(!nav);
    }


    // Handles the Scroll features

    useEffect(() => {
        const nav = document.querySelector('nav');
        window.onscroll = function () {
            if (document.documentElement.scrollTop > 10) {
                nav.classList.add("bg-slate-400", "top-0", "z-10");
            } else {
                nav.classList.remove("bg-slate-400", "top-0");
            }
        }
    })
 
    return (
     <nav className={undefined}>
      <div className={style.logoBurgerContainer}>
       
       <div className={style.logoContainer}>
           <h1 className={style.logo}><a href="/">CB</a></h1>
       </div>

       <div className={style.burger}>
         <button onClick={handleNav}>
           {nav ? <AiOutlineMenu size={24}/> : <AiOutlineClose size={24}/>}
          </button> 
       </div>
      </div>
          
      <div>
        <ul className="hidden md:flex md:flex-row">
          <li className="p-5 font-serif font-black text-xl"><a href="/about">About</a></li>
          <li className="p-5 font-serif font-black text-xl"><a href="/project">Projects</a></li>
          <li className="p-5 font-serif font-black text-xl" ><a href="/skills">Tools</a></li>
          <li className="p-5 font-serif font-black text-xl"><a href="/contactform">Contact</a></li>
        </ul>
      </div>

      {/* SideNav */}
           
      <div className={!nav ? style.sideNav : style.sideNavHidden}>
        <div>
         <div className="w-full text-3xl ml-5 mt-5 font-medium">CB</div>
        </div>
        
        <div id="sideNav" className={style.sideNavLists}>
          <ul className={style.sideNavLists}>
              <li onClick={handleNav} className=""><a href="/about">About</a></li>
              <li onClick={handleNav} className="" ><a href="/project">Projects</a></li>
              <li onClick={handleNav} className="" ><a href="/skills">Tools</a></li>
              <li onClick={handleNav} className=""><a href="/contactform">Contact</a></li>
           </ul>
        </div>
        
        <div className='sm:flex mr-1'>
            <SocialIcons />
        </div>
      </div>
        </nav>

    );
}

export default Navbar;

const style = {
  mainContainer: "flex sticky top-0 items-center md:flex-row justify-between h-20 lg:min-w-full mx-auto px-4",
  logoBurgerContainer: "flex w-screen justify-between mt-7",
  logoContainer: "ml-4",
  logo: "text-3xl font-medium",
  burger: "mr-4 mt-1.5 md:hidden",
  sideNav: "fixed left-0 top-0 w-9/12 border-r h-full mr-3 transition ease-in-out duration-500 bg-blue-100 font-poppins",
  sideNavHidden: "fixed h-full -left-2/4 top-0.5 transition ease-in-out duration-500 ",
  sideNavLists: "font-serif font-black ml-4 h-80 flex flex-col justify-around text-xl bg-red-100 md:flex md:flex-row"
}
  
