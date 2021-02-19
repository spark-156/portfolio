import React, { useState, useEffect } from 'react';
import { Card, Space, Image, Spin, Row, Col } from 'antd';

import "./projects.css";

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true)



    useEffect(() => {
        const getProjects = async () => {
            fetch('/api/projects/all')
                .then(res => { return res.json() })
                .then(projects => { setProjects(projects); setLoading(false) })
        }
        getProjects();
    }, []);

    useEffect(() => {
        console.log("projects", projects)
    }, [projects])

    // TODO update Spin loading to better fit inside the painting
    return loading ? <Spin id="loading" /> : (
        <>
            <div id="projectsTop" className="blackBorder">
                <img id="projectImage" src={`/api/projects/id/${projects[0]._id}/image`} />
                <div id="projectImageCover" />
                <div id="projectCover">
                    <h2>{projects[0].title}</h2>
                    <br />
                    <p>{new Date(projects[0].startDate).toDateString()}</p>
                    <p>{projects[0].endDate ? new Date(projects[0].endDate).toLocaleString() : "Ongoing"}</p>
                    <p>{projects[0].company}</p>
                </div>
            </div>
            <div id="projectsBottom" className="blackBorder">{projects[0].description}</div>
        </>
        // <section id="projectPage">
        //     <section id="projectContainer">
        //         {projects.map(project => {
        //             return (
        //                 <Card className="projectCard"
        //                 key={project._id}
        //             onClick={handleOpenCard}
        //             cover={<img alt="project" src={`/api/projects/id/${project._id}/image`} />}
        //         >
        //             {/* <h2 className="projectCardTitle">{project.title}</h2>
        //             <p className="projectCardDescription">{project.description}</p> */}
        //             <Meta title={project.title} description={project.description} />
        //             <p className="projectCardStatus">Status: {project.endDate ? "Finished" : "In progress"}</p>
        //         </Card>)
        //         })}
        //     </section>
        // </section>
    )
}
