import React from 'react';
import Header from './header';
import './layout.scss';
import Footer from './footer';


const Layout = ({ children }) => {

    return (
        <div className='layout'>
            <Header/>
            <main className='content'>
                {children}
            </main>
            <Footer />
        </div>
    );
}


export default Layout;
