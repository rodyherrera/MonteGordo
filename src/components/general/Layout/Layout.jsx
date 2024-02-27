import React from 'react';
import Header from '@components/general/Header';
import { Outlet } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
    return (
        <React.Fragment>
            <Header />
            <Outlet />
        </React.Fragment>
    );
};

export default Layout;