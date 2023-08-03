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