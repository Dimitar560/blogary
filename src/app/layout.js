'use client';

import { useState } from 'react';

import HeaderNav from './components/elements/headerNav/HeaderNav';
import './globals.css';

import GlobalContext from './components/GlobalContext/GlobalContext';

export const metadata = {
    title: 'Blogery Login',
    description: 'Blog page',
};

export default function RootLayout({ children }) {

    const [userRole, setUserRole] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);

    const globalContextValue = {

        userRole: userRole,
        setUserRole: setUserRole,

        currentUser: currentUser,
        setCurrentUser: setCurrentUser,

    };

    return (

        <html lang="en">
            <body>
                <GlobalContext.Provider value={globalContextValue}>
                    <HeaderNav />
                    {children}
                </GlobalContext.Provider>
            </body>
        </html>
        
    );
}
