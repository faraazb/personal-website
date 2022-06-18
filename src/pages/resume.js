import React from "react";
import Layout from "../components/layout";
import "./resume.scss";
import data from "../../content/data.json"


const Resume = () => {
    return (
        <main>
            <title>Resume </title>
            <Layout>
                <div className='resume-container'>
                    <div className='resume'>
                        <iframe
                            id='resume-iframe'
                            title='Resume'
                            src={data.resume.embedUrl}
                            allow='autoplay'>
                        </iframe>
                    </div>
                </div>
            </Layout>
        </main>
    )
}

export default Resume;
