import * as React from "react"
import './404.scss';
import Layout from "../components/layout";


const NotFoundPage = () => {
  return (
    <main>
        <Layout>
            <title>Not Found - Faraaz Biyabani</title>
            <div id='not-found'>
                <div className='not-found-content'>
                    <div className='header-1 hero-header'>
                        404
                    </div>
                    <span>Page not found!</span>
                </div>
                <div className='not-found-links-container'>
                    Try these links instead
                    <div className='footer-nav-links'>
                        <a className='footer-link' href={'/#hello'}>About</a>
                        <a className='footer-link' href={'/#projects'}>Projects</a>
                        <a className='footer-link' href={'/resume'}>Resume</a>
                    </div>
                </div>
            </div>
        </Layout>
    </main>
  )
}

export default NotFoundPage
