import React from 'react';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';

const Contact = () => {

    const navigate = useNavigate();

    // This is the function to navigate to another page

    const navigateToForm = (e) => {
        e.preventDefault();
        navigate('/contactform');

    }

    return (
        <section>
            <div id='contact' className='contact bg-zinc-50 flex flex-col text-center lg:mt-24'>
                <div className='md:flex md:flex-col justify-center lg:mt-22 mt-4 p-0 lg:h-[250px] lg:bg-zinc-50 '>
                    <p className="title text-lg lg:text-4xl font-medium"><span className='relative'>Contact Me</span></p>
                    <p className="mt-3 lg:mt-7 text-md lg:text-2xl font-semibold font-serif">Let's bring captivating ideas to life, one line of code at a time!</p>
                    {/* This approach can also be done for the onClick button or also called as anonymous function */}
                    {/* onClick={() => navigate('/contactform')} */}
                    <button onClick={navigateToForm} className='border-2 border-solid border-cyan-300 hover:bg-orange-400 px-4 py-3 mt-8 mx-auto flex item-center rounded-lg lg:font-semibold'>Shoot me an email</button>
                </div>
                <Footer />
            </div>
        </section>
    );
}

export default Contact;

