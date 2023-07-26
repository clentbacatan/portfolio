import React from "react";



const Skills = () => {
    return ( 

        //h-screen makes the section fit to the screen
        <section>
            <div id="tools" className="w-full h-full md:h-min md:mt-24 mt-3" >
            <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full">
                <div className="text-center text-lg font-semibold">
                    <h3 className='title lg:text-4xl font-medium text-xl'><span className='relative'>Tech Stack</span></h3>
                </div>

            {/* Skills container */}
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-3 px-2 py-8 text-center lg:mt-5'>
                <div className='shadow-lg rounded-md shadow-slate-500'>
                    <img className="mx-auto h-24 mt-8" src="images/bootstrap.png" alt="/"></img>
                    <p className='font-semibold'>Bootstrap</p>
                </div>
                <div className='shadow-lg rounded-md shadow-slate-500'>
                    <img className="mx-auto h-24 mt-8" src="images/css3.png" alt="/"></img>
                    <p className='font-semibold'>CSS</p>
                </div>
                <div className='shadow-lg rounded-md shadow-slate-500'>
                    <img className="mx-auto h-24 mt-8" src="images/html5.png" alt="/"></img>
                    <p className='font-semibold'>HTML</p>
                </div>
                <div className='shadow-lg rounded-md shadow-slate-500'>
                    <img className="mx-auto h-24 mt-8" src="images/mongo.png" alt="/"></img>
                    <p className='font-semibold'>MongoDB</p>
                </div>
                <div className='shadow-lg rounded-md shadow-slate-500 mt-3'>
                    <img className="mx-auto h-24 mt-8" src="images/node.png" alt="/"></img>
                    <p className='font-semibold'>Node</p>
                </div>
                <div className='shadow-lg rounded-md shadow-slate-500 mt-3'>
                    <img className="mx-auto h-24 mt-8" src="images/react.png" alt="/"></img>
                    <p className='font-semibold'>React</p>
                </div>
                <div className='shadow-lg rounded-md shadow-slate-500 mt-3'>
                    <img className="mx-auto h-24 mt-8" src="images/tailwind.png" alt="/"></img>
                    <p className='font-semibold'>Tailwind</p>
                </div>
                <div className='shadow-lg rounded-md shadow-slate-500 mt-3'>
                    <img className="mx-auto h-24 mt-8" src="images/next.png" alt="/"></img>
                    <p className='font-semibold'>Next</p>
                </div>
            </div>
            </div>
        </div>

        </section>
        

     );
}
 
export default Skills;