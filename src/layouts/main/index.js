import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import './main.scss';


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
