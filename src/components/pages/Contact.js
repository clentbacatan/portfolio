import React from 'react';
import Footer from '../Footer';

const Contact = () => {
    return ( 
        <section>
              <div className='contact bg-zinc-50 flex flex-col text-center lg:mt-24'>
                 <div className='md:flex md:flex-col justify-center lg:mt-22 mt-4 p-0 lg:h-[250px] lg:bg-zinc-50 '>
                    <p className="title text-lg lg:text-4xl font-medium"><span className='relative'>Contact Me</span></p>
                <p className="mt-3 lg:mt-7 text-md lg:text-2xl font-semibold font-serif">Let's bring captivating ideas to life, one line of code at a time!</p>
                <button className='border-2 border-solid border-cyan-300 hover:bg-orange-400 px-4 py-3 mt-8 mx-auto flex item-center rounded-lg lg:font-semibold'>Shoot me an email</button>
            </div>
            <Footer/>
        </div>
        </section>
      
     );
}
 
export default Contact;

//
{/* <div className='w-full h-full lg:max-h-min flex justify-center items-center p-5'>
            <form method='POST' action='https://getform.io/f/53a8a898-f938-4a29-ab3e-29cb2b8da59a' className='flex flex-col max-w-[600px] w-full'>
                <div className='text-center py-3'>
                    <p className="lg:text-3xl text-lg font-medium">Contacts</p>
                </div>
                <input className='' type='text' placeholder='Name' name='name'/>
                <input className='my-4' type='email' placeholder='Email' name='email'/>
                <textarea placeholder='Message' name='message' cols='30' rows='10'/>
                <button className='border-2 border-solid border-cyan-300 hover:bg-orange-400 px-4 py-3 mt-3 mx-auto flex item-center'>Shoot me a message</button>
            </form>
        </div> */}