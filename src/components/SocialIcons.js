import  React from "react";
import {AiFillFacebook, AiFillGithub, AiFillLinkedin} from 'react-icons/ai';



export default function SocialIcons ()  {

    const social =  {
   
    facebook: <AiFillFacebook/>,
    github: <AiFillGithub/>,
    linkedin: <AiFillLinkedin/>

}

    return ( 
        <ul className='md:hidden flex lg:flex lg:flex-col ml-2 p-2 gap-2 md:flex-row'>
            <li className='rounded-2xl shadow-xl shadow-slate-500'><a href="https://www.facebook.com/clentbacatan/">{social.facebook}</a></li>
            <li className='rounded-2xl shadow-xl shadow-slate-500'><a href="https://github.com/clentbacatan">{social.github}</a></li>
            <li className='rounded-2xl shadow-xl shadow-slate-500'><a href="https://www.linkedin.com/in/clent-vincent-bacatan-5a5b531b6/">{social.linkedin}</a></li>
        </ul>


    );

}
    
    


// Original Code:
// <div className=''>
        //     <a className='md:rounded-full md:shadow-lg shadow-gray-400'  href=""><AiFillFacebook {...style}/></a> 
        //     <a className='md:rounded-full md:shadow-lg shadow-gray-400'  href=""><AiFillGithub/></a>
        //     <a className='md:rounded-full md:shadow-lg shadow-gray-400'  href=""><AiFillLinkedin/></a>
        // </div>

        // bg-red-200 sm:flex md:flex-col md:left-0 md:py-2 md:text-3xl md:top-[20%] md:mt-14 justify-center text-2xl py-5 md:gap-3 pb-2 gap-1 my-5 mr-3 lg:fixed hidden