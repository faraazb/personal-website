import React from 'react';
import Header from './header';
import './layout.scss';
import Footer from './footer';


const Layout = ({ children }) => {

    return (
        <div className='layout'>
            <title>Home Page</title>
            <Header/>
            <div className='content'>
                {children}
            </div>
            <Footer />
        </div>
    );
}


export default Layout;
