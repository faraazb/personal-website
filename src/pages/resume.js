import React from "react";
import Layout from "../components/layout";
import "./resume.scss";
import data from "../../content/data.json"
import {Seo} from "../components/seo";


const Resume = () => {
    return (
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
    )
}

export default Resume;

export const Head = () => {
    return (
        <>
            <Seo title={'Resume - Faraaz Biyabani'} />
        </>
    )
}
