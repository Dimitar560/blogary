'use client';

import { useContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { redirect } from 'next/navigation';

import Link from 'next/link';

import ResponsiveNav from './ResponsiveNav';

import GlobalContext from '@/app/components/GlobalContext/GlobalContext';

import Loading from '@/app/loading';

import style from './HeaderNav.module.css';

export default function HeaderNav({ }) {

    const [awaitingResponse, setAwaitingResponse] = useState(false);
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    const userRole = useContext(GlobalContext).userRole;
    const setUserRole = useContext(GlobalContext).setUserRole;
    const setCurrentUser = useContext(GlobalContext).setCurrentUser;

    const pathname = usePathname();

    function logoutHandler() {

        setAwaitingResponse(true);

        setTimeout(() => {

            setUserRole(null);
            setCurrentUser(null);
            setAwaitingResponse(false);
            redirect('/');

        }, 1000);

    }

    // Check the width

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <>
            {awaitingResponse && <Loading />}

            {windowSize > 600 ?

                <nav className={style.headerNav}>
                    <span>Blogery</span>

                    <Link href={'/'}>
                        <span
                            className={pathname === '/' ? style.active : ''}
                        >
                            Home
                        </span>
                    </Link>
                    {userRole === 'LoggedUser' &&
                        <Link href={'/createBlog'}>
                            <span
                                className={pathname === '/createBlog' ? style.active : ''}
                            >
                                Create Blog
                            </span>
                        </Link>
                    }
                    <Link href={'/allBlogs'}>
                        <span
                            className={pathname === '/allBlogs' ? style.active : ''}
                        >
                            All Blog
                        </span>
                    </Link>
                    {userRole === 'LoggedUser' &&

                        <span style={{ cursor: 'pointer', fontSize: '1.3rem' }} onClick={logoutHandler}>
                            Log out
                        </span>

                    }

                </nav>

                : <ResponsiveNav path={pathname} />}
        </>
    );

}