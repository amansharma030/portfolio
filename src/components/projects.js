import React from 'react';
import { FaEye } from "react-icons/fa";
import { ProjectList } from "../constants/index";

const Projects = () => {
  return (
    <>
     
      <div className='projects-cover'>
        {ProjectList?.map((project, index) => {
          return (
            <div key={index} className='project'>
              <div className='project-image'>
                <img
                  src={project?.projectImg}
                  alt={project?.projectName || 'Project Image'}
                />
              </div>
              <div className='project-description'>
                <h3>{project?.projectName || 'Untitled Project'}</h3>
                <p>{project?.projectDesc || 'No description available.'}</p>
              </div>
              <div className='project-link'>
                {
                  project?.projectLink?.map((link, ind) => {
                    return (
                      <a href={link?.link}>{link?.linkName} -></a>

                    )
                  })
                }
              </div>
              <div className="project-technologies">
                {project?.technologies?.map((pr, ind) => {
                  return (
                    <>
                      <p>{pr.name}</p>
                    </>
                  )
                })}
              </div>
            </div>

          );
        })}
      </div>
    </>
  );
};

export default Projects;