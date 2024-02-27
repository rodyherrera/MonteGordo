import React from 'react';
import Header from '@components/general/Header';
import LoadingScreen from '@components/general/LoadingScreen';
import { Outlet } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
    return (
        <React.Fragment>
            <LoadingScreen />
            <Header />
            <Outlet />
        </React.Fragment>
    );
};

export default Layout;