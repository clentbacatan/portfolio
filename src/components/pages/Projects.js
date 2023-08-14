import React from 'react';
import ProjectCard from '../ProjectCard';
import projectData from '../../data/projects';

    
const Projects = () => {
    
  // ProjectCard returns the 'return' statement from the 'ProjectCard' component and the 'project' is now a parameter to 'ProjectCard' component and can be interchanged.
    
  return (
      <section>
        <div className='bg-gray-50 md:-mt-9 mt-16 md:h-full w-auto'>
            <h1 className='title lg:text-4xl text-xl mb-6 font-medium text-center lg:mt-24 md:mb-8 pt-6'><span className='relative'>Projects</span></h1>
          <div className='flex-container flex flex-col content-around mx-3'>
            <div className='grid-container md:grid md:grid-cols-3 md:gap-7 md:p-16'>
                    
              <div className='prj-1'>
              <a href='https://clentbacatan.github.io/webportfolio/'>  
                    <ProjectCard project={projectData[0]}/>
                  <div className="parent-prj-btn flex flex-row justify-evenly mt-5">
                      <button className="site-btn"><a href={projectData[0].site}>View Site</a></button>
                      <button className="code-btn"><a href={projectData[0].code}>Source Code</a></button>
                  </div>
                </a>
                </div>
                <div className='project-2'>
                    <ProjectCard project={projectData[1]}/>
                  <div className="parent-prj-btn flex flex-row justify-evenly mt-5">
                      <button className="code-btn"><a href={projectData[1].code}>Source Code</a></button>
                  </div>
                </div>
                <a href='https://e-commerce-app-navy.vercel.app/'>              
                <div className='project-3 relative'>
                    <ProjectCard project={projectData[2]}/>
                  <div className="parent-prj-btn flex flex-row justify-evenly mt-5">
                      <button className="site-btn"><a href={projectData[2].site}>View Site</a></button>
                      <button className="code-btn"><a href={projectData[2].code}>Source Code</a></button>
                  </div>
                </div>
                </a>
              </div>  
            </div>
        </div> 
      </section>   
  );
}
 
export default Projects;



