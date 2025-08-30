import React from 'react'
import Project from '../components/Projects';
const Projects = () => {
    return (
        <div className="container max-w-7xl mx-auto py-20">
            <h1 className="text-4xl font-bold mb-4 text-center">My Projects</h1>
            <p className="text-lg text-secondary mb-24 text-center">Here are some of my recent projects. Click on
                the links to view the code.
            </p>
            <Project/>
        </div>
    )
}

export default Projects;