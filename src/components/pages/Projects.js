
import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react';
import ProjectCard from '../ProjectCard';
import projectData from '../../data/projects';

    
const Projects = () => {

    console.log(projectData);
    
    // ProjectCard returns the 'return' statement from the 'ProjectCard' component and the 'project' is now a parameter to 'ProjectCard' component and can be interchanged.

    

    return (
      <section className="flex flex-col">
         <div className='w-full min-h-full lg:h-[600px] px-2 bg-white-900 mb-5 mt-8 md:mt-20 bg-zinc-50 md:flex md:flex-col md:justify-center md:pb-14 md:px-auto'>
          <h1 className='title lg:text-4xl text-xl mb-6 font-medium text-center lg:mt-24 md:mb-8 pt-6'><span className='relative'>Projects</span></h1>
            <div id="projects" className='md:flex md:flex-row md:justify-around lg:mx-10 md:mx-5 md:mt-5 md:space-x-3'>
              <div className='mb-10 grid lg:grid-cols-1'>
                <ProjectCard project={projectData[0]}/>
              </div>
              <div className='prj-1 mb-10 grid lg:grid-cols-1'>
                <ProjectCard project={projectData[1]}/>
              </div>
              <div className='mb-10 grid lg:grid-cols-1'>
                <ProjectCard project={projectData[2]}/>
                <p className='lg:ml-24 lg:mt-4 lg:font-bold text-center'>This is still on development process</p>
              </div>
          </div>
        </div> 
      </section>  
       
     );
}
 
export default Projects;



