
import  React, {useState} from 'react'
import {AiOutlineDoubleRight, AiOutlineDoubleLeft} from 'react-icons/ai';
import SocialIcons from '../SocialIcons';
import About from './About';

// The "leading" makes space between the contexts
//"gap" apply to the parent div to give more space to the child

const Home  = () => {

    //this will correct the absolute path of the URL making the variable works when hosted
    const image = process.env.PUBLIC_URL + '/images/myProfile3.png';

    //Social Media Handle

    const [social, setSocial] = useState(false);
    
    const handleSocial = () => {
    
    setSocial(!social);

    }

return ( 
    
    // Here the "justify-content" will not take effect if the <div> is not flex, and then the flex-col is apply to vertically align the context inside the div
    // "h-screen" means it is 100vh

 <section>
    <div id='home' className="w-screen flex md:text-5xl mt-5 md:pt-12 bg-cover md:bg-cover md:bg-fixed bg-no-repeat md:bg-center bg-right max-h-screen md:min-h-screen" style={{
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    width: '100%',
    height: '90vh',
    }}>
        <div className='grid sm:grid-cols-5 lg:pl-5 w-screen text-center lg:ml-14 lg:mt-3'>
            <div className='md:text-left md:mt-[100px] text-center sm:ml-12 md:pl-12 md:py-3 sm:flex flex-col md:flex-col md:mx-auto -mt-8'>
            <div className='welcome-msg'>
                <p className="text-xl md:text-3xl md:ml-0 -tracking-normal md:py-1">Hi there, I'm Clent</p>
                <h3 className="text-lg md:text-4xl lg:text-7xl font-semibold md:py-1 md:w-max">UI/UX Developer</h3>
                <p className='text-sm md:text-lg md:py-1'>Please take a time to look around.</p>
            </div>
                <div className='CV-button'>
                    <span className="text-2xl font-semibold download-button">Download CV
                        <a href='https://drive.google.com/file/d/1Xc_-6vw0h1CjI-Qc-7LtzdVrEoFTjtbD/view?usp=sharing'>
                            <svg>
                                <rect 
                                    x='0'
                                    y='0'
                                    fill='none'
                                    width='100%'
                                    height='100%'
                                />
                            </svg>
                        </a>
                    </span>
                </div>
            </div>            
            <div  className='relative -left-12 text-3xl mt-5 w-0'>
                <div onClick={handleSocial} className='hidden md:flex absolute inset-y-36 -left-72'>
                    {!social ? <AiOutlineDoubleRight size={30} className="ml-4 mt-1"/> : <AiOutlineDoubleLeft size={30} className="ml-4 mt-1"/>}
                </div>
            </div>
            {/* Social Media Icons */}
            <div className={!social ? "duration-500 hidden md:flex md:flex-row lg:fixed md:py-2 md:text-4xl md:mt-28 justify-center text-2xl py-5 md:gap-3 pb-2 gap-1 my-5 mr-3 ml-3 md:-left-20 " : "duration-500 md:flex md:flex-row lg:absolute md:-left-7 md:py-0 md:text-4xl md:mt-28 text-2xl py-5 md:gap-3 gap-1 ml-4 "}>
                <SocialIcons/>
            </div>
        </div>
    </div>  
 </section>

    );

}

export default Home;